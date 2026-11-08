<?php
/**
 * RIHANNA SIGNATURE SAFARI - PUBLIC JOURNAL API
 * Serves dynamic published articles to blog.html and blog-single.html
 */

declare(strict_types=1);
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../portal/includes/config.php';
require_once __DIR__ . '/../portal/includes/functions.php';

try {
    $pdo = getDbConnection();

    // 1. Single Article by Slug
    if (isset($_GET['slug']) && !empty($_GET['slug'])) {
        $slug = trim((string)$_GET['slug']);
        $stmt = $pdo->prepare("SELECT * FROM `posts` WHERE `slug` = ? AND `status` = 'published' LIMIT 1");
        $stmt->execute([$slug]);
        $post = $stmt->fetch();

        if (!$post) {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Chronicle not found']);
            exit;
        }

        // Increment view count
        $updateViews = $pdo->prepare("UPDATE `posts` SET `views` = `views` + 1 WHERE `id` = ?");
        $updateViews->execute([$post['id']]);

        // Get 3 recent related stories
        $relatedStmt = $pdo->prepare("SELECT `id`, `title`, `slug`, `category`, `featured_image`, `read_time`, `created_at` FROM `posts` WHERE `status` = 'published' AND `id` != ? ORDER BY `created_at` DESC LIMIT 3");
        $relatedStmt->execute([$post['id']]);
        $related = $relatedStmt->fetchAll();

        echo json_encode([
            'success' => true,
            'article' => [
                'id'             => (int)$post['id'],
                'title'          => $post['title'],
                'slug'           => $post['slug'],
                'category'       => $post['category'],
                'featured_image' => $post['featured_image'],
                'excerpt'        => $post['excerpt'],
                'content'        => $post['content'],
                'author'         => $post['author'],
                'author_title'   => $post['author_title'],
                'author_avatar'  => $post['author_avatar'],
                'read_time'      => $post['read_time'],
                'tags'           => !empty($post['tags']) ? array_map('trim', explode(',', $post['tags'])) : [],
                'views'          => (int)$post['views'] + 1,
                'published_at'   => $post['created_at'],
                'formatted_date' => date('F j, Y', strtotime($post['created_at'])),
                'date_parts'     => [
                    'day'   => date('d', strtotime($post['created_at'])),
                    'month' => date('F', strtotime($post['created_at'])),
                    'year'  => date('Y', strtotime($post['created_at']))
                ]
            ],
            'related' => array_map(function($r) {
                return [
                    'title'          => $r['title'],
                    'slug'           => $r['slug'],
                    'category'       => $r['category'],
                    'featured_image' => $r['featured_image'],
                    'read_time'      => $r['read_time'],
                    'formatted_date' => date('M j, Y', strtotime($r['created_at']))
                ];
            }, $related)
        ]);
        exit;
    }

    // 2. List Articles
    $category = trim((string)($_GET['category'] ?? ''));
    $query    = trim((string)($_GET['q'] ?? ''));
    $limit    = min(50, max(1, (int)($_GET['limit'] ?? 20)));

    $sql = "SELECT `id`, `title`, `slug`, `category`, `featured_image`, `excerpt`, `author`, `author_title`, `read_time`, `views`, `created_at` FROM `posts` WHERE `status` = 'published'";
    $params = [];

    if (!empty($category) && $category !== 'all') {
        $sql .= " AND `category` = :cat";
        $params[':cat'] = $category;
    }

    if (!empty($query)) {
        $sql .= " AND (`title` LIKE :q OR `excerpt` LIKE :q OR `tags` LIKE :q)";
        $params[':q'] = '%' . $query . '%';
    }

    $sql .= " ORDER BY `created_at` DESC LIMIT " . $limit;
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $posts = $stmt->fetchAll();

    // Get categories list
    $catsStmt = $pdo->query("SELECT `category`, COUNT(*) as count FROM `posts` WHERE `status` = 'published' GROUP BY `category` ORDER BY count DESC");
    $categories = $catsStmt->fetchAll();

    echo json_encode([
        'success'    => true,
        'count'      => count($posts),
        'categories' => $categories,
        'articles'   => array_map(function($p) {
            return [
                'id'             => (int)$p['id'],
                'title'          => $p['title'],
                'slug'           => $p['slug'],
                'category'       => $p['category'],
                'featured_image' => $p['featured_image'],
                'excerpt'        => $p['excerpt'],
                'author'         => $p['author'],
                'author_title'   => $p['author_title'],
                'read_time'      => $p['read_time'],
                'views'          => (int)$p['views'],
                'published_at'   => $p['created_at'],
                'formatted_date' => date('M j, Y', strtotime($p['created_at'])),
                'date_parts'     => [
                    'day'   => date('d', strtotime($p['created_at'])),
                    'month' => date('F', strtotime($p['created_at'])),
                    'year'  => date('Y', strtotime($p['created_at']))
                ]
            ];
        }, $posts)
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
exit;

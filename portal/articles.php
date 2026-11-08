<?php
/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL
 * Journal Articles Manager
 */

declare(strict_types=1);
$pageTitle = 'Journal Articles';
require_once __DIR__ . '/includes/header.php';

// Filter
$statusFilter = strtolower(trim((string)($_GET['status'] ?? 'all')));
$searchQuery  = trim((string)($_GET['q'] ?? ''));

$sql = "SELECT * FROM `posts` WHERE 1=1";
$params = [];

if ($statusFilter !== 'all' && !empty($statusFilter)) {
    $sql .= " AND `status` = :status";
    $params[':status'] = $statusFilter;
}

if (!empty($searchQuery)) {
    $sql .= " AND (`title` LIKE :q OR `category` LIKE :q OR `excerpt` LIKE :q OR `tags` LIKE :q)";
    $params[':q'] = '%' . $searchQuery . '%';
}

$sql .= " ORDER BY `created_at` DESC";
$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$articles = $stmt->fetchAll();

$counts = [
    'all'       => (int)$pdo->query("SELECT COUNT(*) FROM `posts`")->fetchColumn(),
    'published' => (int)$pdo->query("SELECT COUNT(*) FROM `posts` WHERE `status` = 'published'")->fetchColumn(),
    'draft'     => (int)$pdo->query("SELECT COUNT(*) FROM `posts` WHERE `status` = 'draft'")->fetchColumn(),
];
?>

<!-- Header -->
<div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
  <div>
    <h1 style="font-family: var(--font-serif); font-size: 28px; color: #ffffff; margin: 0 0 4px 0;">
      <i class="fa-solid fa-newspaper mr-2" style="color: var(--portal-gold);"></i> Safari Journal Articles
    </h1>
    <p style="font-size: 13px; color: var(--portal-text-muted); margin: 0;">
      Write, edit, and manage articles published on the website journal.
    </p>
  </div>

  <div style="display: flex; gap: 10px;">
    <a href="../blog.html" target="_blank" class="btn-portal-secondary">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> View Live Journal
    </a>
    <a href="article-edit.php" class="btn-portal-gold">
      <i class="fa-solid fa-plus mr-1"></i> Write Article
    </a>
  </div>
</div>

<!-- Filter Bar -->
<div class="portal-card" style="padding: 16px 20px; margin-bottom: 20px;">
  <div class="portal-filter-bar" style="margin-bottom: 0;">
    <div class="portal-filter-pills">
      <a href="articles.php" class="filter-pill <?= $statusFilter === 'all' ? 'active' : '' ?>">
        All Articles (<?= $counts['all'] ?>)
      </a>
      <a href="articles.php?status=published" class="filter-pill <?= $statusFilter === 'published' ? 'active' : '' ?>">
        Published (<?= $counts['published'] ?>)
      </a>
      <a href="articles.php?status=draft" class="filter-pill <?= $statusFilter === 'draft' ? 'active' : '' ?>">
        Drafts (<?= $counts['draft'] ?>)
      </a>
    </div>

    <!-- Search Form -->
    <form action="articles.php" method="GET" style="display: flex; gap: 8px;">
      <?php if ($statusFilter !== 'all'): ?>
        <input type="hidden" name="status" value="<?= e($statusFilter) ?>">
      <?php endif; ?>
      <div class="portal-search-input">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="q" class="portal-input" placeholder="Search by title, tag..." value="<?= e($searchQuery) ?>" style="padding-top: 8px; padding-bottom: 8px;">
      </div>
      <button type="submit" class="btn-portal-gold" style="padding: 8px 16px;">Search</button>
      <?php if (!empty($searchQuery)): ?>
        <a href="articles.php<?= $statusFilter !== 'all' ? '?status=' . e($statusFilter) : '' ?>" class="btn-portal-secondary" style="padding: 8px 14px;">Clear</a>
      <?php endif; ?>
    </form>
  </div>
</div>

<!-- Articles Table -->
<div class="portal-card" style="padding: 0;">
  <div class="portal-table-wrap">
    <table class="portal-table">
      <thead>
        <tr>
          <th>Story &amp; Category</th>
          <th>Author</th>
          <th>Read Time</th>
          <th>Views</th>
          <th>Status</th>
          <th>Date</th>
          <th style="text-align: right;">Actions</th>
        </tr>
      </thead>
      <tbody>
        <?php if (empty($articles)): ?>
          <tr>
            <td colspan="7" style="text-align: center; padding: 60px 20px; color: var(--portal-text-muted);">
              <i class="fa-solid fa-newspaper" style="font-size: 36px; color: var(--portal-gold); margin-bottom: 12px; display: block;"></i>
              No journal articles found. <a href="article-edit.php" style="color: var(--portal-gold);">Write your first story</a>!
            </td>
          </tr>
        <?php else: ?>
          <?php foreach ($articles as $art): ?>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 14px;">
                  <img src="<?= resolveMediaUrl($art['featured_image']) ?>" alt="Thumbnail" style="width: 60px; height: 60px; border-radius: 3px; object-fit: cover; border: 1px solid var(--portal-surface-border); flex-shrink: 0;">
                  <div style="min-width: 0;">
                    <span style="font-size: 10.5px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; color: var(--portal-gold);">
                      <?= e($art['category']) ?>
                    </span>
                    <h3 style="font-size: 14.5px; font-weight: 700; color: #ffffff; margin: 2px 0 3px 0;">
                      <a href="article-edit.php?id=<?= $art['id'] ?>" style="color: #ffffff; text-decoration: none;">
                        <?= e($art['title']) ?>
                      </a>
                    </h3>
                    <div style="font-size: 11.5px; color: var(--portal-text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 380px;">
                      <?= e($art['excerpt']) ?>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div style="font-size: 13px; font-weight: 600; color: #ffffff;"><?= e($art['author']) ?></div>
                <div style="font-size: 11px; color: var(--portal-text-muted);"><?= e($art['author_title']) ?></div>
              </td>
              <td style="font-size: 12.5px; color: var(--portal-text-secondary); white-space: nowrap;">
                <i class="fa-solid fa-clock mr-1" style="color: var(--portal-gold); font-size: 11px;"></i> <?= e($art['read_time']) ?>
              </td>
              <td style="font-size: 13px; font-weight: 700; color: #ffffff;">
                <i class="fa-solid fa-eye mr-1" style="color: var(--portal-gold); font-size: 11px;"></i> <?= number_format($art['views']) ?>
              </td>
              <td>
                <?= articleStatusBadge($art['status']) ?>
              </td>
              <td style="font-size: 12px; white-space: nowrap;">
                <div><?= date('M j, Y', strtotime($art['created_at'])) ?></div>
                <div style="font-size: 11px; color: var(--portal-text-muted);"><?= timeAgo($art['created_at']) ?></div>
              </td>
              <td style="text-align: right; white-space: nowrap;">
                <div class="portal-table-actions" style="justify-content: flex-end;">
                  <a href="../blog-single.html?slug=<?= urlencode($art['slug']) ?>" target="_blank" class="btn-portal-action" title="Preview on live site">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a href="article-edit.php?id=<?= $art['id'] ?>" class="btn-portal-action" title="Edit Article">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </a>
                  <form action="article-delete.php" method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete this article?');">
                    <input type="hidden" name="csrf_token" value="<?= csrfToken() ?>">
                    <input type="hidden" name="id" value="<?= $art['id'] ?>">
                    <button type="submit" class="btn-portal-action danger" title="Delete Article">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          <?php endforeach; ?>
        <?php endif; ?>
      </tbody>
    </table>
  </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>

<?php
/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL
 * Article Editor & Publisher
 */

declare(strict_types=1);
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/functions.php';

$id = (int)($_GET['id'] ?? 0);
$isEditing = ($id > 0);
$pageTitle = $isEditing ? 'Edit Journal Chronicle' : 'Publish New Journal Chronicle';

$error = '';
$article = [
    'id'             => 0,
    'title'          => '',
    'slug'           => '',
    'category'       => 'Wildlife & Migration',
    'featured_image' => 'images/tanzania-serengeti-migration.jpg',
    'excerpt'        => '',
    'content'        => '',
    'status'         => 'published',
    'author'         => $admin['name'] ?? '',
    'author_title'   => '',
    'author_avatar'  => 'images/logo.png',
    'read_time'      => '',
    'focus_keyword'  => '',
    'tags'           => ''
];

$pdo = getDbConnection();

if ($isEditing) {
    $stmt = $pdo->prepare("SELECT * FROM `posts` WHERE `id` = ? LIMIT 1");
    $stmt->execute([$id]);
    $found = $stmt->fetch();
    if (!$found) {
        setFlash('danger', 'Article not found.');
        header('Location: articles.php');
        exit;
    }
    $article = $found;
}

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = (string)($_POST['csrf_token'] ?? '');
    if (!verifyCsrfToken($token)) {
        $error = 'Security session expired. Please refresh and try again.';
    } else {
        $title         = trim((string)($_POST['title'] ?? ''));
        $slug          = trim((string)($_POST['slug'] ?? ''));
        $category      = trim((string)($_POST['category'] ?? 'Wildlife & Migration'));
        $featuredImage = trim((string)($_POST['featured_image'] ?? 'images/tanzania-serengeti-migration.jpg'));
        $excerpt       = trim((string)($_POST['excerpt'] ?? ''));
        $content       = trim((string)($_POST['content'] ?? ''));
        $status        = trim((string)($_POST['status'] ?? 'published'));
        $author        = trim((string)($_POST['author'] ?? 'Redempotius Nalisis'));
        $authorTitle   = trim((string)($_POST['author_title'] ?? 'Founder & Master Safari Architect'));
        $focusKeyword  = trim((string)($_POST['focus_keyword'] ?? ''));
        $tags          = trim((string)($_POST['tags'] ?? ''));

        // Handle uploaded image file if provided
        if (isset($_FILES['image_file']) && $_FILES['image_file']['error'] === UPLOAD_ERR_OK) {
            $tmpName = $_FILES['image_file']['tmp_name'];
            $origName = $_FILES['image_file']['name'];
            $ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
            $allowedExts = ['jpg', 'jpeg', 'png', 'webp'];

            if (in_array($ext, $allowedExts)) {
                $uploadDir = __DIR__ . '/uploads/journal';
                if (!is_dir($uploadDir)) {
                    @mkdir($uploadDir, 0777, true);
                }
                $newFilename = 'journal_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
                $destPath = $uploadDir . '/' . $newFilename;
                if (move_uploaded_file($tmpName, $destPath)) {
                    // Path relative to website root
                    $featuredImage = 'portal/uploads/journal/' . $newFilename;
                }
            }
        }

        // Auto-generate slug if empty
        if (empty($slug)) {
            $slug = slugify($title);
        } else {
            $slug = slugify($slug);
        }

        // Auto-generate excerpt if empty
        if (empty($excerpt)) {
            $plain = strip_tags($content);
            $excerpt = mb_substr($plain, 0, 160) . '...';
        }

        // Calculate reading time
        $readTime = estimateReadTime($content);

        // Validation
        if (empty($title) || empty($content)) {
            $error = 'Please provide both an Article Title and Content.';
        } else {
            // Check slug uniqueness
            $slugCheckSql = "SELECT `id` FROM `posts` WHERE `slug` = ? AND `id` != ? LIMIT 1";
            $slugStmt = $pdo->prepare($slugCheckSql);
            $slugStmt->execute([$slug, $id]);
            if ($slugStmt->fetch()) {
                $slug .= '-' . time();
            }

            if ($isEditing) {
                $updateSql = "UPDATE `posts` SET 
                    `title` = ?, `slug` = ?, `category` = ?, `featured_image` = ?, `excerpt` = ?,
                    `content` = ?, `status` = ?, `author` = ?, `author_title` = ?, `read_time` = ?,
                    `focus_keyword` = ?, `tags` = ?
                    WHERE `id` = ?";
                $stmtUpdate = $pdo->prepare($updateSql);
                $stmtUpdate->execute([
                    $title, $slug, $category, $featuredImage, $excerpt,
                    $content, $status, $author, $authorTitle, $readTime,
                    $focusKeyword, $tags, $id
                ]);
                setFlash('success', 'Article "' . $title . '" updated successfully!');
            } else {
                $insertSql = "INSERT INTO `posts` (
                    `title`, `slug`, `category`, `featured_image`, `excerpt`, `content`,
                    `status`, `author`, `author_title`, `author_avatar`, `read_time`, `focus_keyword`, `tags`, `views`, `created_at`
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, NOW())";
                $stmtInsert = $pdo->prepare($insertSql);
                $stmtInsert->execute([
                    $title, $slug, $category, $featuredImage, $excerpt, $content,
                    $status, $author, $authorTitle, 'images/logo.png',
                    $readTime, $focusKeyword, $tags
                ]);
                setFlash('success', 'New article "' . $title . '" published successfully to live journal!');
            }

            header('Location: articles.php');
            exit;
        }
    }
}

require_once __DIR__ . '/includes/header.php';
?>

<!-- Header -->
<div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
  <div>
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <a href="articles.php" style="color: var(--portal-text-muted); text-decoration: none; font-size: 13px;">
        <i class="fa-solid fa-arrow-left"></i> All Articles
      </a>
      <span style="color: var(--portal-text-muted);">/</span>
      <span style="color: var(--portal-gold); font-size: 13px; font-weight: 700;"><?= $isEditing ? 'Edit Article' : 'New Article' ?></span>
    </div>
    <h1 style="font-family: var(--font-serif); font-size: 30px; color: #ffffff; margin: 0;">
      <?= $isEditing ? 'Edit Article' : 'Write New Article' ?>
    </h1>
  </div>

  <?php if ($isEditing && !empty($article['slug'])): ?>
    <div>
      <a href="../blog-single.html?slug=<?= urlencode($article['slug']) ?>" target="_blank" class="btn-portal-secondary">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Preview On Live Site
      </a>
    </div>
  <?php endif; ?>
</div>

<?php if (!empty($error)): ?>
  <div class="portal-alert portal-alert-danger">
    <i class="fa-solid fa-triangle-exclamation"></i> <?= e($error) ?>
  </div>
<?php endif; ?>

<form action="article-edit.php<?= $isEditing ? '?id=' . $id : '' ?>" method="POST" enctype="multipart/form-data">
  <input type="hidden" name="csrf_token" value="<?= csrfToken() ?>">

  <div style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 24px;">
    <!-- Main Article Body -->
    <div>
      <div class="portal-card">
        <!-- Title -->
        <div class="portal-form-group">
          <label class="portal-label" for="article-title">
            <i class="fa-solid fa-heading mr-1"></i> Article Title
          </label>
          <input type="text" id="article-title" name="title" class="portal-input" placeholder="e.g. The Great Wildebeest Migration: A Month-by-Month Tracking Guide" value="<?= e($article['title']) ?>" style="font-size: 18px; font-weight: 700;" required>
        </div>

        <!-- Slug -->
        <div class="portal-form-group">
          <label class="portal-label" for="article-slug">
            <i class="fa-solid fa-link mr-1"></i> URL Slug
          </label>
          <div style="display: flex; align-items: center; background: rgba(0,0,0,0.35); border: 1px solid var(--portal-surface-border); border-radius: 3px; padding-left: 12px;">
            <span style="font-size: 12px; color: var(--portal-gold); font-family: monospace;">/blog-single.html?slug=</span>
            <input type="text" id="article-slug" name="slug" class="portal-input" placeholder="great-migration-tracking-guide" value="<?= e($article['slug']) ?>" style="border: none; background: transparent; padding-left: 4px;">
          </div>
        </div>

        <!-- Excerpt -->
        <div class="portal-form-group">
          <label class="portal-label" for="article-excerpt">
            <i class="fa-solid fa-quote-left mr-1"></i> Summary / Excerpt
          </label>
          <textarea id="article-excerpt" name="excerpt" class="portal-textarea" style="min-height: 80px;" placeholder="Brief summary of the article displayed on cards and search snippets..."><?= e($article['excerpt']) ?></textarea>
        </div>

        <!-- Rich Content Editor Toolbar & Textarea -->
        <div class="portal-form-group" style="margin-bottom: 0;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <label class="portal-label" style="margin-bottom: 0;">
              <i class="fa-solid fa-file-lines mr-1"></i> Article Content (HTML / Rich Format)
            </label>
            <!-- Editor Formatting Buttons -->
            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
              <button type="button" class="btn-portal-action" data-editor-action="h2" title="Section Heading (H2)">H2</button>
              <button type="button" class="btn-portal-action" data-editor-action="h3" title="Sub Heading (H3)">H3</button>
              <button type="button" class="btn-portal-action" data-editor-action="bold" title="Bold Text"><strong>B</strong></button>
              <button type="button" class="btn-portal-action" data-editor-action="italic" title="Italic Text"><em>I</em></button>
              <button type="button" class="btn-portal-action" data-editor-action="quote" title="Pullquote"><i class="fa-solid fa-quote-right"></i></button>
              <button type="button" class="btn-portal-action" data-editor-action="list" title="Bullet List"><i class="fa-solid fa-list-ul"></i></button>
              <button type="button" class="btn-portal-action" data-editor-action="p" title="Paragraph"><i class="fa-solid fa-paragraph"></i></button>
            </div>
          </div>

          <textarea id="article-content" name="content" class="portal-textarea" style="min-height: 380px; font-family: 'Courier New', Courier, monospace; font-size: 13.5px; line-height: 1.7;" placeholder="Write your full expedition chronicle here. You can use standard HTML tags such as <h2>, <p>, <blockquote>, <ul>, <li>, and <img>..." required><?= e($article['content']) ?></textarea>
          <span style="font-size: 11px; color: var(--portal-text-muted); display: block; margin-top: 6px;">
            Tip: Highlight text and click any of the toolbar buttons above (H2, Bold, Quote) to insert formatting quickly.
          </span>
        </div>
      </div>
    </div>

    <!-- Right Sidebar Publishing Options -->
    <div>
      <!-- Publishing Status & Actions Card -->
      <div class="portal-card">
        <div class="portal-card-header">
          <h2 class="portal-card-title"><i class="fa-solid fa-sliders"></i> Publishing Status</h2>
        </div>

        <div class="portal-form-group">
          <label class="portal-label" for="article-status">Status</label>
          <select id="article-status" name="status" class="portal-select" style="font-weight: 700;">
            <option value="published" <?= $article['status'] === 'published' ? 'selected' : '' ?>>● Published (Live Immediately)</option>
            <option value="draft" <?= $article['status'] === 'draft' ? 'selected' : '' ?>>● Draft (Private / Unpublished)</option>
          </select>
        </div>

        <div class="portal-form-group">
          <label class="portal-label" for="article-category">Safari Category</label>
          <select id="article-category" name="category" class="portal-select">
            <?php
            $categories = [
                'Wildlife & Migration',
                'Luxury Lodges & Hospitality',
                'Bush-to-Beach & Islands',
                'Sanctuary Insights',
                'Northern Circuit Expeditions',
                'Southern Circuit Wilderness',
                'Safari Tips & Preparation',
                'Conservation & Ecology',
                'Kilimanjaro Summit Climbs'
            ];
            foreach ($categories as $cat):
            ?>
              <option value="<?= e($cat) ?>" <?= $article['category'] === $cat ? 'selected' : '' ?>><?= e($cat) ?></option>
            <?php endforeach; ?>
          </select>
        </div>

        <button type="submit" class="btn-portal-gold" style="width: 100%; justify-content: center; padding: 13px 20px; font-size: 13px; margin-top: 10px;">
          <i class="fa-solid fa-floppy-disk mr-1"></i> <?= $isEditing ? 'Save Changes' : 'Publish Article' ?>
        </button>
      </div>

      <!-- Featured Image Selection Card -->
      <div class="portal-card">
        <div class="portal-card-header">
          <h2 class="portal-card-title"><i class="fa-solid fa-image"></i> Featured Image</h2>
        </div>

        <div style="margin-bottom: 14px; text-align: center;">
          <img id="img-preview" src="<?= resolveMediaUrl($article['featured_image']) ?>" alt="Preview" style="width: 100%; height: 160px; object-fit: cover; border-radius: 3px; border: 1px solid var(--portal-surface-border);">
        </div>

        <div class="portal-form-group">
          <label class="portal-label">Upload New Photo</label>
          <input type="file" name="image_file" accept="image/*" class="portal-input" style="padding: 8px;">
        </div>

        <div class="portal-form-group">
          <label class="portal-label" for="select-library-img">Or Choose from Photo Library</label>
          <select id="select-library-img" class="portal-select" onchange="document.getElementById('featured-image-path').value = this.value; document.getElementById('img-preview').src = '../' + this.value;">
            <option value="images/tanzania-serengeti-migration.jpg" <?= $article['featured_image'] === 'images/tanzania-serengeti-migration.jpg' ? 'selected' : '' ?>>Serengeti River Migration</option>
            <option value="images/tanzania-serengeti-camp.jpg" <?= $article['featured_image'] === 'images/tanzania-serengeti-camp.jpg' ? 'selected' : '' ?>>Luxury Safari Tented Camp</option>
            <option value="images/tanzania-zanzibar-beach.jpg" <?= $article['featured_image'] === 'images/tanzania-zanzibar-beach.jpg' ? 'selected' : '' ?>>Zanzibar Turquoise Beach</option>
            <option value="images/tanzania-ngorongoro-crater.jpg" <?= $article['featured_image'] === 'images/tanzania-ngorongoro-crater.jpg' ? 'selected' : '' ?>>Ngorongoro Caldera Floor</option>
            <option value="images/tanzania-tarangire-elephants.jpg" <?= $article['featured_image'] === 'images/tanzania-tarangire-elephants.jpg' ? 'selected' : '' ?>>Tarangire Elephant Herd</option>
            <option value="images/tanzania-manyara-flamingos.jpg" <?= $article['featured_image'] === 'images/tanzania-manyara-flamingos.jpg' ? 'selected' : '' ?>>Lake Manyara Flamingos</option>
            <option value="images/founder-redempotius-zanzibar.jpg" <?= $article['featured_image'] === 'images/founder-redempotius-zanzibar.jpg' ? 'selected' : '' ?>>Founder at Zanzibar Shores</option>
          </select>
        </div>

        <div class="portal-form-group" style="margin-bottom: 0;">
          <label class="portal-label" for="featured-image-path">Image Path</label>
          <input type="text" id="featured-image-path" name="featured_image" class="portal-input" value="<?= e($article['featured_image']) ?>" style="font-size: 12px; font-family: monospace;">
        </div>
      </div>

      <!-- Author & Metadata Card -->
      <div class="portal-card">
        <div class="portal-card-header">
          <h2 class="portal-card-title"><i class="fa-solid fa-user-pen"></i> Author &amp; SEO</h2>
        </div>

        <div class="portal-form-group">
          <label class="portal-label" for="article-author">Author Name</label>
          <input type="text" id="article-author" name="author" class="portal-input" value="<?= e($article['author']) ?>" placeholder="Enter author name" required>
          <span style="font-size: 11px; color: var(--portal-text-muted); margin-top: 4px; display: block;">Displays alongside company logo at the end of the published chronicle.</span>
        </div>

        <div class="portal-form-group">
          <label class="portal-label" for="article-author-title">Author Role / Title</label>
          <input type="text" id="article-author-title" name="author_title" class="portal-input" value="<?= e($article['author_title']) ?>" placeholder="Founder & Master Safari Architect">
        </div>

        <div class="portal-form-group">
          <label class="portal-label" for="article-focus-keyword">Focus Keyword (SEO)</label>
          <input type="text" id="article-focus-keyword" name="focus_keyword" class="portal-input" value="<?= e($article['focus_keyword']) ?>" placeholder="e.g. Serengeti Great Migration">
        </div>

        <div class="portal-form-group" style="margin-bottom: 0;">
          <label class="portal-label" for="article-tags">Tags (Comma-Separated)</label>
          <input type="text" id="article-tags" name="tags" class="portal-input" value="<?= e($article['tags']) ?>" placeholder="Serengeti, Big Cats, Photography">
        </div>
      </div>
    </div>
  </div>
</form>

<?php require_once __DIR__ . '/includes/footer.php'; ?>

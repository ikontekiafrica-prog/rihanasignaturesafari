<?php
/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL
 * Master Dashboard
 */

declare(strict_types=1);
$pageTitle = 'Executive Atelier Dashboard';
require_once __DIR__ . '/includes/header.php';

// Fetch Metrics
$totalInquiries = (int)$pdo->query("SELECT COUNT(*) FROM `inquiries`")->fetchColumn();
$newInquiries   = (int)$pdo->query("SELECT COUNT(*) FROM `inquiries` WHERE `status` = 'new'")->fetchColumn();
$confirmedInq   = (int)$pdo->query("SELECT COUNT(*) FROM `inquiries` WHERE `status` = 'confirmed'")->fetchColumn();
$totalPosts     = (int)$pdo->query("SELECT COUNT(*) FROM `posts` WHERE `status` = 'published'")->fetchColumn();
$totalViews     = (int)$pdo->query("SELECT COALESCE(SUM(views), 0) FROM `posts`")->fetchColumn();

// Fetch Recent Inquiries (Limit 6)
$recentInquiries = $pdo->query("SELECT * FROM `inquiries` ORDER BY `created_at` DESC LIMIT 6")->fetchAll();

// Fetch Recent Articles (Limit 4)
$recentPosts = $pdo->query("SELECT * FROM `posts` ORDER BY `created_at` DESC LIMIT 4")->fetchAll();
?>

<!-- Welcome Banner -->
<div style="margin-bottom: 28px; display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
  <div>
    <h1 style="font-family: var(--font-serif); font-size: 32px; color: #ffffff; margin: 0; line-height: 1.2;">
      Welcome back, <?= e($admin['name']) ?>
    </h1>
    <p style="font-size: 13.5px; color: var(--portal-text-muted); margin-top: 6px; margin-bottom: 0;">
      Here is an overview of guest inquiries and your safari journal articles.
    </p>
  </div>

  <div style="display: flex; gap: 10px;">
    <a href="article-edit.php" class="btn-portal-gold">
      <i class="fa-solid fa-pen-to-square"></i> Write Article
    </a>
    <a href="inquiries.php" class="btn-portal-secondary">
      <i class="fa-solid fa-inbox"></i> View Inquiries (<?= $totalInquiries ?>)
    </a>
  </div>
</div>

<!-- KPI Metrics Grid -->
<div class="portal-metric-grid">
  <!-- Metric 1: Total Leads -->
  <div class="portal-metric-card">
    <div class="portal-metric-meta">
      <span class="portal-metric-label">Total Inquiries</span>
      <span class="portal-metric-value"><?= number_format($totalInquiries) ?></span>
      <span class="portal-metric-sub">
        <strong style="color: #2ecc71;"><?= $confirmedInq ?></strong> Confirmed
      </span>
    </div>
    <div class="portal-metric-icon-wrap">
      <i class="fa-solid fa-compass"></i>
    </div>
  </div>

  <!-- Metric 2: New Pending -->
  <div class="portal-metric-card" style="border-left: 3px solid var(--portal-gold);">
    <div class="portal-metric-meta">
      <span class="portal-metric-label">Pending Inquiries</span>
      <span class="portal-metric-value" style="color: var(--portal-gold);"><?= number_format($newInquiries) ?></span>
      <span class="portal-metric-sub">Awaiting reply</span>
    </div>
    <div class="portal-metric-icon-wrap" style="background: rgba(200, 150, 62, 0.2);">
      <i class="fa-solid fa-bell"></i>
    </div>
  </div>

  <!-- Metric 3: Published Articles -->
  <div class="portal-metric-card">
    <div class="portal-metric-meta">
      <span class="portal-metric-label">Journal Articles</span>
      <span class="portal-metric-value"><?= number_format($totalPosts) ?></span>
      <span class="portal-metric-sub">Published stories</span>
    </div>
    <div class="portal-metric-icon-wrap">
      <i class="fa-solid fa-newspaper"></i>
    </div>
  </div>

  <!-- Metric 4: Total Readership -->
  <div class="portal-metric-card">
    <div class="portal-metric-meta">
      <span class="portal-metric-label">Journal Views</span>
      <span class="portal-metric-value"><?= number_format($totalViews) ?></span>
      <span class="portal-metric-sub">Total article views</span>
    </div>
    <div class="portal-metric-icon-wrap">
      <i class="fa-solid fa-eye"></i>
    </div>
  </div>
</div>

<!-- Main Split: Inquiries & Recent Articles -->
<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
  <!-- Left: Recent Safari Inquiries -->
  <div class="portal-card" style="margin-bottom: 0;">
    <div class="portal-card-header">
      <div>
        <h2 class="portal-card-title"><i class="fa-solid fa-inbox"></i> Recent Safari Inquiries</h2>
        <span class="portal-card-subtitle">Inquiries submitted by travelers on the website</span>
      </div>
      <a href="inquiries.php" style="color: var(--portal-gold); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-decoration: none;">
        View All (<?= $totalInquiries ?>) &rarr;
      </a>
    </div>

    <div class="portal-table-wrap">
      <table class="portal-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Requested Safari</th>
            <th>Dates &amp; Guests</th>
            <th>Status</th>
            <th>Received</th>
            <th style="text-align: right;">Action</th>
          </tr>
        </thead>
        <tbody>
          <?php if (empty($recentInquiries)): ?>
            <tr>
              <td colspan="6" style="text-align: center; padding: 40px; color: var(--portal-text-muted);">
                <i class="fa-solid fa-inbox" style="font-size: 32px; margin-bottom: 12px; display: block; color: var(--portal-gold);"></i>
                No inquiries recorded yet. Website form submissions will appear here automatically.
              </td>
            </tr>
          <?php else: ?>
            <?php foreach ($recentInquiries as $inq): ?>
              <tr>
                <td>
                  <div class="portal-table-client-title"><?= e($inq['full_name']) ?></div>
                  <div class="portal-table-client-sub">
                    <code style="color: var(--portal-gold); font-size: 11px;"><?= e($inq['reference_no']) ?></code> • <?= e($inq['country']) ?>
                  </div>
                </td>
                <td>
                  <div style="font-weight: 600; color: #ffffff; max-width: 240px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    <?= e($inq['package_name']) ?>
                  </div>
                  <div style="font-size: 11.5px; color: var(--portal-gold);">
                    <?= e($inq['package_price']) ?>
                  </div>
                </td>
                <td>
                  <div style="font-size: 12.5px; color: #ffffff;"><?= e($inq['travel_dates'] ?: 'Flexible') ?></div>
                  <div style="font-size: 11.5px; color: var(--portal-text-muted);">
                    <?= e($inq['adults']) ?> <?= !empty($inq['children']) && $inq['children'] !== '0 Children' ? '• ' . e($inq['children']) : '' ?>
                  </div>
                </td>
                <td>
                  <select class="portal-select select-inquiry-status" data-inquiry-id="<?= $inq['id'] ?>" style="padding: 4px 8px; font-size: 11px; font-weight: 700; width: auto; background: rgba(0,0,0,0.5);">
                    <option value="new" <?= $inq['status'] === 'new' ? 'selected' : '' ?>>● New</option>
                    <option value="in_review" <?= $inq['status'] === 'in_review' ? 'selected' : '' ?>>● In Review</option>
                    <option value="quoted" <?= $inq['status'] === 'quoted' ? 'selected' : '' ?>>● Quoted</option>
                    <option value="confirmed" <?= $inq['status'] === 'confirmed' ? 'selected' : '' ?>>● Confirmed</option>
                    <option value="completed" <?= $inq['status'] === 'completed' ? 'selected' : '' ?>>● Completed</option>
                    <option value="archived" <?= $inq['status'] === 'archived' ? 'selected' : '' ?>>● Archived</option>
                  </select>
                </td>
                <td style="font-size: 12px; white-space: nowrap;">
                  <?= timeAgo($inq['created_at']) ?>
                </td>
                <td style="text-align: right; white-space: nowrap;">
                  <a href="inquiry-view.php?id=<?= $inq['id'] ?>" class="btn-portal-action" title="View Guest Details">
                    <i class="fa-solid fa-eye"></i> View
                  </a>
                </td>
              </tr>
            <?php endforeach; ?>
          <?php endif; ?>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Right: Recent Journal Articles & Fast Publishing -->
  <div>
    <div class="portal-card" style="margin-bottom: 24px;">
      <div class="portal-card-header">
        <div>
          <h2 class="portal-card-title"><i class="fa-solid fa-newspaper"></i> Recent Articles</h2>
          <span class="portal-card-subtitle">Stories published in the journal</span>
        </div>
        <a href="articles.php" style="color: var(--portal-gold); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-decoration: none;">
          All &rarr;
        </a>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <?php foreach ($recentPosts as $post): ?>
          <div style="display: flex; gap: 12px; align-items: center; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <img src="<?= resolveMediaUrl($post['featured_image']) ?>" alt="Post image" style="width: 58px; height: 58px; object-fit: cover; border-radius: 3px; border: 1px solid var(--portal-surface-border); flex-shrink: 0;">
            <div style="min-width: 0; flex: 1;">
              <span style="font-size: 10px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; color: var(--portal-gold);">
                <?= e($post['category']) ?>
              </span>
              <h4 style="font-size: 13px; font-weight: 600; color: #ffffff; margin: 2px 0 4px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <a href="article-edit.php?id=<?= $post['id'] ?>" style="color: #ffffff; text-decoration: none;">
                  <?= e($post['title']) ?>
                </a>
              </h4>
              <div style="font-size: 11px; color: var(--portal-text-muted); display: flex; align-items: center; gap: 8px;">
                <span><i class="fa-solid fa-eye"></i> <?= number_format($post['views']) ?></span>
                <span>•</span>
                <span><?= e($post['read_time']) ?></span>
              </div>
            </div>
            <a href="article-edit.php?id=<?= $post['id'] ?>" class="btn-portal-action" style="padding: 6px 10px;">
              <i class="fa-solid fa-pen"></i>
            </a>
          </div>
        <?php endforeach; ?>
      </div>

      <div style="margin-top: 18px;">
        <a href="article-edit.php" class="btn-portal-gold" style="width: 100%; justify-content: center;">
          <i class="fa-solid fa-plus mr-1"></i> Write New Article
        </a>
      </div>
    </div>

    <!-- Quick Support / Contact Card -->
    <div class="portal-card" style="background: linear-gradient(135deg, rgba(35,53,34,0.4) 0%, rgba(15,24,14,0.6) 100%); border-color: var(--portal-border-gold);">
      <h3 style="font-family: var(--font-serif); font-size: 18px; color: var(--portal-gold); margin-bottom: 8px;">
        <i class="fa-solid fa-phone mr-1"></i> Quick Contact &amp; Support
      </h3>
      <p style="font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.5; margin-bottom: 12px;">
        For direct safari coordination, team assistance, or booking questions:
      </p>
      <div style="font-size: 13.5px; font-weight: 700; color: #ffffff; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-phone" style="color: var(--portal-gold);"></i> +255 676 063 791
      </div>
      <div style="font-size: 12.5px; color: var(--portal-text-muted); margin-top: 6px;">
        <i class="fa-solid fa-envelope mr-1" style="color: var(--portal-gold);"></i> info@rihannasignaturesafari.com
      </div>
      <div style="font-size: 12px; color: var(--portal-text-muted); margin-top: 6px;">
        Dar es Salaam, Tanzania
      </div>
    </div>
  </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>

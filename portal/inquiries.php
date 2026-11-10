<?php
/**
 * RIHANNA SIGNATURE SAFARI - ADMIN PORTAL
 * Safari Inquiries & Reservation Tracker
 */

declare(strict_types=1);
$pageTitle = 'Safari Inquiries';
require_once __DIR__ . '/includes/header.php';

// Handle CSV Export
if (isset($_GET['export']) && $_GET['export'] === 'csv') {
    $stmtExport = $pdo->query("SELECT `reference_no`, `full_name`, `email`, `phone`, `country`, `package_name`, `package_price`, `travel_dates`, `adults`, `children`, `party_type`, `special_notes`, `status`, `created_at` FROM `inquiries` ORDER BY `created_at` DESC");
    $rows = $stmtExport->fetchAll();

    header('Content-Type: text/csv; charset=UTF-8');
    header('Content-Disposition: attachment; filename="rihanna_safari_inquiries_' . date('Y-m-d') . '.csv"');
    $output = fopen('php://output', 'w');
    fputcsv($output, ['Reference', 'Guest Name', 'Email', 'Phone', 'Country', 'Package', 'Rate', 'Travel Dates', 'Adults', 'Children', 'Party Type', 'Guest Notes', 'Status', 'Submitted At']);
    foreach ($rows as $row) {
        fputcsv($output, $row);
    }
    fclose($output);
    exit;
}

// Handle Single Delete Action
if (isset($_POST['action']) && $_POST['action'] === 'delete') {
    $delId = (int)($_POST['id'] ?? 0);
    $token = (string)($_POST['csrf_token'] ?? '');
    if (verifyCsrfToken($token) && $delId > 0) {
        $delStmt = $pdo->prepare("DELETE FROM `inquiries` WHERE `id` = ?");
        $delStmt->execute([$delId]);
        setFlash('success', 'Inquiry record #' . $delId . ' deleted successfully.');
        header('Location: inquiries.php');
        exit;
    }
}

// Current Filter
$statusFilter = strtolower(trim((string)($_GET['status'] ?? 'all')));
$searchQuery  = trim((string)($_GET['q'] ?? ''));

// Build Query
$sql = "SELECT * FROM `inquiries` WHERE 1=1";
$params = [];

if ($statusFilter !== 'all' && !empty($statusFilter)) {
    $sql .= " AND `status` = :status";
    $params[':status'] = $statusFilter;
}

if (!empty($searchQuery)) {
    $sql .= " AND (`full_name` LIKE :q OR `email` LIKE :q OR `phone` LIKE :q OR `reference_no` LIKE :q OR `package_name` LIKE :q OR `country` LIKE :q)";
    $params[':q'] = '%' . $searchQuery . '%';
}

$sql .= " ORDER BY `created_at` DESC";
$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$inquiries = $stmt->fetchAll();

// Counts per status for tabs
$counts = [
    'all'       => (int)$pdo->query("SELECT COUNT(*) FROM `inquiries`")->fetchColumn(),
    'new'       => (int)$pdo->query("SELECT COUNT(*) FROM `inquiries` WHERE `status` = 'new'")->fetchColumn(),
    'in_review' => (int)$pdo->query("SELECT COUNT(*) FROM `inquiries` WHERE `status` = 'in_review'")->fetchColumn(),
    'quoted'    => (int)$pdo->query("SELECT COUNT(*) FROM `inquiries` WHERE `status` = 'quoted'")->fetchColumn(),
    'confirmed' => (int)$pdo->query("SELECT COUNT(*) FROM `inquiries` WHERE `status` = 'confirmed'")->fetchColumn(),
    'archived'  => (int)$pdo->query("SELECT COUNT(*) FROM `inquiries` WHERE `status` = 'archived'")->fetchColumn(),
];
?>

<!-- Page Header Bar -->
<div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
  <div>
    <h1 style="font-family: var(--font-serif); font-size: 28px; color: #ffffff; margin: 0 0 4px 0;">
      <i class="fa-solid fa-inbox mr-2" style="color: var(--portal-gold);"></i> Safari Inquiries
    </h1>
    <p style="font-size: 13px; color: var(--portal-text-muted); margin: 0;">
      View and manage incoming inquiries and booking requests from guests.
    </p>
  </div>

  <div style="display: flex; gap: 10px;">
    <a href="inquiries.php?export=csv" class="btn-portal-secondary">
      <i class="fa-solid fa-file-csv"></i> Export CSV
    </a>
  </div>
</div>

<!-- Filter Bar -->
<div class="portal-card" style="padding: 16px 20px; margin-bottom: 20px;">
  <div class="portal-filter-bar" style="margin-bottom: 0;">
    <!-- Status Filter Pills -->
    <div class="portal-filter-pills">
      <a href="inquiries.php" class="filter-pill <?= $statusFilter === 'all' ? 'active' : '' ?>">
        All Inquiries (<?= $counts['all'] ?>)
      </a>
      <a href="inquiries.php?status=new" class="filter-pill <?= $statusFilter === 'new' ? 'active' : '' ?>">
        New (<?= $counts['new'] ?>)
      </a>
      <a href="inquiries.php?status=in_review" class="filter-pill <?= $statusFilter === 'in_review' ? 'active' : '' ?>">
        In Review (<?= $counts['in_review'] ?>)
      </a>
      <a href="inquiries.php?status=quoted" class="filter-pill <?= $statusFilter === 'quoted' ? 'active' : '' ?>">
        Quoted (<?= $counts['quoted'] ?>)
      </a>
      <a href="inquiries.php?status=confirmed" class="filter-pill <?= $statusFilter === 'confirmed' ? 'active' : '' ?>">
        Confirmed (<?= $counts['confirmed'] ?>)
      </a>
      <a href="inquiries.php?status=archived" class="filter-pill <?= $statusFilter === 'archived' ? 'active' : '' ?>">
        Archived (<?= $counts['archived'] ?>)
      </a>
    </div>

    <!-- Search Form -->
    <form action="inquiries.php" method="GET" style="display: flex; gap: 8px;">
      <?php if ($statusFilter !== 'all'): ?>
        <input type="hidden" name="status" value="<?= e($statusFilter) ?>">
      <?php endif; ?>
      <div class="portal-search-input">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="q" class="portal-input" placeholder="Search client, email, ref..." value="<?= e($searchQuery) ?>" style="padding-top: 8px; padding-bottom: 8px;">
      </div>
      <button type="submit" class="btn-portal-gold" style="padding: 8px 16px;">Search</button>
      <?php if (!empty($searchQuery)): ?>
        <a href="inquiries.php<?= $statusFilter !== 'all' ? '?status=' . e($statusFilter) : '' ?>" class="btn-portal-secondary" style="padding: 8px 14px;">Clear</a>
      <?php endif; ?>
    </form>
  </div>
</div>

<!-- Inquiries Table -->
<div class="portal-card" style="padding: 0;">
  <div class="portal-table-wrap">
    <table class="portal-table">
      <thead>
        <tr>
          <th>Reference &amp; Guest</th>
          <th>Contact Details</th>
          <th>Safari Package</th>
          <th>Travel Dates &amp; Guests</th>
          <th>Status</th>
          <th>Received</th>
          <th style="text-align: right;">Action</th>
        </tr>
      </thead>
      <tbody>
        <?php if (empty($inquiries)): ?>
          <tr>
            <td colspan="7" style="text-align: center; padding: 60px 20px; color: var(--portal-text-muted);">
              <i class="fa-solid fa-folder-open" style="font-size: 36px; color: var(--portal-gold); margin-bottom: 12px; display: block;"></i>
              No inquiry records found matching the active filter.
            </td>
          </tr>
        <?php else: ?>
          <?php foreach ($inquiries as $inq): ?>
            <tr>
              <td>
                <div style="font-weight: 700; color: #ffffff; font-size: 14.5px;">
                  <?= e($inq['full_name']) ?>
                </div>
                <div style="font-size: 12px; color: var(--portal-text-muted); display: flex; align-items: center; gap: 6px; margin-top: 2px;">
                  <code style="color: var(--portal-gold); font-size: 11px;"><?= e($inq['reference_no']) ?></code>
                  <span>•</span>
                  <span><i class="fa-solid fa-location-dot"></i> <?= e($inq['country']) ?></span>
                </div>
              </td>
              <td>
                <div style="font-size: 13px; color: #ffffff;">
                  <a href="mailto:<?= e($inq['email']) ?>" style="color: #ffffff; text-decoration: none;">
                    <i class="fa-solid fa-envelope mr-1" style="color: var(--portal-gold); font-size: 11px;"></i> <?= e($inq['email']) ?>
                  </a>
                </div>
                <div style="font-size: 12px; color: var(--portal-text-secondary); margin-top: 3px;">
                  <a href="https://wa.me/<?= preg_replace('/\D+/', '', $inq['phone']) ?>" target="_blank" style="color: #2ecc71; text-decoration: none;">
                    <i class="fa-brands fa-whatsapp mr-1"></i> <?= e($inq['phone']) ?>
                  </a>
                </div>
              </td>
              <td>
                <div style="font-weight: 600; color: #ffffff; max-width: 250px;">
                  <?= e($inq['package_name']) ?>
                </div>
                <div style="font-size: 12px; color: var(--portal-gold); font-weight: 700;">
                  <?= e($inq['package_price']) ?>
                </div>
              </td>
              <td>
                <div style="font-size: 13px; color: #ffffff;">
                  <i class="fa-solid fa-calendar mr-1" style="color: var(--portal-gold); font-size: 11px;"></i> <?= e($inq['travel_dates'] ?: 'Flexible') ?>
                </div>
                <div style="font-size: 12px; color: var(--portal-text-muted); margin-top: 2px;">
                  <i class="fa-solid fa-user-group mr-1"></i> <?= e($inq['adults']) ?> <?= !empty($inq['children']) && $inq['children'] !== '0 Children' ? '• ' . e($inq['children']) : '' ?>
                </div>
              </td>
              <td>
                <select class="portal-select select-inquiry-status" data-inquiry-id="<?= $inq['id'] ?>" style="padding: 5px 10px; font-size: 11px; font-weight: 700; width: auto; background: rgba(0,0,0,0.6);">
                  <option value="new" <?= $inq['status'] === 'new' ? 'selected' : '' ?>>● New</option>
                  <option value="in_review" <?= $inq['status'] === 'in_review' ? 'selected' : '' ?>>● In Review</option>
                  <option value="quoted" <?= $inq['status'] === 'quoted' ? 'selected' : '' ?>>● Quoted</option>
                  <option value="confirmed" <?= $inq['status'] === 'confirmed' ? 'selected' : '' ?>>● Confirmed</option>
                  <option value="completed" <?= $inq['status'] === 'completed' ? 'selected' : '' ?>>● Completed</option>
                  <option value="archived" <?= $inq['status'] === 'archived' ? 'selected' : '' ?>>● Archived</option>
                </select>
              </td>
              <td style="font-size: 12px; white-space: nowrap;">
                <div><?= timeAgo($inq['created_at']) ?></div>
                <div style="font-size: 11px; color: var(--portal-text-muted);"><?= date('M j, Y', strtotime($inq['created_at'])) ?></div>
              </td>
              <td style="text-align: right; white-space: nowrap;">
                <div class="portal-table-actions" style="justify-content: flex-end;">
                  <a href="inquiry-view.php?id=<?= $inq['id'] ?>" class="btn-portal-action" title="Open Full Dossier">
                    <i class="fa-solid fa-eye"></i> View
                  </a>
                  <form action="inquiries.php" method="POST" style="display: inline;" onsubmit="return confirm('Permanently remove this inquiry from database?');">
                    <input type="hidden" name="csrf_token" value="<?= csrfToken() ?>">
                    <input type="hidden" name="action" value="delete">
                    <input type="hidden" name="id" value="<?= $inq['id'] ?>">
                    <button type="submit" class="btn-portal-action danger" title="Delete Inquiry">
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

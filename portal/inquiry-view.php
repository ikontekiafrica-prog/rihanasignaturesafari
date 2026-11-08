<?php
/**
 * RIHANNA SIGNATURE SAFARI - ADMIN PORTAL
 * Guest Inquiry Details
 */

declare(strict_types=1);
$pageTitle = 'Inquiry Details';
require_once __DIR__ . '/includes/header.php';

$id = (int)($_GET['id'] ?? 0);
if ($id <= 0) {
    header('Location: inquiries.php');
    exit;
}

// Handle Notes & Status Update
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = (string)($_POST['csrf_token'] ?? '');
    if (verifyCsrfToken($token)) {
        $newStatus = trim((string)($_POST['status'] ?? 'new'));
        $architectNotes = trim((string)($_POST['architect_notes'] ?? ''));

        $updateStmt = $pdo->prepare("UPDATE `inquiries` SET `status` = ?, `architect_notes` = ? WHERE `id` = ?");
        $updateStmt->execute([$newStatus, $architectNotes, $id]);
        setFlash('success', 'Inquiry details updated successfully.');
        header('Location: inquiry-view.php?id=' . $id);
        exit;
    }
}

$stmt = $pdo->prepare("SELECT * FROM `inquiries` WHERE `id` = ? LIMIT 1");
$stmt->execute([$id]);
$inquiry = $stmt->fetch();

if (!$inquiry) {
    setFlash('danger', 'Inquiry record not found.');
    header('Location: inquiries.php');
    exit;
}
?>

<!-- Header Bar -->
<div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
  <div>
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <a href="inquiries.php" style="color: var(--portal-text-muted); text-decoration: none; font-size: 13px;">
        <i class="fa-solid fa-arrow-left"></i> All Inquiries
      </a>
      <span style="color: var(--portal-text-muted);">/</span>
      <code style="color: var(--portal-gold); font-size: 13px; font-weight: 700;"><?= e($inquiry['reference_no']) ?></code>
    </div>
    <h1 style="font-family: var(--font-serif); font-size: 30px; color: #ffffff; margin: 0;">
      <?= e($inquiry['full_name']) ?>
    </h1>
  </div>

  <div style="display: flex; gap: 10px; align-items: center;">
    <?= inquiryStatusBadge($inquiry['status']) ?>
    <button type="button" onclick="window.print()" class="btn-portal-secondary">
      <i class="fa-solid fa-print"></i> Print Details
    </button>
  </div>
</div>

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
  <!-- Left Column: Guest & Safari Details -->
  <div>
    <!-- Guest Information Card -->
    <div class="portal-card">
      <div class="portal-card-header">
        <h2 class="portal-card-title"><i class="fa-solid fa-user"></i> Guest Information</h2>
        <span class="portal-card-subtitle">Submitted <?= date('F j, Y \a\t g:i A', strtotime($inquiry['created_at'])) ?></span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div>
          <span class="portal-label">Full Name</span>
          <div style="font-size: 16px; font-weight: 700; color: #ffffff;"><?= e($inquiry['full_name']) ?></div>
        </div>

        <div>
          <span class="portal-label">Country</span>
          <div style="font-size: 15px; color: #ffffff;">
            <i class="fa-solid fa-location-dot mr-1" style="color: var(--portal-gold);"></i> <?= e($inquiry['country']) ?>
          </div>
        </div>

        <div>
          <span class="portal-label">Email</span>
          <div style="font-size: 14.5px;">
            <a href="mailto:<?= e($inquiry['email']) ?>?subject=<?= urlencode('Rihanna Signature Safari: ' . $inquiry['package_name']) ?>" style="color: var(--portal-gold); text-decoration: underline; font-weight: 600;">
              <?= e($inquiry['email']) ?>
            </a>
          </div>
        </div>

        <div>
          <span class="portal-label">Phone / WhatsApp</span>
          <div style="font-size: 14.5px; display: flex; align-items: center; gap: 10px;">
            <a href="https://wa.me/<?= preg_replace('/\D+/', '', $inquiry['phone']) ?>" target="_blank" style="color: #2ecc71; text-decoration: none; font-weight: 700;">
              <i class="fa-brands fa-whatsapp"></i> <?= e($inquiry['phone']) ?>
            </a>
          </div>
        </div>
      </div>

      <div style="margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--portal-surface-border); display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="https://wa.me/<?= preg_replace('/\D+/', '', $inquiry['phone']) ?>?text=<?= urlencode('Hello ' . $inquiry['full_name'] . ', thank you for contacting Rihanna Signature Safari regarding the ' . $inquiry['package_name'] . ' (Ref: ' . $inquiry['reference_no'] . '). How can we assist you with your safari journey?') ?>" target="_blank" class="btn-portal-gold" style="background: #25d366; border-color: #25d366; color: #ffffff;">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
        <a href="mailto:<?= e($inquiry['email']) ?>?subject=<?= urlencode('Rihanna Signature Safari: ' . $inquiry['package_name'] . ' [Ref: ' . $inquiry['reference_no'] . ']') ?>" class="btn-portal-secondary">
          <i class="fa-solid fa-envelope"></i> Send Email
        </a>
      </div>
    </div>

    <!-- Safari Request Details Card -->
    <div class="portal-card">
      <div class="portal-card-header">
        <h2 class="portal-card-title"><i class="fa-solid fa-compass"></i> Safari Details</h2>
        <span class="portal-card-subtitle">Requested package information</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 24px;">
        <div style="grid-column: 1 / -1;">
          <span class="portal-label">Safari Package</span>
          <div style="font-family: var(--font-serif); font-size: 20px; font-weight: 700; color: #ffffff;">
            <?= e($inquiry['package_name']) ?>
          </div>
        </div>

        <div>
          <span class="portal-label">Price</span>
          <div style="font-size: 16px; font-weight: 700; color: var(--portal-gold);">
            <?= e($inquiry['package_price']) ?>
          </div>
        </div>

        <div>
          <span class="portal-label">Travel Dates</span>
          <div style="font-size: 15px; color: #ffffff;">
            <i class="fa-solid fa-calendar mr-1" style="color: var(--portal-gold);"></i> <?= e($inquiry['travel_dates'] ?: 'Flexible') ?>
          </div>
        </div>

        <div>
          <span class="portal-label">Duration</span>
          <div style="font-size: 15px; color: #ffffff;">
            <i class="fa-solid fa-clock mr-1" style="color: var(--portal-gold);"></i> <?= e($inquiry['duration']) ?>
          </div>
        </div>

        <div>
          <span class="portal-label">Guests</span>
          <div style="font-size: 15px; color: #ffffff;">
            <i class="fa-solid fa-users mr-1" style="color: var(--portal-gold);"></i> <?= e($inquiry['adults']) ?> <?= !empty($inquiry['children']) && $inquiry['children'] !== '0 Children' ? '• ' . e($inquiry['children']) : '' ?>
          </div>
        </div>
      </div>

      <!-- Guest Special Requests Box -->
      <div>
        <span class="portal-label">Guest's Notes &amp; Special Requests</span>
        <div style="background: rgba(0, 0, 0, 0.4); border-left: 3px solid var(--portal-gold); padding: 18px 20px; border-radius: 2px; font-size: 14.5px; line-height: 1.7; color: rgba(255, 255, 255, 0.9);">
          <?= !empty($inquiry['special_notes']) ? nl2br(e($inquiry['special_notes'])) : '<em>No special notes provided.</em>' ?>
        </div>
      </div>
    </div>
  </div>

  <!-- Right Column: Status & Internal Notes -->
  <div>
    <div class="portal-card" style="position: sticky; top: 92px;">
      <div class="portal-card-header">
        <h2 class="portal-card-title"><i class="fa-solid fa-clipboard-check"></i> Status &amp; Notes</h2>
      </div>

      <form action="inquiry-view.php?id=<?= $inquiry['id'] ?>" method="POST">
        <input type="hidden" name="csrf_token" value="<?= csrfToken() ?>">

        <div class="portal-form-group">
          <label class="portal-label" for="status">Status</label>
          <select name="status" id="status" class="portal-select" style="font-weight: 700; font-size: 13.5px;">
            <option value="new" <?= $inquiry['status'] === 'new' ? 'selected' : '' ?>>● New (Awaiting Contact)</option>
            <option value="in_review" <?= $inquiry['status'] === 'in_review' ? 'selected' : '' ?>>● In Review (Working on Itinerary)</option>
            <option value="quoted" <?= $inquiry['status'] === 'quoted' ? 'selected' : '' ?>>● Quoted (Sent to Guest)</option>
            <option value="confirmed" <?= $inquiry['status'] === 'confirmed' ? 'selected' : '' ?>>● Confirmed</option>
            <option value="completed" <?= $inquiry['status'] === 'completed' ? 'selected' : '' ?>>● Completed</option>
            <option value="archived" <?= $inquiry['status'] === 'archived' ? 'selected' : '' ?>>● Archived</option>
          </select>
        </div>

        <div class="portal-form-group">
          <label class="portal-label" for="architect_notes">Internal Notes</label>
          <textarea name="architect_notes" id="architect_notes" class="portal-textarea" placeholder="Add private notes about safari dates, client preferences, or routing..." style="min-height: 160px; font-size: 13px;"><?= e($inquiry['architect_notes'] ?? '') ?></textarea>
          <span style="font-size: 11px; color: var(--portal-text-muted); display: block; margin-top: 4px;">
            <i class="fa-solid fa-lock mr-1"></i> Private notes for your team (not visible to the guest).
          </span>
        </div>

        <button type="submit" class="btn-portal-gold" style="width: 100%; justify-content: center; margin-bottom: 12px;">
          <i class="fa-solid fa-floppy-disk mr-1"></i> Save Changes
        </button>

        <a href="mailto:<?= e($inquiry['email']) ?>" class="btn-portal-secondary" style="width: 100%; justify-content: center;">
          <i class="fa-solid fa-envelope mr-1"></i> Send Email
        </a>
      </form>
    </div>
  </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>

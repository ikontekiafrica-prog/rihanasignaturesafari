<?php
/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL
 * Profile & Security Settings
 */

declare(strict_types=1);
$pageTitle = 'Settings';
require_once __DIR__ . '/includes/header.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = (string)($_POST['csrf_token'] ?? '');
    if (!verifyCsrfToken($token)) {
        $error = 'Security session expired. Please refresh and try again.';
    } else {
        $action = (string)($_POST['form_action'] ?? '');

        // 1. Update Profile Info
        if ($action === 'profile') {
            $username = trim((string)($_POST['username'] ?? ''));
            $name     = trim((string)($_POST['name'] ?? ''));
            $email    = trim((string)($_POST['email'] ?? ''));
            $role     = trim((string)($_POST['role'] ?? ''));

            if (empty($username) || empty($name) || empty($email)) {
                $error = 'Username, full name, and email address are required.';
            } else {
                // Check if username is already taken by another account
                $checkStmt = $pdo->prepare("SELECT COUNT(*) FROM `admins` WHERE (`username` = ? OR `email` = ?) AND `id` != ?");
                $checkStmt->execute([$username, $email, $admin['id']]);
                if ((int)$checkStmt->fetchColumn() > 0) {
                    $error = 'That username or email address is already in use by another account.';
                } else {
                    $stmt = $pdo->prepare("UPDATE `admins` SET `username` = ?, `name` = ?, `email` = ?, `role` = ? WHERE `id` = ?");
                    $stmt->execute([$username, $name, $email, $role, $admin['id']]);

                    $_SESSION['admin_username'] = $username;
                    $_SESSION['admin_user']     = $username;
                    $_SESSION['admin_name']     = $name;
                    $_SESSION['admin_email']    = $email;
                    $_SESSION['admin_role']     = $role;

                    setFlash('success', 'Profile and username updated successfully.');
                    header('Location: settings.php');
                    exit;
                }
            }
        }

        // 2. Change Security Key (Password)
        if ($action === 'password') {
            $currPass = (string)($_POST['current_password'] ?? '');
            $newPass  = (string)($_POST['new_password'] ?? '');
            $confPass = (string)($_POST['confirm_password'] ?? '');

            // Verify current password
            $stmt = $pdo->prepare("SELECT `password_hash` FROM `admins` WHERE `id` = ?");
            $stmt->execute([$admin['id']]);
            $currentHash = $stmt->fetchColumn();

            if (!password_verify($currPass, $currentHash)) {
                $error = 'The current password entered is incorrect.';
            } elseif (strlen($newPass) < 8) {
                $error = 'The new security key must be at least 8 characters in length.';
            } elseif ($newPass !== $confPass) {
                $error = 'The new passwords do not match.';
            } else {
                $newHash = password_hash($newPass, PASSWORD_BCRYPT);
                $updateStmt = $pdo->prepare("UPDATE `admins` SET `password_hash` = ? WHERE `id` = ?");
                $updateStmt->execute([$newHash, $admin['id']]);

                setFlash('success', 'Your security key / password has been updated securely.');
                header('Location: settings.php');
                exit;
            }
        }
    }
}
?>

<!-- Header -->
<div style="margin-bottom: 24px;">
  <h1 style="font-family: var(--font-serif); font-size: 28px; color: #ffffff; margin: 0 0 4px 0;">
    <i class="fa-solid fa-sliders mr-2" style="color: var(--portal-gold);"></i> Profile &amp; Security Settings
  </h1>
  <p style="font-size: 13px; color: var(--portal-text-muted); margin: 0;">
    Manage Master Architect credentials, contact email, and administrative preferences.
  </p>
</div>

<?php if (!empty($error)): ?>
  <div class="portal-alert portal-alert-danger">
    <i class="fa-solid fa-triangle-exclamation"></i> <?= e($error) ?>
  </div>
<?php endif; ?>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
  <!-- Profile Information Form -->
  <div class="portal-card">
    <div class="portal-card-header">
      <h2 class="portal-card-title"><i class="fa-solid fa-user-gear"></i> Profile Details</h2>
    </div>

    <form action="settings.php" method="POST">
      <input type="hidden" name="csrf_token" value="<?= csrfToken() ?>">
      <input type="hidden" name="form_action" value="profile">

      <div class="portal-form-group">
        <label class="portal-label" for="admin-username">Username</label>
        <input type="text" id="admin-username" name="username" class="portal-input" value="<?= e($admin['username']) ?>" required autocomplete="username">
      </div>

      <div class="portal-form-group">
        <label class="portal-label" for="admin-name">Full Name</label>
        <input type="text" id="admin-name" name="name" class="portal-input" value="<?= e($admin['name']) ?>" required>
      </div>

      <div class="portal-form-group">
        <label class="portal-label" for="admin-email">Email Address</label>
        <input type="email" id="admin-email" name="email" class="portal-input" value="<?= e($admin['email']) ?>" required>
      </div>

      <div class="portal-form-group">
        <label class="portal-label" for="admin-role">Role / Title</label>
        <input type="text" id="admin-role" name="role" class="portal-input" value="<?= e($admin['role']) ?>" required>
      </div>

      <button type="submit" class="btn-portal-gold" style="width: 100%; justify-content: center; margin-top: 10px;">
        <i class="fa-solid fa-check mr-1"></i> Save Profile
      </button>
    </form>
  </div>

  <!-- Change Password Form -->
  <div class="portal-card">
    <div class="portal-card-header">
      <h2 class="portal-card-title"><i class="fa-solid fa-key"></i> Change Password</h2>
    </div>

    <form action="settings.php" method="POST">
      <input type="hidden" name="csrf_token" value="<?= csrfToken() ?>">
      <input type="hidden" name="form_action" value="password">

      <div class="portal-form-group">
        <label class="portal-label" for="current_password">Current Password</label>
        <input type="password" id="current_password" name="current_password" class="portal-input" placeholder="Enter current password" required>
      </div>

      <div class="portal-form-group">
        <label class="portal-label" for="new_password">New Password (min. 8 characters)</label>
        <input type="password" id="new_password" name="new_password" class="portal-input" placeholder="Enter new password" required>
      </div>

      <div class="portal-form-group">
        <label class="portal-label" for="confirm_password">Confirm New Password</label>
        <input type="password" id="confirm_password" name="confirm_password" class="portal-input" placeholder="Repeat new password" required>
      </div>

      <button type="submit" class="btn-portal-gold" style="width: 100%; justify-content: center; margin-top: 10px;">
        <i class="fa-solid fa-floppy-disk mr-1"></i> Update Password
      </button>
    </form>
  </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>

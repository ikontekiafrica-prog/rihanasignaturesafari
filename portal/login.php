<?php
/**
 * RIHANNA SIGNATURE SAFARI - ADMIN PORTAL
 * Sign In
 */

declare(strict_types=1);
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/functions.php';

// If already logged in, redirect to dashboard
if (isLoggedIn()) {
    header('Location: ' . PORTAL_URL . '/index.php');
    exit;
}

$error = '';
$redirect = $_GET['redirect'] ?? PORTAL_URL . '/index.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim((string)($_POST['username'] ?? ''));
    $password = (string)($_POST['password'] ?? '');
    $token    = (string)($_POST['csrf_token'] ?? '');

    if (!verifyCsrfToken($token)) {
        $error = 'Your session expired. Please refresh and try again.';
    } elseif (empty($username) || empty($password)) {
        $error = 'Please enter your email and password.';
    } else {
        $pdo = getDbConnection();
        $stmt = $pdo->prepare("SELECT * FROM `admins` WHERE `username` = :u OR `email` = :e LIMIT 1");
        $stmt->execute([':u' => $username, ':e' => $username]);
        $admin = $stmt->fetch();

        if ($admin && password_verify($password, $admin['password_hash'])) {
            // Update last login
            $updateStmt = $pdo->prepare("UPDATE `admins` SET `last_login` = NOW() WHERE `id` = ?");
            $updateStmt->execute([$admin['id']]);

            // Set session
            $_SESSION['admin_id']       = $admin['id'];
            $_SESSION['admin_username'] = $admin['username'];
            $_SESSION['admin_name']     = $admin['name'];
            $_SESSION['admin_email']    = $admin['email'];
            $_SESSION['admin_role']     = $admin['role'];
            $_SESSION['admin_avatar']   = $admin['avatar'];

            // Regenerate session id for security
            session_regenerate_id(true);

            // Redirect safely
            $safeRedirect = (str_starts_with($redirect, PORTAL_URL) || str_starts_with($redirect, '/portal')) ? $redirect : PORTAL_URL . '/index.php';
            header('Location: ' . $safeRedirect);
            exit;
        } else {
            $error = 'Incorrect email or password. Please try again.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Sign In | Rihanna Signature Safari</title>
  <link rel="shortcut icon" href="../favicon.png" type="image/png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="assets/css/portal.css">
</head>
<body class="portal-body" style="background:#080d08;">
  <div class="portal-auth-wrapper">
    <!-- Left Hero Column -->
    <div class="portal-auth-hero">
      <div class="auth-hero-content">
        <div class="auth-hero-brand">
          <img src="../images/logo.png" alt="Rihanna Signature Safari">
        </div>
      </div>

      <div class="auth-hero-quote">
        <h2>"Crafting unforgettable safari moments across Tanzania and Kenya."</h2>
        <p>Welcome back. Manage your guest inquiries, plan tailor-made itineraries, and publish new stories to the safari journal.</p>
      </div>

      <div style="position: relative; z-index: 2; font-size: 12px; color: rgba(255, 255, 255, 0.45);">
        &copy; <?= date('Y') ?> Rihanna Signature Safari. Dar es Salaam, Tanzania.
      </div>
    </div>

    <!-- Right Login Form Column -->
    <div class="portal-auth-pane">
      <div class="portal-auth-card">
        <div class="auth-card-header">
          <h1 class="auth-card-title" style="font-size: 28px; margin-bottom: 8px;">Welcome back</h1>
          <p class="auth-card-desc">Sign in with your email and password to continue.</p>
        </div>

        <?php if (!empty($error)): ?>
          <div class="portal-alert portal-alert-danger">
            <i class="fa-solid fa-circle-exclamation"></i>
            <span><?= e($error) ?></span>
          </div>
        <?php endif; ?>

        <?php if (isset($_GET['logged_out'])): ?>
          <div class="portal-alert portal-alert-success">
            <i class="fa-solid fa-circle-check"></i>
            <span>You have been signed out.</span>
          </div>
        <?php endif; ?>

        <form action="login.php?redirect=<?= urlencode($redirect) ?>" method="POST" autocomplete="on">
          <input type="hidden" name="csrf_token" value="<?= csrfToken() ?>">

          <div class="portal-form-group">
            <label class="portal-label" for="username">Email</label>
            <input type="text" id="username" name="username" class="portal-input" placeholder="info@rihannasignaturesafari.com" value="<?= e($_POST['username'] ?? '') ?>" required autofocus>
          </div>

          <div class="portal-form-group" style="position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <label class="portal-label" for="password" style="margin-bottom: 0;">Password</label>
            </div>
            <input type="password" id="password" name="password" class="portal-input" placeholder="Password" required>
            <button type="button" id="btn-toggle-password" aria-label="Toggle password visibility" style="position: absolute; right: 14px; top: 34px; background: none; border: none; color: var(--portal-text-muted); cursor: pointer; font-size: 14px;">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; font-size: 13px;">
            <label style="display: flex; align-items: center; gap: 8px; color: var(--portal-text-secondary); cursor: pointer; margin: 0;">
              <input type="checkbox" name="remember" checked style="accent-color: var(--portal-gold);"> Remember me
            </label>
          </div>

          <button type="submit" class="btn-portal-gold" style="width: 100%; justify-content: center; padding: 13px 20px; font-size: 14px; font-weight: 600;">
            Sign In
          </button>
        </form>

        <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--portal-surface-border); text-align: center;">
          <a href="../index.html" style="color: var(--portal-text-muted); font-size: 13px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-arrow-left"></i> Back to website
          </a>
        </div>
      </div>
    </div>
  </div>

  <script>
    const toggleBtn = document.getElementById('btn-toggle-password');
    const pwdInput = document.getElementById('password');
    if (toggleBtn && pwdInput) {
      toggleBtn.addEventListener('click', function() {
        const isPwd = pwdInput.type === 'password';
        pwdInput.type = isPwd ? 'text' : 'password';
        this.innerHTML = isPwd ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
      });
    }
  </script>
</body>
</html>

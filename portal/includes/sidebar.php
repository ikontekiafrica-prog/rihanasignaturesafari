<?php
/**
 * RIHANNA SIGNATURE SAFARI - ADMIN PORTAL
 * Sidebar Navigation
 */

declare(strict_types=1);
?>
<div class="portal-backdrop" id="portal-backdrop"></div>

<aside class="portal-sidebar" id="portal-sidebar">
  <a href="index.php" class="portal-sidebar-brand">
    <img src="../images/logo.png" alt="Rihanna Signature Safari" class="portal-brand-img">
    <div class="portal-brand-meta">
      <span class="portal-brand-title">Rihanna Safari</span>
      <span class="portal-brand-tag">Admin Portal</span>
    </div>
  </a>

  <nav class="portal-nav">
    <div class="portal-nav-section-title">Main</div>
    <a href="index.php" class="portal-nav-link <?= $currentPage === 'index.php' ? 'active' : '' ?>">
      <span class="link-content">
        <i class="fa-solid fa-chart-pie"></i>
        <span>Dashboard</span>
      </span>
    </a>

    <div class="portal-nav-section-title">Inquiries</div>
    <a href="inquiries.php" class="portal-nav-link <?= in_array($currentPage, ['inquiries.php', 'inquiry-view.php']) ? 'active' : '' ?>">
      <span class="link-content">
        <i class="fa-solid fa-inbox"></i>
        <span>Safari Inquiries</span>
      </span>
      <?php if (!empty($newInquiryCount)): ?>
        <span class="portal-nav-badge"><?= $newInquiryCount ?></span>
      <?php endif; ?>
    </a>

    <div class="portal-nav-section-title">Journal</div>
    <a href="articles.php" class="portal-nav-link <?= $currentPage === 'articles.php' ? 'active' : '' ?>">
      <span class="link-content">
        <i class="fa-solid fa-newspaper"></i>
        <span>All Articles</span>
      </span>
    </a>
    <a href="article-edit.php" class="portal-nav-link <?= $currentPage === 'article-edit.php' ? 'active' : '' ?>">
      <span class="link-content">
        <i class="fa-solid fa-pen-to-square"></i>
        <span>Write Article</span>
      </span>
    </a>

    <div class="portal-nav-section-title">Account</div>
    <a href="settings.php" class="portal-nav-link <?= $currentPage === 'settings.php' ? 'active' : '' ?>">
      <span class="link-content">
        <i class="fa-solid fa-user-gear"></i>
        <span>Settings</span>
      </span>
    </a>
    <a href="logout.php" class="portal-nav-link">
      <span class="link-content">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        <span>Log Out</span>
      </span>
    </a>
  </nav>

  <div class="portal-sidebar-footer">
    <div class="portal-user-chip">
      <div class="portal-user-avatar portal-user-avatar-badge">
        <i class="fa-solid fa-user-shield"></i>
      </div>
      <div class="portal-user-info">
        <div class="portal-user-name"><?= e($admin['name'] ?? 'Redempotius Nalisis') ?></div>
        <div class="portal-user-role"><?= e($admin['role'] ?? 'Master Safari Architect') ?></div>
      </div>
    </div>
  </div>
</aside>

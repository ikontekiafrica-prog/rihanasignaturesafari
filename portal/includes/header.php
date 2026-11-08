<?php
/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL
 * Master Layout Header
 */

declare(strict_types=1);
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/functions.php';

requireLogin();

$admin = currentAdmin();
$currentPage = basename($_SERVER['PHP_SELF'] ?? 'index.php');

// Count new inquiries for notification badge
$pdo = getDbConnection();
$newInquiryCount = (int)$pdo->query("SELECT COUNT(*) FROM `inquiries` WHERE `status` = 'new'")->fetchColumn();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title><?= isset($pageTitle) ? e($pageTitle) . ' | ' : '' ?>Rihanna Signature Safari Admin</title>
  <link rel="shortcut icon" href="../favicon.png" type="image/png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="../css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- Portal Master Stylesheet -->
  <link rel="stylesheet" href="assets/css/portal.css">
</head>
<body class="portal-body">
  <div class="portal-layout">
    <?php require_once __DIR__ . '/sidebar.php'; ?>

    <div class="portal-main">
      <header class="portal-topbar">
        <div class="portal-topbar-left">
          <button type="button" class="portal-mobile-toggle" id="btn-portal-mobile-toggle" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="portal-breadcrumbs">
            <a href="index.php"><i class="fa-solid fa-house mr-1"></i> Dashboard</a>
            <i class="fa-solid fa-chevron-right" style="font-size: 10px;"></i>
            <span class="current"><?= isset($pageTitle) ? e($pageTitle) : 'Overview' ?></span>
          </div>
        </div>

        <div class="portal-topbar-right">
          <div class="portal-live-clock">
            <i class="fa-solid fa-clock"></i>
            <span id="portal-live-clock-val">--:--:-- EAT</span>
          </div>

          <a href="../index.html" target="_blank" class="portal-site-link">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Website
          </a>
        </div>
      </header>

      <main class="portal-content">
        <?php foreach (getFlashes() as $flash): ?>
          <div class="portal-alert portal-alert-<?= e($flash['type']) ?>">
            <i class="fa-solid <?= $flash['type'] === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation' ?>"></i>
            <?= e($flash['message']) ?>
          </div>
        <?php endforeach; ?>

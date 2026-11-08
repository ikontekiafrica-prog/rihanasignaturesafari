<?php
/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL
 * Article Deletion Handler
 */

declare(strict_types=1);
require_once __DIR__ . '/includes/config.php';

requireLogin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = (string)($_POST['csrf_token'] ?? '');
    $id = (int)($_POST['id'] ?? 0);

    if (verifyCsrfToken($token) && $id > 0) {
        $pdo = getDbConnection();
        $stmt = $pdo->prepare("DELETE FROM `posts` WHERE `id` = ?");
        $stmt->execute([$id]);
        setFlash('success', 'Article #' . $id . ' has been removed from the journal.');
    } else {
        setFlash('danger', 'Invalid deletion request or security token expired.');
    }
}

header('Location: ' . PORTAL_URL . '/articles.php');
exit;

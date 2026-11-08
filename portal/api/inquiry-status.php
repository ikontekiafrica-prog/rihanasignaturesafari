<?php
/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL API
 * Quick Inquiry Status AJAX Updater
 */

declare(strict_types=1);
header('Content-Type: application/json; charset=UTF-8');

require_once __DIR__ . '/../includes/config.php';

if (!isLoggedIn()) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$id = (int)($_POST['id'] ?? 0);
$status = trim((string)($_POST['status'] ?? ''));
$allowed = ['new', 'in_review', 'quoted', 'confirmed', 'completed', 'archived'];

if ($id <= 0 || !in_array($status, $allowed, true)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid parameters']);
    exit;
}

try {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare("UPDATE `inquiries` SET `status` = ?, `updated_at` = NOW() WHERE `id` = ?");
    $stmt->execute([$status, $id]);

    echo json_encode(['success' => true, 'id' => $id, 'status' => $status]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
exit;

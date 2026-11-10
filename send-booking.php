<?php
/**
 * RIHANNA SIGNATURE SAFARI - EXPEDITION RESERVATION MAILER
 * Integrates PHPMailer 6.x with robust SMTP & native mail() fallback.
 * Sends reservation alerts to safari team and auto-confirmation to the guest.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

// Configuration
$atelierEmail = 'info@rihannasignaturesafari.com';
$atelierName  = 'Rihanna Signature Safari';

// SMTP Configuration (Set your SMTP credentials here if using an external SMTP server)
$useSmtp    = false; // Set to true to route via external SMTP
$smtpHost   = 'smtp.mailgun.org';
$smtpPort   = 587;
$smtpUser   = '';
$smtpPass   = '';
$smtpSecure = 'tls'; // 'tls' or 'ssl'

// Verify Request Method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Please submit via POST.'
    ]);
    exit;
}

// Sanitize and Validate Inputs
$fullName     = trim(htmlspecialchars((string)($_POST['full_name'] ?? filter_input(INPUT_POST, 'full_name') ?? '')));
$email        = trim((string)($_POST['email'] ?? filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL) ?? ''));
$phone        = trim(htmlspecialchars((string)($_POST['phone'] ?? filter_input(INPUT_POST, 'phone') ?? '')));
$country      = trim(htmlspecialchars((string)($_POST['country'] ?? filter_input(INPUT_POST, 'country') ?? '')));
$packageTitle = trim(htmlspecialchars((string)($_POST['package_title'] ?? filter_input(INPUT_POST, 'package_title') ?? 'Bespoke Private Safari')));
$packagePrice = trim(htmlspecialchars((string)($_POST['package_price'] ?? filter_input(INPUT_POST, 'package_price') ?? 'Custom Quote')));
$adults       = trim(htmlspecialchars((string)($_POST['adults'] ?? filter_input(INPUT_POST, 'adults') ?? '2 Adults')));
$children     = trim(htmlspecialchars((string)($_POST['children'] ?? filter_input(INPUT_POST, 'children') ?? '0 Children')));
$travelDates  = trim(htmlspecialchars((string)($_POST['travel_dates'] ?? filter_input(INPUT_POST, 'travel_dates') ?? 'Flexible / Unspecified')));
$message      = trim(htmlspecialchars((string)($_POST['message'] ?? filter_input(INPUT_POST, 'message') ?? 'None provided')));

// Required fields check
if (empty($fullName) || empty($email) || empty($phone) || empty($country)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide your Full Name, Email, Contact Number, and Country.'
    ]);
    exit;
}

$submissionTime = date('Y-m-d H:i:s T');
$clientIp       = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

// Build Atelier HTML Email Body
$atelierHtml = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Luxury Expedition Reservation Request</title>
  <style>
    body { font-family: 'Montserrat', Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 30px; color: #192218; }
    .card { max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #dcd7ce; border-top: 4px solid #c8963e; padding: 35px; }
    .header { text-align: center; border-bottom: 1px solid #ece7de; padding-bottom: 20px; margin-bottom: 25px; }
    .header h1 { font-family: Georgia, serif; font-size: 24px; color: #233522; margin: 0 0 5px 0; }
    .header p { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #c8963e; margin: 0; font-weight: 700; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
    th, td { padding: 10px 14px; text-align: left; font-size: 13.5px; border-bottom: 1px solid #f0eae1; }
    th { width: 35%; color: #556354; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
    td { color: #192218; font-weight: 500; }
    .highlight { background-color: #fbf9f5; font-weight: 700; color: #233522; }
    .msg-box { background: #faf7f2; border-left: 3px solid #c8963e; padding: 15px; font-size: 13.5px; line-height: 1.6; margin-top: 10px; }
    .footer { font-size: 11px; color: #888888; text-align: center; margin-top: 30px; border-top: 1px solid #ece7de; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>RIHANNA SIGNATURE SAFARI</h1>
      <p>New Luxury Expedition Reservation Dossier</p>
    </div>

    <table>
      <tr class="highlight">
        <th>Selected Package</th>
        <td><strong>{$packageTitle}</strong></td>
      </tr>
      <tr>
        <th>Expedition Rate</th>
        <td>{$packagePrice}</td>
      </tr>
      <tr>
        <th>Guest Name</th>
        <td><strong>{$fullName}</strong></td>
      </tr>
      <tr>
        <th>Direct Email</th>
        <td><a href="mailto:{$email}">{$email}</a></td>
      </tr>
      <tr>
        <th>Contact Number</th>
        <td><a href="tel:{$phone}">{$phone}</a></td>
      </tr>
      <tr>
        <th>Country of Residence</th>
        <td>{$country}</td>
      </tr>
      <tr>
        <th>Party Size</th>
        <td>{$adults}, {$children}</td>
      </tr>
      <tr>
        <th>Preferred Travel Window</th>
        <td>{$travelDates}</td>
      </tr>
      <tr>
        <th>Submission Timestamp</th>
        <td>{$submissionTime} ({$clientIp})</td>
      </tr>
    </table>

    <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #233522; margin-top: 20px;">
      Additional Notes & Special Requests:
    </div>
    <div class="msg-box">
      {$message}
    </div>

    <div class="footer">
      Rihanna Signature Safari HQ &bull; Dar es Salaam, Tanzania<br>
      Automated Booking System &bull; Confidential Client Dossier
    </div>
  </div>
</body>
</html>
HTML;

// Build Guest Confirmation Email Body
$guestHtml = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your Luxury Safari Request - Rihanna Signature Safari</title>
  <style>
    body { font-family: 'Montserrat', Arial, sans-serif; background-color: #f7f5f0; margin: 0; padding: 30px; color: #192218; }
    .card { max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #dcd7ce; border-top: 4px solid #c8963e; padding: 35px; }
    .header { text-align: center; border-bottom: 1px solid #ece7de; padding-bottom: 20px; margin-bottom: 25px; }
    .header h1 { font-family: Georgia, serif; font-size: 24px; color: #233522; margin: 0 0 5px 0; }
    .header p { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #c8963e; margin: 0; font-weight: 700; }
    p { font-size: 14.5px; line-height: 1.8; color: #4e5a4d; }
    .dossier { background: #faf7f2; border: 1px solid #ece7de; padding: 20px; margin: 20px 0; }
    .dossier h4 { margin: 0 0 10px 0; font-size: 16px; color: #233522; }
    .footer { font-size: 11.5px; color: #888888; text-align: center; margin-top: 30px; border-top: 1px solid #ece7de; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>RIHANNA SIGNATURE SAFARI</h1>
      <p>Luxury Tanzania & Kenya Safaris</p>
    </div>

    <p>Dear {$fullName},</p>
    <p>Thank you for inquiring with Rihanna Signature Safari. We have formally received your reservation request for the following bespoke expedition:</p>

    <div class="dossier">
      <h4>{$packageTitle}</h4>
      <p style="margin: 0; font-size: 13.5px; color: #c8963e; font-weight: 700;">Rate: {$packagePrice}</p>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #556354;">Party: {$adults}, {$children} | Travel Dates: {$travelDates}</p>
    </div>

    <p>Our Master Safari Architects at the Dar es Salaam Reserve Pavilion are currently reviewing your parameters, private flight logistics, and luxury lodge availability. You will receive a personalized itinerary dossier and tailored quotation promptly.</p>

    <p>If you require immediate assistance or wish to speak with our concierge team directly, you are invited to connect via telephone or WhatsApp at <strong>+255 (0) 676 063 791</strong>.</p>

    <p>Warmest regards from Tanzania,<br>
    <strong>The Safari Architecture Team</strong><br>
    Rihanna Signature Safari</p>

    <div class="footer">
      Masaki Peninsula, Dar es Salaam, Tanzania<br>
      Tel: +255 676 063 791 &bull; Email: info@rihannasignaturesafari.com
    </div>
  </div>
</body>
</html>
HTML;

// Initialize Delivery via PHPMailer
$mailSent = false;
$errorMessage = '';

// Check if PHPMailer files are present
$phpMailerPath = __DIR__ . '/phpmailer/PHPMailer.php';
$smtpPath      = __DIR__ . '/phpmailer/SMTP.php';
$exceptionPath = __DIR__ . '/phpmailer/Exception.php';

if (file_exists($phpMailerPath) && file_exists($smtpPath) && file_exists($exceptionPath)) {
    require_once $exceptionPath;
    require_once $phpMailerPath;
    require_once $smtpPath;

    try {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);

        if ($useSmtp && !empty($smtpUser)) {
            $mail->isSMTP();
            $mail->Host       = $smtpHost;
            $mail->SMTPAuth   = true;
            $mail->Username   = $smtpUser;
            $mail->Password   = $smtpPass;
            $mail->SMTPSecure = $smtpSecure === 'ssl' ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = $smtpPort;
        } else {
            $mail->isMail();
        }

        // Send to Safari Team
        $mail->setFrom($atelierEmail, 'Rihanna Signature Safari');
        $mail->addAddress($atelierEmail, $atelierName);
                $mail->addReplyTo($email, $fullName);
        $mail->isHTML(true);
        $mail->Subject = 'New Safari Booking Request: ' . $packageTitle . ' - ' . $fullName;
        $mail->Body    = $atelierHtml;
        $mail->AltBody = "New Reservation Request:\n\nPackage: {$packageTitle}\nPrice: {$packagePrice}\nGuest: {$fullName}\nEmail: {$email}\nPhone: {$phone}\nCountry: {$country}\nParty: {$adults}, {$children}\nDates: {$travelDates}\nMessage: {$message}";

        $mailSent = $mail->send();

        // Send Confirmation to Guest
        try {
            $guestMail = new PHPMailer\PHPMailer\PHPMailer(true);
            if ($useSmtp && !empty($smtpUser)) {
                $guestMail->isSMTP();
                $guestMail->Host       = $smtpHost;
                $guestMail->SMTPAuth   = true;
                $guestMail->Username   = $smtpUser;
                $guestMail->Password   = $smtpPass;
                $guestMail->SMTPSecure = $smtpSecure === 'ssl' ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
                $guestMail->Port       = $smtpPort;
            } else {
                $guestMail->isMail();
            }
            $guestMail->setFrom($atelierEmail, 'Rihanna Signature Safari');
            $guestMail->addAddress($email, $fullName);
            $guestMail->addReplyTo($atelierEmail, $atelierName);
            $guestMail->isHTML(true);
            $guestMail->Subject = 'Expedition Dossier Request: ' . $packageTitle . ' | Rihanna Signature Safari';
            $guestMail->Body    = $guestHtml;
            $guestMail->send();
        } catch (\Throwable $e) {
            // Guest auto-reply failure is non-fatal
        }

    } catch (\Throwable $e) {
        $errorMessage = $e->getMessage();
        $mailSent = false;
    }
}

// Fallback to PHP native mail() if PHPMailer was not executed or failed
if (!$mailSent) {
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Rihanna Signature Safari <{$atelierEmail}>\r\n";
        $headers .= "Reply-To: {$fullName} <{$email}>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $subject = 'New Safari Booking Request: ' . $packageTitle . ' - ' . $fullName;
    $mailSent = @mail($atelierEmail, $subject, $atelierHtml, $headers);
}

// Log inquiry to database and fallback file for record integrity
$refNo = 'RIH-' . strtoupper(substr(uniqid(), -6));
try {
    require_once __DIR__ . '/portal/includes/config.php';
    $db = getDbConnection();
    $stmtInq = $db->prepare("INSERT INTO `inquiries` (
        `reference_no`, `full_name`, `email`, `phone`, `country`, `contact_method`,
        `package_name`, `package_price`, `travel_dates`, `adults`, `children`,
        `special_notes`, `status`, `ip_address`, `created_at`
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?, NOW())");
    $stmtInq->execute([
        $refNo,
        $fullName,
        $email,
        $phone,
        $country,
        'Website Form / WhatsApp',
        $packageTitle,
        $packagePrice,
        $travelDates,
        $adults,
        $children,
        $message,
        $clientIp
    ]);
} catch (\Throwable $e) {
    @file_put_contents(__DIR__ . '/portal/uploads/db_errors.log', date('Y-m-d H:i:s') . ' Inq error: ' . $e->getMessage() . PHP_EOL, FILE_APPEND);
}

$logEntry = [
    'ref'      => $refNo,
    'time'     => $submissionTime,
    'package'  => $packageTitle,
    'price'    => $packagePrice,
    'name'     => $fullName,
    'email'    => $email,
    'phone'    => $phone,
    'country'  => $country,
    'adults'   => $adults,
    'children' => $children,
    'dates'    => $travelDates,
    'message'  => $message,
    'ip'       => $clientIp
];
@file_put_contents(__DIR__ . '/reservations_log.json', json_encode($logEntry, JSON_PRETTY_PRINT) . PHP_EOL, FILE_APPEND | LOCK_EX);

// Return JSON Response
echo json_encode([
    'success' => true,
    'message' => 'Your expedition reservation request has been delivered to our master safari architects.',
    'package' => $packageTitle,
    'name'    => $fullName
]);
exit;

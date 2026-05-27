<?php
// quote-submit.php — upload this to your cPanel server root
// Receives quote form data + file attachments and emails info@championsinbronze.com

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$name        = htmlspecialchars(trim($_POST['name'] ?? ''));
$email       = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone       = htmlspecialchars(trim($_POST['phone'] ?? ''));
$description = htmlspecialchars(trim($_POST['description'] ?? ''));

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name and email are required']);
    exit();
}

$to      = 'info@championsinbronze.com';
$cc      = 'GSA@Bronzememorials.net';
$subject = "New Quote Request from $name";

// Build HTML body
$body = "
<h2>New Quote Request — Champions in Bronze</h2>
<table style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;'>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;width:160px;'>Name</td><td style='padding:8px;border:1px solid #ddd;'>$name</td></tr>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;'>Email</td><td style='padding:8px;border:1px solid #ddd;'>$email</td></tr>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;'>Phone</td><td style='padding:8px;border:1px solid #ddd;'>$phone</td></tr>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;'>Notes</td><td style='padding:8px;border:1px solid #ddd;'>$description</td></tr>
</table>
";

// Handle file attachments
$attachments = [];
if (!empty($_FILES['files'])) {
    $uploadDir = sys_get_temp_dir() . '/';
    $fileCount = count($_FILES['files']['name']);
    for ($i = 0; $i < $fileCount; $i++) {
        if ($_FILES['files']['error'][$i] === UPLOAD_ERR_OK) {
            $tmpName  = $_FILES['files']['tmp_name'][$i];
            $origName = basename($_FILES['files']['name'][$i]);
            $destPath = $uploadDir . uniqid() . '_' . $origName;
            if (move_uploaded_file($tmpName, $destPath)) {
                $attachments[] = ['path' => $destPath, 'name' => $origName];
            }
        }
    }
}

// Build MIME email with attachments
$boundary = md5(time());

$headers  = "From: Champions in Bronze <noreply@championsinbronze.com>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Cc: $cc\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

$message  = "--$boundary\r\n";
$message .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
$message .= $body . "\r\n";

foreach ($attachments as $att) {
    $fileData = file_get_contents($att['path']);
    $encoded  = chunk_split(base64_encode($fileData));
    $mimeType = mime_content_type($att['path']) ?: 'application/octet-stream';
    $message .= "--$boundary\r\n";
    $message .= "Content-Type: $mimeType; name=\"{$att['name']}\"\r\n";
    $message .= "Content-Disposition: attachment; filename=\"{$att['name']}\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $message .= $encoded . "\r\n";
    unlink($att['path']); // clean up temp file
}

$message .= "--$boundary--";

$sent = mail($to, $subject, $message, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Check your server mail config.']);
}

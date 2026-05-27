<?php
// quote-submit.php — upload this to your cPanel server root
// Uses PHPMailer via Composer autoload OR falls back to manual SMTP socket

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

$name            = htmlspecialchars(trim($_POST['name'] ?? ''));
$email           = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone           = htmlspecialchars(trim($_POST['phone'] ?? ''));
$description     = htmlspecialchars(trim($_POST['description'] ?? ''));
$source_page     = htmlspecialchars(trim($_POST['source_page'] ?? ''));
$reference_image = trim($_POST['reference_image'] ?? '');

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name and email are required']);
    exit();
}

// SMTP config
$smtp_host = 'mail.bronzememorials.net';
$smtp_port = 465;
$smtp_user = 'info@championsinbronze.com';
$smtp_pass = 'Chuckie850#';
$from_name = 'Champions in Bronze';
$from_addr = 'info@championsinbronze.com';
$to        = 'info@championsinbronze.com';
$cc        = 'GSA@Bronzememorials.net';
$subject   = "New Quote Request from $name";

// Build HTML body
$img_html = '';
if (!empty($reference_image)) {
    $img_html = "<div style='margin:16px 0;'><p style='font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#555;margin-bottom:6px;'>Reference Image:</p><img src='$reference_image' alt='Reference' style='max-width:400px;max-height:300px;border:1px solid #ddd;' /></div>";
}

$body = "
<h2 style='font-family:Arial,sans-serif;'>New Quote Request — Champions in Bronze</h2>
<table style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;'>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;width:160px;'>Name</td><td style='padding:8px;border:1px solid #ddd;'>$name</td></tr>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;'>Email</td><td style='padding:8px;border:1px solid #ddd;'>$email</td></tr>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;'>Phone</td><td style='padding:8px;border:1px solid #ddd;'>$phone</td></tr>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;'>Notes</td><td style='padding:8px;border:1px solid #ddd;'>$description</td></tr>
  <tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;'>Page</td><td style='padding:8px;border:1px solid #ddd;'>$source_page</td></tr>
</table>
$img_html
";

// Handle file attachments — save to temp
$attachments = [];
if (!empty($_FILES['files'])) {
    $fileCount = count($_FILES['files']['name']);
    for ($i = 0; $i < $fileCount; $i++) {
        if ($_FILES['files']['error'][$i] === UPLOAD_ERR_OK) {
            $tmpName  = $_FILES['files']['tmp_name'][$i];
            $origName = basename($_FILES['files']['name'][$i]);
            $destPath = sys_get_temp_dir() . '/' . uniqid() . '_' . $origName;
            if (move_uploaded_file($tmpName, $destPath)) {
                $attachments[] = ['path' => $destPath, 'name' => $origName];
            }
        }
    }
}

// Try PHPMailer if available (via Composer)
$phpmailerPath = __DIR__ . '/vendor/autoload.php';
if (file_exists($phpmailerPath)) {
    require $phpmailerPath;
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = $smtp_host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtp_user;
        $mail->Password   = $smtp_pass;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = $smtp_port;

        $mail->setFrom($from_addr, $from_name);
        $mail->addAddress($to);
        $mail->addCC($cc);
        $mail->addReplyTo($email, $name);

        foreach ($attachments as $att) {
            $mail->addAttachment($att['path'], $att['name']);
        }

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        foreach ($attachments as $att) { @unlink($att['path']); }
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        foreach ($attachments as $att) { @unlink($att['path']); }
        http_response_code(500);
        echo json_encode(['error' => $mail->ErrorInfo]);
    }
    exit();
}

// Fallback: raw SMTP over SSL socket (no PHPMailer needed)
function smtp_send($host, $port, $user, $pass, $from_addr, $from_name, $to, $cc, $reply_to, $reply_name, $subject, $body, $attachments) {
    $boundary = md5(uniqid(time()));

    // Build MIME message
    $msg  = "From: $from_name <$from_addr>\r\n";
    $msg .= "To: $to\r\n";
    $msg .= "Cc: $cc\r\n";
    $msg .= "Reply-To: $reply_name <$reply_to>\r\n";
    $msg .= "Subject: $subject\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n\r\n";
    $msg .= "--$boundary\r\n";
    $msg .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
    $msg .= $body . "\r\n";

    foreach ($attachments as $att) {
        $fileData = file_get_contents($att['path']);
        $encoded  = chunk_split(base64_encode($fileData));
        $mimeType = mime_content_type($att['path']) ?: 'application/octet-stream';
        $msg .= "--$boundary\r\n";
        $msg .= "Content-Type: $mimeType; name=\"{$att['name']}\"\r\n";
        $msg .= "Content-Disposition: attachment; filename=\"{$att['name']}\"\r\n";
        $msg .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $msg .= $encoded . "\r\n";
    }
    $msg .= "--$boundary--\r\n";

    // Connect via SSL
    $ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
    $sock = stream_socket_client("ssl://$host:$port", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $ctx);
    if (!$sock) return "Cannot connect: $errstr ($errno)";

    function smtp_get($sock) { $r = ''; while ($l = fgets($sock, 512)) { $r .= $l; if (substr($l,3,1)==' ') break; } return $r; }
    function smtp_cmd($sock, $cmd) { fwrite($sock, "$cmd\r\n"); return smtp_get($sock); }

    smtp_get($sock); // greeting
    smtp_cmd($sock, "EHLO championsinbronze.com");
    smtp_cmd($sock, "AUTH LOGIN");
    smtp_cmd($sock, base64_encode($user));
    $r = smtp_cmd($sock, base64_encode($pass));
    if (strpos($r, '235') === false) { fclose($sock); return "Auth failed: $r"; }

    smtp_cmd($sock, "MAIL FROM:<$from_addr>");
    smtp_cmd($sock, "RCPT TO:<$to>");
    smtp_cmd($sock, "RCPT TO:<$cc>");
    smtp_cmd($sock, "DATA");
    fwrite($sock, $msg . "\r\n.\r\n");
    $r = smtp_get($sock);
    smtp_cmd($sock, "QUIT");
    fclose($sock);

    foreach ($attachments as $att) { @unlink($att['path']); }

    if (strpos($r, '250') !== false) return true;
    return "Send failed: $r";
}

$result = smtp_send($smtp_host, $smtp_port, $smtp_user, $smtp_pass, $from_addr, $from_name, $to, $cc, $email, $name, $subject, $body, $attachments);

if ($result === true) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => $result]);
}

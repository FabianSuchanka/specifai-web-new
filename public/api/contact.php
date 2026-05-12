<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Povolit preflight (OPTIONS) dotazy pro CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Přečtení JSON dat z těla požadavku
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Validace a sanitizace vstupů
    $name = htmlspecialchars(trim($data["name"] ?? ""));
    $phone = htmlspecialchars(trim($data["phone"] ?? ""));
    $email = filter_var(trim($data["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $package = htmlspecialchars(trim($data["package"] ?? "Nevím, chci poradit"));
    $message = htmlspecialchars(trim($data["message"] ?? ""));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Vyplňte všechna povinná pole."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Neplatný e-mail."]);
        exit;
    }

    // E-mail příjemce (kam se mají dotazy zasílat)
    $to = "fabian.suchanka@specifai.cz"; 
    $subject = "Nová poptávka z webu: " . $name;
    
    // Sestavení zprávy
    $body = "Dobrý den,\n\n";
    $body .= "máte novou zprávu z webového formuláře.\n\n";
    $body .= "Jméno: $name\n";
    $body .= "Telefon: $phone\n";
    $body .= "E-mail: $email\n";
    $body .= "Zájem o balíček: $package\n\n";
    $body .= "Zpráva:\n$message\n\n";
    $body .= "--\nOdesláno z webu SpecifAI";

    // Hlavičky
    $headers = "From: noreply@" . $_SERVER['SERVER_NAME'] . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Odeslání
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Zpráva byla úspěšně odeslána."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Při odesílání došlo k chybě na serveru."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>

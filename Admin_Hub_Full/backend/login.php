<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

class User {

    public function getRequestData() {
        return json_decode(file_get_contents("php://input"), true);
    }

    public function validateUser($email, $password) {
        if ($email === "admin@gmail.com" && $password === "123456") {
            return ["status" => "success"];
        } else {
            return [
                "status" => "error",
                "message" => "Invalid credentials"
            ];
        }
    }

    public function handleLogin() {
        $data = $this->getRequestData();

        if (!isset($data['email']) || !isset($data['password'])) {
            echo json_encode([
                "status" => "error",
                "message" => "Email and Password required"
            ]);
            return;
        }

        $email = $data['email'];
        $password = $data['password'];

        $result = $this->validateUser($email, $password);
        echo json_encode($result);
    }
}

$user = new User();
$user->handleLogin();

?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'] ?? '';
$password = $data['password'] ?? '';
$role = $data['role'] ?? '';

$dummyUsers = [
    [
        "username" => "admin",
        "password" => "123456",
        "role" => "admin"
    ],
    [
        "username" => "user1",
        "password" => "111111",
        "role" => "user"
    ]
];

foreach ($dummyUsers as $user) {
    if (
        $user["username"] === $username &&
        $user["password"] === $password &&
        $user["role"] === $role
    ) {
        echo json_encode([
            "status" => "success",
            "message" => "Login successful"
        ]);
        exit;
    }
}

echo json_encode([
    "status" => "error",
    "message" => "Invalid credentials"
]);
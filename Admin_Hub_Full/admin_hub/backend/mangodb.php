<?php
require 'vendor/autoload.php';

try {
    $client = new MongoDB\Client("mongodb://localhost:27017");

    $db = $client->selectDatabase("mydatabase");

    echo "MongoDB Connected Successfully";
    
} catch (Exception $e) {
    die("Connection Failed: " . $e->getMessage());
}
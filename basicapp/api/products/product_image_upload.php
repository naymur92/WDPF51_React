<?php
ini_set('max_input_vars', 20000);
include '../db_connection.php';

$data = json_decode(file_get_contents("php://input"));

echo json_encode($data);

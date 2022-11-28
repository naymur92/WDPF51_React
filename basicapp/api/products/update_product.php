<?php
include '../db_connection.php';

$data = json_decode(file_get_contents("php://input"));
// echo json_encode(['msg' => 'Hello']);
echo json_encode($data);

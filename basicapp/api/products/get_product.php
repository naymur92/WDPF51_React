<?php

include '../db_connection.php';

if (isset($_GET['id']) && $_GET['id'] != null) {
  $id = mysqli_escape_string($db_conn, trim($_GET['id']));

  $result = mysqli_query($db_conn, "SELECT * FROM products WHERE id=$id");

  if (mysqli_num_rows($result) > 0) {
    $product = mysqli_fetch_assoc($result);
    echo json_encode(["success" => true, "product" => $product]);
  } else {
    echo json_encode(["success" => false, "msg" => "No data found"]);
  }
} else {
  echo json_encode(["success" => false, "msg" => "Authentication Error"]);
}

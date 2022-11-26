<?php
require '../db_connection.php';
$allProducts = mysqli_query($db_conn, "SELECT * FROM products");
if (mysqli_num_rows($allProducts) > 0) {
  while ($row = mysqli_fetch_array($allProducts)) {
    $viewjson["id"] = $row['id'];
    $viewjson["name"] = $row['name'];
    $viewjson["details"] = $row['details'];
    $viewjson["image"] = $row['image'];
    $viewjson["price"] = $row['price'];

    $json_array["productdata"][] = $viewjson;
  }
  echo json_encode(["success" => true, "productlist" => $json_array]);
  return;
} else {
  echo json_encode(["success" => false]);
  return;
}

<?php
require '../db_connection.php';


if (
  isset($_GET['id'])
  && !empty(trim($_GET['id']))
) {

  $prodid = mysqli_real_escape_string($db_conn, trim($_GET['id']));

  $add = mysqli_query($db_conn, "DELETE FROM products WHERE id='$prodid'");

  if ($add) {
    echo json_encode(["success" => true, "msg" => "Successfully Deleted"]);
    return;
  } else {
    echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
    return;
  }
} else {
  echo json_encode(["success" => false, "msg" => "Please fill all the required fields!"]);
  return;
}

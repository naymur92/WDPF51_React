<?php
require '../dbconfig.php';


if (
  isset($_GET['id'])
  && !empty(trim($_GET['id']))
) {

  $prodid = mysqli_real_escape_string($db_conn, trim($_GET['id']));

  $result = mysqli_query($db_conn, "DELETE FROM products WHERE id='$prodid'");

  // echo json_encode(mysqli_affected_rows($db_conn));
  // echo json_encode($db_conn->affected_rows);
  // echo $db_conn->affected_rows;

  if ($result) {
    echo json_encode(["success" => true, "msg" => "Successfully Deleted"]);
    return;
  } else {
    echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
    return;
  }
} else {
  echo json_encode(["success" => false, "msg" => "Unauthorised Access!"]);
  return;
}

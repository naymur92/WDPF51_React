<?php
require '../dbconfig.php';


if (
  isset($_GET['id'])
  && !empty(trim($_GET['id']))
) {

  $prodid = mysqli_real_escape_string($db_conn, trim($_GET['id']));

  $result = mysqli_query($db_conn, "DELETE FROM products WHERE id='$prodid'");
  // echo mysqli_affected_rows($db_conn);
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

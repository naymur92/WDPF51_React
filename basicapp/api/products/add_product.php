<?php

require '../db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
  isset($data->name)
  && isset($data->details)
  && isset($data->price)
) {
  $name = mysqli_real_escape_string($db_conn, trim($data->name));
  $details = mysqli_real_escape_string($db_conn, trim($data->details));
  $image = mysqli_real_escape_string($db_conn, trim($data->image));
  $price = mysqli_real_escape_string($db_conn, trim($data->price));

  $result = mysqli_query($db_conn, "INSERT INTO products VALUES(NULL, '$name', '$details', '$image', '$price')");

  if ($db_conn->affected_rows > 0) {
    $last_id = mysqli_insert_id($db_conn);

    echo json_encode(['success' => true, 'insert_id' => $last_id, 'msg' => "Successfully Added"]);
    return;
  } else {
    echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
    return;
  }
} else {
  echo json_encode(["success" => false, "msg" => "Please fill all the required fields!"]);
  return;
}

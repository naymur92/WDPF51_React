<?php
include '../db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->id) && $data->id != null) {
  $id = mysqli_escape_string($db_conn, trim($data->id));
  $name = mysqli_escape_string($db_conn, trim($data->name));
  $details = mysqli_escape_string($db_conn, trim($data->details));
  $image = mysqli_escape_string($db_conn, trim($data->image));
  $price = mysqli_escape_string($db_conn, trim($data->price));

  $result = mysqli_query($db_conn, "UPDATE products SET name='$name', details='$details', image='$image', price='$price' WHERE id=$id");

  if (mysqli_affected_rows($db_conn)) {
    echo json_encode(['success' => true, 'msg' => 'Updated Successfully']);
  } else {
    echo json_encode(['success' => false, 'msg' => 'Data Unchanged']);
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
}

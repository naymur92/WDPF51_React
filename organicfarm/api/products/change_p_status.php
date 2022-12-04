<?php
include '../dbconfig.php';
$data = json_decode(file_get_contents('php://input'));
// echo json_encode($data);

if (isset($data->params) && $data->params->id !== '' && $data->params->status !== '') {
  $id = mysqli_real_escape_string($db_conn, trim($data->params->id));
  $status = mysqli_real_escape_string($db_conn, trim($data->params->status));
  // echo $id;

  $result = $db_conn->query("UPDATE products SET status='$status' WHERE id='$id' AND (stock > 0 OR status='available')");

  if ($db_conn->affected_rows === 1) {
    echo json_encode(["success" => true, "msg" => 'Success']);
    return;
  } else {
    echo json_encode(["success" => false, "msg" => 'Failed']);
    return;
  }
}
$db_conn->close();

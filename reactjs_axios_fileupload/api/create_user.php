<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$host = "localhost";
$user = "root";
$password = "";
$dbname = "reactjs_axios_fileupload";
$db_con = mysqli_connect($host, $user, $password, $dbname);

const DEST_FOLDER = '../public/assets/images/uploads/';

// print_r($_FILES['thumb']);
$data = json_decode($_POST['userinfo']);

if (isset($data->username) && !empty($data->username)) {
  $username = mysqli_escape_string($db_con, trim($data->username));
  $name = mysqli_escape_string($db_con, trim($data->name));

  $filename = '';
  $uploaded = false;

  if (isset($_FILES['thumb'])) {
    $thumb_name = $_FILES['thumb']['name'];
    $tmp_name = $_FILES['thumb']['tmp_name'];

    if ($thumb_name != '' && move_uploaded_file($tmp_name, DEST_FOLDER . $thumb_name)) {
      $filename = $thumb_name;
      $uploaded = true;
    }
  }

  $sql = "INSERT INTO users VALUES(NULL, '$username', '$name', '$filename')";
  mysqli_query($db_con, $sql);

  if (mysqli_affected_rows($db_con) > 0) {
    echo json_encode(['status' => true, 'msg' => 'Successfully Registered']);
    return;
  } else {
    // If not registered delete uploaded file
    if ($uploaded) {
      unlink(DEST_FOLDER . $filename);
    }
    echo json_encode(['status' => false, 'msg' => 'Try again']);
    return;
  }
  $thumb_name = $_FILES['thumb']['name'];
  $tmp_name = $_FILES['thumb']['tmp_name'];

  if ($thumb_name != '' && move_uploaded_file($tmp_name, DEST_FOLDER . $thumb_name)) {
    $filename = $thumb_name;
    $uploaded = true;
  }
} else {
  echo json_encode(['status' => false, 'msg' => 'Please fill the form']);
  return;
}

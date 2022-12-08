<?php
include './db_connection.php';

$data = json_decode(file_get_contents('php://input'));

if (
  isset($data)
  && isset($data->email)
  && !empty(trim($data->email))
  && isset($data->password)
  && !empty(trim($data->password))
) {

  $firstname = mysqli_escape_string($db_conn, trim($data->firstname));
  $lastname = mysqli_escape_string($db_conn, trim($data->lastname));
  $email = mysqli_escape_string($db_conn, trim($data->email));
  $password = mysqli_escape_string($db_conn, trim($data->password));

  $result = mysqli_query($db_conn, "SELECT email FROM users WHERE email='$email'");

  if ($result->num_rows === 1) {
    echo json_encode(['success' => false, 'msg' => 'Duplicate Email']);
    return;
  } else {
    mysqli_query($db_conn, "INSERT INTO users VALUES(NULL, '$firstname', '$lastname', '$email', '$password', DEFAULT, DEFAULT)");

    if ($db_conn->affected_rows > 0) {
      echo json_encode(['success' => true, 'msg' => 'Successfully Registered']);
      return;
    } else {
      echo json_encode(['success' => false, 'msg' => 'Try Again']);
      return;
    }
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Please Fill Form First']);
  return;
}

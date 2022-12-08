<?php
require 'db_connection.php';

// echo json_encode($_GET['email']);

if (
  isset($_GET['email'])
  && !empty(trim($_GET['email'])
    && isset($_GET['password'])
    && !empty(trim($_GET['password'])))
) {
  $email = mysqli_real_escape_string($db_conn, trim($_GET['email']));
  $password = mysqli_real_escape_string($db_conn, trim($_GET['password']));

  $result = mysqli_query($db_conn, "SELECT * FROM users WHERE email = '$email' AND password = '$password'");
  if (mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    $data['name'] = $row['firstname'] . ' ' . $row['lastname'];
    $data['email'] = $row['email'];
    $data['usertype'] = $row['user_type'];
    $data['status'] = 'loggedin';

    echo json_encode(["success" => true, 'msg' => 'Successfully logged in', 'logininfo' => $data]);
    return;
  } else {
    echo json_encode(["success" => false, 'msg' => 'Check Your Email and Password']);
    return;
  }
} else {
  echo json_encode(["success" => false, 'msg' => 'Fill your form']);
  return;
}

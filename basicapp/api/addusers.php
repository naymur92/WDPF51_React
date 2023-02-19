<?php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$data = $data->info;

if (
	isset($data->name)
	&& isset($data->email)
	&& !empty(trim($data->name))
	&& !empty(trim($data->email))
) {

	$name = mysqli_real_escape_string($db_conn, trim($data->name));
	$email = mysqli_real_escape_string($db_conn, trim($data->email));
	$password = mysqli_real_escape_string($db_conn, trim($data->password));

	$add = mysqli_query($db_conn, "INSERT INTO users VALUES(NULL, '$name','$email','$password')");
	if ($add) {
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success" => true, "msg" => "User Added successfully"]);
		return;
	} else {
		echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
		return;
	}
} else {
	echo json_encode(["success" => false, "msg" => "Please fill all the required fields!"]);
	return;
}

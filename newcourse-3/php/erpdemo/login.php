﻿<?php
    include "../DBHelper.php";

	$email = $_POST["email"];
	$pwd = $_POST["password"];

    $sql = "select * from users where email = '$email' and password = '$pwd';";
    $array = query($sql);
    if(count($array) > 0){
        echo '{"state": true}';
        session_start();
        $_SESSION["email"] = $email;//session_id
    } else{
        echo '{"state": false, "message": "login fail!"}';       
    }
?>
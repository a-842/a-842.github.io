<?php

if (empty($_POST["name"])) {
  die("Name is Required");
}

if ( ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
  die("Email in wrong format");
}

if (strlen($_POST["password"]) < 8) {
  die("Pass word must be at least 8 Characters");
}

if ( ! preg_match("/[0-9]/", $_POST["password"])) {
  die("Password must contain at least one number");
}

if ( ! preg_match("/[a-z]/", $_POST["password"])) {
  die("Password must contain at least one letter");
}

if ( $_POST["password"] !== $_POST["password_confirm"]) {
  die("Passwords must match");
}

$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

print_r($_POST);
var_dump($password_hash);

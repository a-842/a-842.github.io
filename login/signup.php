<?php

if (empty($_POST["name"])) {
  die("Name is Required");
}

if ( ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
  die("Email in wrong format");
}

if ()

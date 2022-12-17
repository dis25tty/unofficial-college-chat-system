<?php
 $sname="localhost";
 $uname="root";
 $password="";

 $db_name ="vidmin";
 
 $conn=mysqli_connect($sname,$uname,$password,$db_name);
 
 if(!$conn){
    echo "connection failed";
    exit();
 }
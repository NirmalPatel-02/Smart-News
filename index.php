<?php
    $server="localhost";
    $username="root";
    $password="";

    $conn=mysqli_connect($server,$username,$password);

    $Name     = $_POST[ 'Name' ];
    $Email    = $_POST[ 'Email' ];
    $Pass     = $_POST[ 'Pass' ];
    $MobileNo = $_POST[ 'MobileNo' ];

    $sql="INSERT INTO `carsignup`.`data` (`Name`, `Email`, `Pass`, `MobileNo`) VALUES ('$Name', '$Email', '$Pass', '$MobileNo');";

    if($conn->query($sql) == true){
        // echo"success";
    }
    else{
        echo"error $sql <br> $conn->error";
    }
    $conn->close();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>RForm</title>
    </head>
    <body>
        <div id="RForm">
            <div id="SignUp">
                <h3>Sign Up</h3>
            </div>
            <form  id="Form" method="post" action="index.php">
                <input type="text" name="Name" id="Name" placeholder="ENTER NAME"><br><br>
                <input type="email" name="Email" id="Email" placeholder="ENTER EMAIL"><br><br>
                <input type="password" name="Pass" id="Pass" placeholder="ENTER STRONG PASSWORD"><br><br>
                <input type="number" name="MobileNo" id="MobileNo" placeholder="ENTER MOBILE NO."><br><br><br>
                <button id="Submmit" >Sign Up</button>
            </form>
        </div>
    </body>
</html>

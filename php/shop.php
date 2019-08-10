<?php
    include 'dbConnection.php';
    $conn = OpenCon();

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $query=mysqli_query($conn, "SELECT * FROM tiendas");

    while($row=mysqli_fetch_assoc($query)){
      $array[] = array("nombre"=>$row['nombre'], "logo"=>$row['logo']);
    }
    echo json_encode($array);

    CloseCon($conn);
?>
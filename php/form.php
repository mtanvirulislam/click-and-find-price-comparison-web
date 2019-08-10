<?php
    include 'dbConnection.php';

    // Create connection
    $conn = OpenCon();
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $nombre = $_GET["nombre"];
    $correo = $_GET["correo"];
    $telefono = $_GET["telefono"];
    $usuario = $_GET["usuario"];
    $mensaje = $_GET["mensaje"];

    $sql = "INSERT INTO formularios (nombre, correo, telefono, usuario, mensaje)
            VALUES ('$nombre', '$correo', ".$telefono.", '$usuario','$mensaje')";

    if ($conn->query($sql) === TRUE) {
        echo "Mensaje enviado!!";
    } else {
        echo "Error al insertar: " . $sql . "<br>" . $conn->error;
    }

    CloseCon($conn);
?>
<?php
    include 'dbConnection.php';
    $key=$_GET['key'];
    $array = array();
    $con = OpenCon();
    //$con=mysqli_connect("localhost","root","","demo");
    mysqli_set_charset($con, 'utf8');
    //buscar en los productos
    $query=mysqli_query($con, "select nombre from productos where nombre LIKE '%$key%'");
    while($row=mysqli_fetch_assoc($query)){
      $array[] = array("nombre"=>$row['nombre'], "tipo"=> "Producto");
    }

    $query=mysqli_query($con, "select nombre from tiendas where nombre LIKE '%$key%'");
    while($row=mysqli_fetch_assoc($query)){
      $array[] = array("nombre"=>$row['nombre'], "tipo"=> "Tienda");
    }

    $query=mysqli_query($con, "select nombre from categorias where nombre LIKE '%$key%'");
    while($row=mysqli_fetch_assoc($query)){
      $array[] = array("nombre"=>$row['nombre'], "tipo"=> "Categoria");
    }

    echo json_encode($array);
    CloseCon($con);

?>

<?php
    include 'dbConnection.php';
    $conn = OpenCon();
    $array = array();

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if($_GET["nivel"]=="0"){
        $sql = 'SELECT p.nombre "nombre",p.foto "img",t.nombre "tienda",t.latitud 
        "la",t.longitud "lo",pr.precio "precio",c.nombre "categoria" 
        FROM productos p, tiendas t, precios pr, categorias c 
        WHERE p.id=pr.id_producto AND pr.id_tienda=t.id AND p.categoria=c.id';

        $query=mysqli_query($conn, $sql);

        while($row=mysqli_fetch_assoc($query)){
        $array[] = array("nombre"=>$row['nombre'], "img"=>$row['img'], "categoria"=>$row['categoria'],"tienda"=>$row['tienda'], "la"=>$row['la'], "lo"=>$row['lo'],"precio"=>$row['precio']);
        }
        echo json_encode($array);
    }

    if($_GET["nivel"]=="1"){
        $categoria = $_GET["categoria"];
        $sql = "SELECT p.nombre 'nombre',p.foto 'img',t.nombre 'tienda',t.latitud
         'la',t.longitud 'lo',pr.precio 'precio',c.nombre 'categoria' 
         FROM productos p, tiendas t, precios pr, categorias c 
         WHERE p.id=pr.id_producto AND pr.id_tienda=t.id AND p.categoria=c.id 
         AND c.id IN (SELECT caS.id FROM categorias caS, categorias caU 
         WHERE caS.superior=caU.id AND caU.nombre LIKE '$categoria')";

        $query=mysqli_query($conn, $sql);

        while($row=mysqli_fetch_assoc($query)){
        $array[] = array("nombre"=>$row['nombre'], "img"=>$row['img'], "categoria"=>$row['categoria'],"tienda"=>$row['tienda'], "la"=>$row['la'], "lo"=>$row['lo'],"precio"=>$row['precio']);
        }
        echo json_encode($array);
    }

    if($_GET["nivel"]=="2"){
        $categoria = $_GET["categoria"];
        $sql = "SELECT p.nombre 'nombre',p.foto 'img',t.nombre 'tienda',t.latitud 'la',
        t.longitud 'lo',pr.precio 'precio',c.nombre 'categoria' FROM productos p, tiendas t, 
        precios pr, categorias c WHERE p.id=pr.id_producto AND pr.id_tienda=t.id 
        AND p.categoria=c.id AND c.nombre LIKE '$categoria'";

        $query=mysqli_query($conn, $sql);

        while($row=mysqli_fetch_assoc($query)){
        $array[] = array("nombre"=>$row['nombre'], "img"=>$row['img'], "categoria"=>$row['categoria'],"tienda"=>$row['tienda'], "la"=>$row['la'], "lo"=>$row['lo'],"precio"=>$row['precio']);
        }
        echo json_encode($array);
    }

    if($_GET["nivel"]=="0i"){
        $categoria = $_GET["categoria"];
        $sql = "SELECT p.nombre 'nombre',p.foto 'img',t.nombre 'tienda',t.latitud 
        'la',t.longitud 'lo',pr.precio 'precio',c.nombre 'categoria'
        FROM productos p, tiendas t, precios pr, categorias c 
        WHERE p.id=pr.id_producto AND pr.id_tienda=t.id AND p.categoria=c.id
        AND p.nombre LIKE '%$categoria%'";

        $query=mysqli_query($conn, $sql);

        while($row=mysqli_fetch_assoc($query)){
        $array[] = array("nombre"=>$row['nombre'], "img"=>$row['img'], "categoria"=>$row['categoria'],"tienda"=>$row['tienda'], "la"=>$row['la'], "lo"=>$row['lo'],"precio"=>$row['precio']);
        }
        echo json_encode($array);
    }

    $tipo= $_GET["nivel"];
    if($tipo=="Producto"){
        $categoria = $_GET["categoria"];
        $sql = "SELECT p.nombre 'nombre',p.foto 'img',t.nombre 'tienda',t.latitud 
        'la',t.longitud 'lo',pr.precio 'precio',c.nombre 'categoria'
        FROM productos p, tiendas t, precios pr, categorias c 
        WHERE p.id=pr.id_producto AND pr.id_tienda=t.id AND p.categoria=c.id
        AND p.nombre LIKE '%$categoria%'";

        $query=mysqli_query($conn, $sql);

        while($row=mysqli_fetch_assoc($query)){
        $array[] = array("nombre"=>$row['nombre'], "img"=>$row['img'], "categoria"=>$row['categoria'],"tienda"=>$row['tienda'], "la"=>$row['la'], "lo"=>$row['lo'],"precio"=>$row['precio']);
        }
        echo json_encode($array);
    }

    if($tipo=="Tienda"){
        $categoria = $_GET["categoria"];
        $sql = "SELECT p.nombre 'nombre',p.foto 'img',t.nombre 'tienda',t.latitud 
        'la',t.longitud 'lo',pr.precio 'precio',c.nombre 'categoria'
        FROM productos p, tiendas t, precios pr, categorias c 
        WHERE p.id=pr.id_producto AND pr.id_tienda=t.id AND p.categoria=c.id
        AND t.nombre LIKE '%$categoria%'";

        $query=mysqli_query($conn, $sql);

        while($row=mysqli_fetch_assoc($query)){
        $array[] = array("nombre"=>$row['nombre'], "img"=>$row['img'], "categoria"=>$row['categoria'],"tienda"=>$row['tienda'], "la"=>$row['la'], "lo"=>$row['lo'],"precio"=>$row['precio']);
        }
        echo json_encode($array);
    }

    if($tipo=="Categoria"){
        $categoria = $_GET["categoria"];
        $sql = "SELECT p.nombre 'nombre',p.foto 'img',t.nombre 'tienda',t.latitud 
        'la',t.longitud 'lo',pr.precio 'precio',c.nombre 'categoria'
        FROM productos p, tiendas t, precios pr, categorias c 
        WHERE p.id=pr.id_producto AND pr.id_tienda=t.id AND p.categoria=c.id
        AND c.nombre LIKE '%$categoria%'";

        $query=mysqli_query($conn, $sql);

        while($row=mysqli_fetch_assoc($query)){
        $array[] = array("nombre"=>$row['nombre'], "img"=>$row['img'], "categoria"=>$row['categoria'],"tienda"=>$row['tienda'], "la"=>$row['la'], "lo"=>$row['lo'],"precio"=>$row['precio']);
        }
        echo json_encode($array);
        //echo $categoria;
    }
    
    CloseCon($conn);
?>
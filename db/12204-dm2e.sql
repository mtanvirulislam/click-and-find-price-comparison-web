-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-12-2018 a las 16:26:37
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `12204-dm2e`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `superior` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `superior`) VALUES
(1, 'Portátiles', 0),
(2, 'Smartphones', 0),
(3, 'Tablets', 0),
(4, 'Televisores', 0),
(5, 'Consolas', 0),
(6, 'Periféricos', 0),
(7, 'Workstation', 1),
(8, 'Gaming', 1),
(9, 'IOS', 2),
(10, 'Android', 2),
(11, 'Tablet', 3),
(12, 'Ebook', 3),
(13, 'LED', 4),
(14, 'Smart TV', 4),
(15, 'Sobremesa', 5),
(16, ' Portátil', 5),
(17, 'Teclado', 6),
(18, 'Cascos', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formularios`
--

CREATE TABLE `formularios` (
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` int(9) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `mensaje` varchar(200) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `formularios`
--

INSERT INTO `formularios` (`nombre`, `correo`, `telefono`, `usuario`, `mensaje`) VALUES
('Angel', 'angel@angel.es', 620000000, 'angel', 'Hola mundo'),
('Javi', 'javi@javi.es', 610000000, 'javi', 'Hola Mundo!!'),
('Oscar', 'oscar@oscar.es', 600000000, 'oscar', 'Hola mundo'),
('tanvir', 'tanvir@tanvir.es', 600000000, 'tanvir', 'hola mundo'),
('Xavi', 'xavi@xavi.es', 600000000, 'xavi', 'Has iniciado una sesión de incógnito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precios`
--

CREATE TABLE `precios` (
  `id_producto` int(11) NOT NULL,
  `id_tienda` int(11) NOT NULL,
  `precio` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `precios`
--

INSERT INTO `precios` (`id_producto`, `id_tienda`, `precio`) VALUES
(1, 1, '4690.96'),
(2, 2, '939.00'),
(3, 3, '1499.99'),
(4, 4, '669.90'),
(5, 1, '1069.00'),
(6, 1, '1262.07'),
(7, 3, '1579.00'),
(8, 2, '399.00'),
(9, 2, '899.00'),
(10, 3, '129.99'),
(11, 3, '130.80'),
(12, 1, '285.00'),
(13, 2, '349.95'),
(14, 3, '119.00'),
(15, 2, '1259.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `marca` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `categoria` int(11) NOT NULL,
  `foto` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `marca`, `categoria`, `foto`) VALUES
(1, 'ZBook 17 G4', 'HP', 7, 'images/ZBook17G4.jpg'),
(2, 'iPhone X', 'Apple', 9, 'images/iphonex.jpg'),
(3, 'MSI GE63 Raider', 'Msi', 8, 'images/msi_ge63.jpg'),
(4, 'Galaxy S9', 'Samsung', 10, 'images/s9.jpg'),
(5, 'Galaxy Note9', 'Samsung', 10, 'images/note9.jpg'),
(6, 'iPhone XS', 'Apple', 9, 'images/iphonexs.jpg'),
(7, 'LG OLED55C8PLA', 'LG', 14, 'images/lgstv.jpg'),
(8, 'Samsung UE32M5505', 'Samsung', 13, 'images/sled.jpg'),
(9, 'iPad Pro', 'Apple', 11, 'images/ipadpro.jpg'),
(10, 'Paperwhite 2018', 'Kindle', 12, 'images/kindle.jpg'),
(11, 'Playstation Vita', 'Sony', 16, 'images/psvita.jpg'),
(12, 'XBox One S', 'Microsoft', 15, 'images/xboxones.jpg'),
(13, 'Beats Studio3', 'Beats', 18, 'images/beats.png'),
(14, 'BlackWidow Chroma V2', 'Razer', 17, 'images/razer.jpg'),
(15, 'Macbook Air 2018', 'Apple', 7, 'images/macair.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiendaonline`
--

CREATE TABLE `tiendaonline` (
  `id` int(11) NOT NULL,
  `url` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tiendaonline`
--

INSERT INTO `tiendaonline` (`id`, `url`) VALUES
(1, 'https://www.pccomponentes.com/'),
(3, 'https://www.amazon.es/');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiendas`
--

CREATE TABLE `tiendas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `logo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `tipo` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `latitud` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `longitud` varchar(15) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tiendas`
--

INSERT INTO `tiendas` (`id`, `nombre`, `logo`, `tipo`, `latitud`, `longitud`) VALUES
(1, 'PcComponentes', 'images/pccomponentes.jpg', 'online', '40.4053925', '-3.6763777'),
(2, 'El Corte Ingles', 'images/elcorte.jpg', 'fisica', '41.3818', '2.1685'),
(3, 'Amazon', 'images/amazon.png', 'online', '37.3914105', '-5.9591776'),
(4, 'Fnac', 'images/fnac.jpg', 'fisica', '43.2603479', ' -2.9334110');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `formularios`
--
ALTER TABLE `formularios`
  ADD PRIMARY KEY (`correo`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `precios`
--
ALTER TABLE `precios`
  ADD PRIMARY KEY (`id_producto`,`id_tienda`),
  ADD KEY `id_tienda` (`id_tienda`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria` (`categoria`);

--
-- Indices de la tabla `tiendaonline`
--
ALTER TABLE `tiendaonline`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tiendaonline`
--
ALTER TABLE `tiendaonline`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `precios`
--
ALTER TABLE `precios`
  ADD CONSTRAINT `precios_ibfk_1` FOREIGN KEY (`id_tienda`) REFERENCES `tiendas` (`id`),
  ADD CONSTRAINT `precios_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `tiendaonline`
--
ALTER TABLE `tiendaonline`
  ADD CONSTRAINT `tiendaonline_ibfk_1` FOREIGN KEY (`id`) REFERENCES `tiendas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

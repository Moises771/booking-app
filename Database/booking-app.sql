-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 26, 2023 at 11:51 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booking-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `img-url` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `img-url`) VALUES
(21, 'Frescati Sports Center', 'Indoor football facility. ', 920, '/booking-app/assets/uploads/1674663886.jpeg'),
(20, 'Liljeholmshallarna', 'Indoor Football Facility. \r\n\r\nFakta\r\nTyp av service\r\nIdrottsanlÃ¤ggning som bokas\r\nVerksam i\r\nHÃ¤gersten-Ã„lvsjÃ¶\r\nOrganisationsform\r\nKommunal\r\nTillgÃ¤nglighet\r\n\r\nLedarhund och assistanshund vÃ¤lkommen\r\n\r\nToalett med plats fÃ¶r eldriven rullstol\r\n\r\nBemannad reception\r\n\r\nEntrÃ© och entrÃ©hall fÃ¶r rullstolsburen\r\n\r\nParkering fÃ¶r dig med nedsatt rÃ¶relsefÃ¶rmÃ¥ga\r\n\r\nTillgÃ¤nglig hiss', 700, '/booking-app/assets/uploads/1674663521.jpeg'),
(22, 'Eriksdalshallen', 'Indoor football facility. ', 750, '/booking-app/assets/uploads/1674664672.jfif'),
(23, 'HÃ¶gdalshallen', 'Indoor football facility. ', 750, '/booking-app/assets/uploads/1674664827.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text,
  `password-hash` text,
  `role` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password-hash`, `role`) VALUES
(1, 'Moises', '$2y$10$z0EB4AEclYnFnxn8boJYMeJbWzFaI9Hbfkn/CSKoxYAXBAvRaXL/q', 'admin'),
(2, 'mostafa', '$2y$10$eHCbYDJaLiW.yEpExIp.MOkH.5c6VhosBHrwgY6IVro.c9kZQmwWu', 'customer'),
(3, 'mostafa1', '$2y$10$MEKvUIt4.J3eQ3GqX54SduRkU7n2Ccdv7OqCEKf0.f4JpPmCBiHxm', 'customer'),
(10, 'Pablo', '$2y$10$m8rObiupiaTvmiEupKlVC.osqnTYiTYi9vdAHSgVORQlwpwaHSmXq', 'customer'),
(9, 'julianbrb23@gmail.com', NULL, 'customer'),
(8, 'moisesjbarboza@gmail.com', NULL, 'admin'),
(11, 'Pelle ', '$2y$10$/QHbTcqOcpKKh8DNkj1y4./.4mZd1zO8MMFrwTTHm36fHvUspTTDe', 'customer');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

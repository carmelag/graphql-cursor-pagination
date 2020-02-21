-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Server Version: 5.6.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `art-db`
--

-- --------------------------------------------------------

--
-- Structure for the table `artwork`
--

CREATE TABLE `artwork` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `artist` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data Dump for the table  `artwork`
--

INSERT INTO `artwork` (`id`, `title`, `year`, `artist`) VALUES
(1, 'Cafe Terrace on the Place du Forum', 1934, 'Vincent Van Gogh'),
(2, 'Starry Night', 1934, 'Vincent Van Gogh'),
(3, 'Vase With Twelve Sunflowers', 1934, 'Vincent Van Gogh'),
(4, 'Frida and Diego Rivera', 1931, 'Frida Kahlo'),
(5, 'The broken column', 1944, 'Frida Kahlo'),
(6, 'Cat catching a bird', 1939, 'Pablo Picasso'),
(7, 'Guernica', 1937, 'Pablo Picasso'),
(8, 'The girls of Avignon', 1907, 'Gustav Klimt'),
(9, 'Goldfish', 1902, 'Gustav Klimt'),
(10, 'Danae', 1908, 'Gustav Klimt'),
(11, 'The kiss', 1908, 'Gustav Klimt'),
(12, 'The three ages of woman', 1905, 'Gustav Klimt'),
(13, 'Bride with a Fan', 1911, 'Marc Chagall'),
(14, 'Woman with a bouquet', 1910, 'Marc Chagall'),
(15, 'Over the town', 1918, 'Marc Chagall');


--
-- Indexes for the table `artwork`
--
ALTER TABLE `artwork`
  ADD PRIMARY KEY (`id`);



--
-- AUTO_INCREMENT for the table `artwork`
--
ALTER TABLE `artwork`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
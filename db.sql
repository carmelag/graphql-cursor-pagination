-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Feb 18, 2020 alle 18:18
-- Versione del server: 5.6.34
-- Versione PHP: 7.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `art-db`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `artist`
--

CREATE TABLE `artist` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `artMovement` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `artist`
--

INSERT INTO `artist` (`id`, `firstName`, `lastName`, `artMovement`) VALUES
(1, 'Vincent', 'Van Gogh', 'Post-impressionism'),
(2, 'Frida', 'Kahlo', 'Surrealism'),
(3, 'Pablo', 'Picasso', 'Cubism'),
(4, 'Edgar', 'Degas', 'Realism'),
(5, 'Gustav', 'Klimt', 'Surrealism'),
(6, 'Marc', 'Chagall', 'Surrealism'),
(7, 'Andy', 'Wharol', 'Pop art'),
(8, 'George', 'Saurat', 'Pointillism'),
(9, 'Jacques Louis', 'David', 'Neoclassicism');

-- --------------------------------------------------------

--
-- Struttura della tabella `artwork`
--

CREATE TABLE `artwork` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `artistId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `artwork`
--

INSERT INTO `artwork` (`id`, `title`, `year`, `artistId`) VALUES
(1, 'Cafe Terrace on the Place du Forum', 1934, 1),
(2, 'Starry Night', 1934, 1),
(3, 'Vase With Twelve Sunflowers', 1934, 1),
(4, 'Frida and Diego Rivera', 1931, 2),
(5, 'The broken column', 1944, 2),
(6, 'Cat catching a bird', 1939, 3),
(7, 'Guernica', 1937, 3),
(8, 'The girls of Avignon', 1907, 3),
(9, 'Goldfish', 1902, 5),
(10, 'Danae', 1908, 5),
(11, 'The kiss', 1908, 5),
(12, 'The three ages of woman', 1905, 5),
(13, 'Bride with a Fan', 1911, 6),
(14, 'Woman with a bouquet', 1910, 6),
(15, 'Over the town', 1918, 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20200215180402_artarchive.js', 1, '2020-02-16 00:23:42');

-- --------------------------------------------------------

--
-- Struttura della tabella `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `artwork`
--
ALTER TABLE `artwork`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artwork_artistid_foreign` (`artistId`);

--
-- Indici per le tabelle `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `artist`
--
ALTER TABLE `artist`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=235;
--
-- AUTO_INCREMENT per la tabella `artwork`
--
ALTER TABLE `artwork`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=391;
--
-- AUTO_INCREMENT per la tabella `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT per la tabella `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `artwork`
--
ALTER TABLE `artwork`
  ADD CONSTRAINT `artwork_artistid_foreign` FOREIGN KEY (`artistId`) REFERENCES `artist` (`id`);

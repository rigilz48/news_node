-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jun 2023 pada 08.45
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_news_node`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `article`
--

CREATE TABLE `article` (
  `id_article` int(11) NOT NULL,
  `title_article` varchar(255) NOT NULL,
  `content_article` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `article`
--

INSERT INTO `article` (`id_article`, `title_article`, `content_article`, `created_at`, `updated_at`) VALUES
(1, 'Ini Adalah Judul 1', 'Ini adalah isi atau konten 1', '2023-05-31 19:27:50', '2023-05-31 22:19:26'),
(2, 'Ini Adalah Judul 2', 'Ini adalah isi atau konten 2', '2023-05-31 19:29:55', '2023-05-31 19:29:55'),
(3, 'Ini Adalah Judul 3', 'Ini adalah isi atau konten 3', '2023-05-31 19:38:23', '2023-05-31 19:38:23'),
(4, 'Ini Adalah Judul 4', 'messages 4', '2023-05-31 19:50:56', '2023-05-31 19:50:56'),
(5, 'Judul 5', 'ddd', '2023-05-31 19:51:46', '2023-05-31 19:51:46'),
(6, 'Judul 6', 'Isi 6', '2023-05-31 20:01:39', '2023-05-31 20:01:39'),
(7, 'Judul 7 ', 'Isi 7', '2023-05-31 20:02:32', '2023-05-31 20:02:32'),
(8, 'Judul 8 ', 'Isi 8', '2023-05-31 20:03:21', '2023-05-31 22:17:13'),
(9, 'Judul 9', 'Isi 9', '2023-05-31 21:37:55', '2023-05-31 22:18:32'),
(10, 'Judul 10', 'Isi 10', '2023-05-31 22:18:51', '2023-05-31 22:19:35'),
(14, 'Judul 11', 'Isi 11', '2023-06-02 03:21:32', '2023-06-02 03:21:32'),
(16, 'Judul 12', 'Isi 12', '2023-06-06 18:45:59', '2023-06-06 18:45:59'),
(17, 'Judul 13', 'Isi 13', '2023-06-06 18:53:03', '2023-06-06 18:53:03');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `article`
--
ALTER TABLE `article`
  MODIFY `id_article` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

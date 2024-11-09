-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Nov 2024 pada 23.05
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `foto_profils`
--

CREATE TABLE `foto_profils` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user` bigint(20) UNSIGNED DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_10_22_122233_create_skills_table', 1),
(6, '2024_10_22_122303_create_foto_profils_table', 1),
(7, '2024_10_22_122645_create_projeks_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 4, 'username', '0fae76c2e84d44d32e195b7f40da2964d1eff16d5fe78fb430eb910a28b97f11', '[\"*\"]', NULL, NULL, '2024-10-22 07:52:04', '2024-10-22 07:52:04'),
(2, 'App\\Models\\User', 4, 'username', '1d5444a387260057968abd163d9db6f31c759f4aa6ac15698fcc0a4243dd0d34', '[\"*\"]', '2024-10-22 08:10:09', NULL, '2024-10-22 07:52:44', '2024-10-22 08:10:09'),
(3, 'App\\Models\\User', 5, 'username', '086e07279845dcc44bbd157d7e75b878a9b54e40c29c9b9d91f734c8e3c6a489', '[\"*\"]', '2024-10-22 08:12:05', NULL, '2024-10-22 08:11:52', '2024-10-22 08:12:05'),
(4, 'App\\Models\\User', 4, 'username', 'c0290411f9b17dc2fe97317aa37491f69dbcd6b0045a1cee2c379bf6f4e7381d', '[\"*\"]', '2024-11-01 06:27:33', NULL, '2024-10-22 08:12:19', '2024-11-01 06:27:33'),
(5, 'App\\Models\\User', 4, 'username', '6e47d65176be0826174ceba1b4cc149c21f862bcb476a1acbb2988433b4f876d', '[\"*\"]', NULL, NULL, '2024-10-22 08:40:17', '2024-10-22 08:40:17'),
(6, 'App\\Models\\User', 4, 'username', '268b9978a5b35b5dcaf2d2481c038b987036a5733c70b0f09fd272a8826e3e25', '[\"*\"]', NULL, NULL, '2024-10-22 08:40:59', '2024-10-22 08:40:59'),
(7, 'App\\Models\\User', 4, 'username', '5117c91e96600093fd5bed7cea04036a59197bd46295bc5c67bd0d212bb8aefb', '[\"*\"]', NULL, NULL, '2024-10-22 08:41:06', '2024-10-22 08:41:06'),
(8, 'App\\Models\\User', 4, 'username', '97995857105dec1b442a595731b3579c49b628bb254da22cff73fbd6cc8ecfba', '[\"*\"]', NULL, NULL, '2024-10-22 08:55:28', '2024-10-22 08:55:28'),
(17, 'App\\Models\\User', 6, 'username', '4816a6fb07fd0be9b1c30bdab38059ddb86623f5a72bb4a84d871fbf36e32025', '[\"*\"]', NULL, NULL, '2024-11-01 06:07:20', '2024-11-01 06:07:20'),
(18, 'App\\Models\\User', 6, 'username', '1f037f52dd3615a9e360fe4ba887e5d41bac01fe0d92c2c16cce356fa21ec25b', '[\"*\"]', '2024-11-01 15:01:02', NULL, '2024-11-01 06:28:23', '2024-11-01 15:01:02'),
(19, 'App\\Models\\User', 4, 'username', 'f7a1e0225aff6e676f1a5d28eb44d25a9b5a23cea0ffb64ed12ba62e2960c16e', '[\"*\"]', NULL, NULL, '2024-11-01 06:38:46', '2024-11-01 06:38:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `projeks`
--

CREATE TABLE `projeks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user` bigint(20) UNSIGNED DEFAULT NULL,
  `Title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `skills`
--

CREATE TABLE `skills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `skill` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`skill`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `is_admin`, `remember_token`, `created_at`, `updated_at`) VALUES
(4, 'prastya-admin', 'Prastya', 'Ardhi Ramadhan', 'Prastyaar112@gmail.com', NULL, '$2y$10$nsev7jjVqHgVEuLp1EA4j.luiJgf3ulfzQYIRDfiWKs4a6YMHFeIW', 1, NULL, '2024-10-22 07:51:53', '2024-10-22 07:51:53'),
(5, 'prastya-user', 'Prastya', 'Ardhi Ramadhan', 'p@gmail.com', NULL, '$2y$10$jSfa.NI2sApM56ijJvivB.v.je4Q3LErVgEw1HxQ27bKVvmqDkxYa', 0, NULL, '2024-10-22 08:11:42', '2024-10-22 08:11:42'),
(6, 'talitha6', 'Talitha', 'Nasywa', 'talitha6@gmail.com', NULL, '$2y$10$1PaVyWE2kglZCBw3jemgbux6zNbF2bMGTE/x3bz1bGoV8iU2HDiva', 0, NULL, '2024-11-01 06:02:18', '2024-11-01 06:02:18'),
(7, 'talitha61', 'talitha', 'nasywa', 'prastyaar@gmail.com', NULL, '$2y$10$0v89DJ2pHHRV3ZIDOphVaeO41ihZIFOP4Up39eCaJsM0iVVWrcJLe', 0, NULL, '2024-11-01 06:06:31', '2024-11-01 06:06:31');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `foto_profils`
--
ALTER TABLE `foto_profils`
  ADD PRIMARY KEY (`id`),
  ADD KEY `foto_profils_user_foreign` (`user`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `projeks`
--
ALTER TABLE `projeks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projeks_user_foreign` (`user`);

--
-- Indeks untuk tabel `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `skills_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `foto_profils`
--
ALTER TABLE `foto_profils`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `projeks`
--
ALTER TABLE `projeks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `skills`
--
ALTER TABLE `skills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `foto_profils`
--
ALTER TABLE `foto_profils`
  ADD CONSTRAINT `foto_profils_user_foreign` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `projeks`
--
ALTER TABLE `projeks`
  ADD CONSTRAINT `projeks_user_foreign` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `skills_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

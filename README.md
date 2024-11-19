# 🚀 Login-Apps

Login-Apps adalah aplikasi sederhana yang menyediakan fitur login dan pendaftaran. Proyek ini menggunakan **React.js** untuk frontend, **Laravel** untuk backend, dan **MySQL** sebagai database, semua dikemas dalam **Docker** untuk memudahkan deployment.

## 🌟 Fitur
- **Autentikasi pengguna**: Login, Signup, dan Logout.
- **Manajemen Admin**: Hanya admin yang dapat mengelola data.
- **Live Chat** *(Coming Soon)*.
- **Dockerized**: Mudah untuk diinstal dan dijalankan.

## ⚙️ Required

### 1. Git 
Git diperlukan untuk meng-clone repository ini. Gunakan perintah berikut untuk menginstalnya:

```bash
sudo apt update
sudo apt install git
git --version
```

## 🐳 Docker
   `sudo apt install apt-transport-https ca-certificates curl software-properties-common`

   `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg -y`
 
   `echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`

   `sudo apt update`

   `apt-cache policy docker-ce`

   `sudo apt install docker-ce`

   `sudo systemctl status docker`

   `sudo usermod -aG docker ${USER}`
 
   `docker info`

**Catatan:** Setelah menambahkan pengguna ke grup Docker, pastikan untuk **logout dan login kembali** agar perubahan grup berlaku.
💻 Copyright © 2024 [Dea Afrizal](https://github.com/deaafrizal). 

## 🛠️ Instalasi

1. **Clone repository ini** ke komputer Anda:
   ```bash
   $ git clone https://github.com/prastya-dev/Login-Apps
   ```

2. **Masuk ke folder proyek**:
   ```bash
   $ cd Login-Apps
   ```

3. **Jalankan aplikasi dengan Docker**:
   ```bash
   $ docker compose up
   ```

4. **Akses aplikasi**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:9000](http://localhost:9000)

## 🐳 Docker Services
- **Frontend**: React.js, port `3000`
- **Backend**: Laravel REST API, port `9000`
- **Database**: MySQL 5.7

## 📂 Struktur Proyek
```
Login-Apps/
├── FrontEnd/    # React.js (Frontend)
├── BackEnd/     # Laravel (Backend)
├── docker-compose.yml
└── README.md
```

## 🤝 Kontribusi
Kami menyambut kontribusi dari siapa saja! Jangan ragu untuk mengajukan **pull request** atau melaporkan **issues**.

## 🚀 Resource:

Laravel - Framework PHP untuk backend.
React.js - Library JavaScript untuk membangun antarmuka pengguna.
Tailwind CSS - Framework CSS untuk styling.
MySQL - Sistem manajemen basis data relasional.
Docker - Platform untuk pengembangan, pengiriman, dan menjalankan aplikasi dalam container.

---

⭐ **Jangan lupa untuk memberi bintang pada repository ini jika Anda merasa terbantu!** ⭐
```

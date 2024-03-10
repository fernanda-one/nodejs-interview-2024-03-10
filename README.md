
---

# Node Test Interview

Project ini adalah aplikasi backend yang menggunakan Node.js. Aplikasi ini membutuhkan MariaDB sebagai database dan RabbitMQ untuk message queuing. Ikuti langkah-langkah di bawah ini untuk mengatur dan menjalankan aplikasi di lingkungan lokal Anda.

## Persyaratan

Sebelum Anda memulai, pastikan Anda telah menginstal:

- Node.js (Versi 18 atau lebih baru)
- Yarn (Opsional, jika Anda menggunakan npm, abaikan perintah yang berkaitan dengan Yarn)
- MariaDB
- RabbitMQ

## Pengaturan Awal

1. **Konfigurasi Lingkungan**

    Duplikat file `.env.example` dan ubah namanya menjadi `.env`. Sesuaikan variabel-variabel lingkungan di dalam file `.env` sesuai dengan konfigurasi MariaDB dan RabbitMQ Anda:

    ```plaintext
    PORT=5000
    DATABASE_URL="mysql://root:root@localhost:3306/test"
    SECRET_JWT="secret"
    REDITMQ_URL='amqp://root:root@localhost:5672'
    ```

2. **Instalasi Dependensi**

    Buka terminal di root proyek dan jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

    ```bash
    npm install
    ```

    atau jika Anda menggunakan Yarn:

    ```bash
    yarn install
    ```

3. **Pengaturan Database**

    Gunakan Prisma untuk mendorong skema database ke MariaDB Anda:

    ```bash
    npx prisma db push
    ```

4. **Menjalankan Aplikasi**

    Untuk menjalankan aplikasi di mode pengembangan, gunakan perintah berikut:

    ```bash
    npm run dev
    ```

    atau jika Anda menggunakan Yarn:

    ```bash
    yarn dev
    ```

    Aplikasi sekarang harus berjalan dan mendengarkan pada port yang ditentukan di file `.env`.

## Dokumentasi API

Untuk melihat dan menguji endpoint API, Anda dapat menemukan koleksi Postman di folder `doc`. Import file koleksi tersebut ke dalam aplikasi Postman Anda untuk mulai menguji API.


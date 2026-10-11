# N.A.K — Katalog Tanaman Herbal

Website katalog tanaman herbal berbasis HTML, CSS, dan JavaScript murni. Tidak memerlukan framework atau proses build.

## Fitur
- Katalog 12 tanaman contoh, foto, kategori, dan pencarian.
- Modal detail berisi nama ilmiah, deskripsi, ciri, penggunaan tradisional, cara pemanfaatan, serta catatan keamanan.
- Responsif untuk HP, tablet, dan desktop.
- QR Code otomatis berdasarkan URL aktif dan tombol unduh PNG.
- Tidak menggunakan database; data tanaman berada di `assets/js/app.js`.

## Struktur folder

```text
nak-website/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

## Menjalankan secara lokal
1. Ekstrak ZIP.
2. Buka folder `nak-website`.
3. Buka `index.html` di browser. Sebagian fitur tampil lokal, tetapi QR publik baru aktif setelah website memiliki URL HTTPS.
4. Koneksi internet diperlukan untuk memuat foto eksternal, Google Fonts, dan pustaka QRCode.js.

## Publikasi gratis dengan GitHub Pages
1. Buat akun atau masuk di https://github.com/.
2. Buat repository baru, misalnya `nak-website`.
3. Upload `index.html`, `README.md`, dan folder `assets` ke root repository. Pastikan bukan mengunggah folder ZIP saja.
4. Buka **Settings → Pages**.
5. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
7. Tunggu proses publikasi selesai. URL biasanya berbentuk `https://USERNAME.github.io/nak-website/`. Gunakan URL persis yang ditampilkan GitHub Pages.
8. Buka URL tersebut di browser. Gulir ke bagian **Bagikan Katalog / QR Code**. QR akan dibuat dari URL aktif.
9. Tekan **Unduh QR Code**, lalu pindai dengan kamera HP lain untuk menguji aksesnya.

## Catatan penting untuk QR Code
- Jangan membuat QR dari alamat `file:///...` atau alamat localhost.
- Buat QR setelah hosting aktif, dari URL HTTPS publik.
- Jika URL repository/hosting berubah, buat QR baru dan ganti QR yang sudah dicetak.
- Pengunjung perlu koneksi internet untuk membuka website dan memuat foto eksternal.

## Menambah atau mengubah data tanaman
Buka `assets/js/app.js` dan edit array `plants`. Setiap tanaman memiliki properti `id`, `name`, `latin`, `category`, `image`, `short`, `description`, `parts`, `traits`, `uses`, `how`, dan `safety`. `image` harus berupa URL gambar yang dapat diakses publik atau URL aset gambar yang ditambahkan ke proyek.

## Catatan konten
Informasi di contoh ini bersifat edukasi umum, bukan diagnosis atau rekomendasi pengobatan. Tinjau sumber kesehatan tepercaya sebelum menerbitkan klaim medis. Ganti atau tambahkan referensi yang kredibel jika website digunakan untuk tugas akademik atau layanan publik.


**Nama website:** N.A.K  
**Pembuat:** Nawwaf Alifah Kamilah

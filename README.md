# Description

Jika kamu sudah membaca tentang ["The Orchestrator"](https://github.com/devetek/the-orchestrator?tab=readme-ov-file#description), maka ini adalah lanjutan dimana ide tersebut dapat diimplementasikan. Ini adalah microservice pertama yang di release, dengan nama `devetek/micro-frontend-2`. Karena percobaan pertama menggunakan Remix belum terselesaikan.

## Cara Kerja

Untuk dapat menyatu dengan "The Orchestrator", aplikasi dengan basis vite ini perlu dipastikan mengexpose file manifest. Cek di file `vite.config.ts` dan `package.json` untuk melihat konfigurasi yang digunakan. Dengan hasil dimana terdapat file manifest.json yang dapat diakses secara public dari hasil build.

Selanjutnya, lihat konfigurasi di `src/main.tsx` pastikan aplikasi ini dapat berjalan di 2 kondisi. Sebagai sub aplikasi dan sebagai main aplikasi.
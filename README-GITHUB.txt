ZyroDevv Cloud - GitHub Pages Version

File ini khusus untuk upload ke GitHub Pages.

Isi root repo harus seperti ini:
- index.html
- CNAME
- assets/style.css
- assets/script.js

Cara deploy:
1. Buat repository baru di GitHub, contoh: zyrodevv-cloud
2. Upload semua file/folder dari ZIP ini ke repository. Jangan upload folder ZIP-nya, upload isinya.
3. Buka Settings > Pages.
4. Source: Deploy from a branch. Branch: main. Folder: /root. Save.
5. Di bagian Custom domain, isi: zyrodevv.web.id lalu Save.
6. Di DNS domain zyrodevv.web.id, buat 4 record A untuk host @:
   A @ 185.199.108.153
   A @ 185.199.109.153
   A @ 185.199.110.153
   A @ 185.199.111.153
7. Opsional untuk www:
   CNAME www USERNAME_GITHUB.github.io
   Ganti USERNAME_GITHUB sesuai username GitHub kamu.
8. Tunggu propagasi DNS maksimal 24 jam, lalu aktifkan Enforce HTTPS kalau sudah tersedia.

Edit link tombol:
- Buka assets/script.js
- Ubah PANEL_URL, ORDER_URL, CHANNEL_URL, DOCS_URL

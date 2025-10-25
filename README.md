# Irito — Dark Minimal Blog (static)

Static site ready for GitHub Pages.

## Cara deploy ke GitHub Pages
1. Buat repository baru di GitHub.
2. Copy seluruh file dan folder ke repo (index.html, blog.html, about.html, contact.html, css/, js/).
3. Commit & push.
4. Di GitHub → Settings → Pages: pilih branch `main` (atau `gh-pages`) dan folder `/ (root)`, lalu Save.
5. Tunggu GitHub deploy (beberapa menit). Situs akan tersedia di `https://yourusername.github.io/yourrepo`.

## Kustomisasi cepat
- Edit teks di HTML (hero, posts, about).
- Tambah post baru: copy `post-example.html` dan ganti konten, lalu tautkan dari `blog.html`.
- Untuk integrasi CMS/Git-based build, pertimbangkan Jekyll / Eleventy / Hugo.

const startScreen = document.getElementById('start-screen');
const rickImage = document.getElementById('rick-image');
const rickAudio = document.getElementById('rick-audio');

// PERSIAPAN FILE: Pastikan 3 file ini ada di folder yang sama dengan kodemu
const fileAudio = 'kicau-mania.ogg';          // File lagu
const fileGifBergerak = 'kicau.gif';    // File GIF animasi
const fileGambarDiam = 'image.png';    // Screenshot satu frame dari GIF untuk efek "stop"

// 1. Eksekusi saat layar pancingan di-tap
startScreen.addEventListener('click', () => {
    startScreen.style.display = 'none'; // Buang layar pancingan
    rickImage.style.display = 'block';  // Tampilkan gambar
    playRickRoll();
});

// 2. Fungsi utama untuk memainkan meme
function playRickRoll() {
    rickImage.src = fileGifBergerak; // Ubah gambar ke mode animasi (GIF)
    rickAudio.currentTime = 0;       // Reset lagu ke detik 0
    rickAudio.play();                // Putar lagu
}

// 3. Behavior saat lagu selesai (ended)
rickAudio.addEventListener('ended', () => {
    rickImage.src = fileGambarDiam;  // Ganti GIF ke gambar diam agar terlihat "berhenti"
});

// 4. Behavior saat layar di-tap lagi ketika GIF sudah berhenti
rickImage.addEventListener('click', () => {
    // Cek apakah audio sedang berhenti/paused. 
    // Jika iya, jalankan fungsi playRickRoll() lagi.
    if (rickAudio.paused) {
        playRickRoll();
    }
});
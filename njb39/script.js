function tampilkanJam() {
    let sekarang = new Date();

    let hariAngka = sekarang.getDay();
    let tanggal = sekarang.getDate();
    let bulanAngka = sekarang.getMonth();
    let tahun = sekarang.getFullYear();

    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    // Format 2 digit agar tetap rapi
    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    // Nama hari masehi
    const daftarHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let hari = daftarHari[hariAngka];

    // Nama bulan masehi
    const daftarBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    let bulan = daftarBulan[bulanAngka];

    // Logika Pasaran Jawa
    // 1 Januari 1970 adalah Kamis Wage
    let pasaran = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"];
    let epoch = new Date(1970, 0, 1);
    let selisihHari = Math.floor((sekarang - epoch) / (1000 * 60 * 60 * 24));
    let indeksPasaran = selisihHari % 5;

    // Tampilkan Tanggal & Pasaran
    document.getElementById("tanggal").innerHTML = 
        `${hari} ${pasaran[indeksPasaran]}, ${tanggal} ${bulan} ${tahun}`;

    // Tampilkan Jam dengan efek titik dua berkedip
    document.getElementById("jam").innerHTML = 
        `${jam}<span class='kedip'>:</span>${menit}<span class='kedip'>:</span>${detik}`;
}

// Jalankan setiap 1 detik
setInterval(tampilkanJam, 1000);

// Panggil fungsi segera saat halaman dimuat
tampilkanJam();
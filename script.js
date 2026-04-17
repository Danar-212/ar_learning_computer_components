const data = {

mouse:{
judul:"Mouse",
gambar:"img/mouse.jpg",
deskripsi:"Mouse merupakan perangkat keras input pada komputer yang digunakan untuk menggerakkan kursor pada layar monitor. Dengan mouse pengguna dapat melakukan berbagai tindakan seperti klik, drag, scroll, dan memilih objek pada layar. Mouse biasanya memiliki dua tombol utama yaitu klik kiri dan klik kanan serta roda scroll di tengah. Mouse modern menggunakan sensor optik atau laser untuk mendeteksi gerakan dan dapat terhubung melalui kabel USB maupun secara nirkabel menggunakan teknologi wireless atau bluetooth.",
ar:"https://asblr.com/DQ1qNF"
},

motherboard:{
judul:"Motherboard",
gambar:"img/motherboard.jpg",
deskripsi:"Motherboard adalah papan sirkuit utama dalam sebuah komputer yang berfungsi sebagai tempat terpasangnya berbagai komponen penting seperti processor, RAM, kartu grafis, dan perangkat penyimpanan. Motherboard juga menyediakan jalur komunikasi yang memungkinkan semua komponen komputer saling terhubung dan bekerja bersama. Selain itu motherboard memiliki berbagai port seperti USB, LAN, audio, dan slot ekspansi yang memungkinkan penambahan perangkat keras lainnya.",
ar:"https://asblr.com/X1VjU0"
},

keyboard:{
judul:"Keyboard",
gambar:"img/keyboard.jpg",
deskripsi:"Keyboard adalah perangkat input yang digunakan untuk memasukkan data berupa huruf, angka, simbol, dan perintah ke dalam komputer. Keyboard terdiri dari berbagai tombol seperti tombol huruf, tombol angka, tombol fungsi, serta tombol kontrol seperti Ctrl, Alt, dan Shift. Keyboard sangat penting dalam proses pengolahan data karena digunakan untuk mengetik dokumen, menjalankan perintah sistem, serta berinteraksi dengan berbagai aplikasi komputer.",
ar:"https://asblr.com/Db3GXY"
},

ram:{
judul:"RAM",
gambar:"img/ram.jpg",
deskripsi:"RAM (Random Access Memory) merupakan memori utama komputer yang berfungsi menyimpan data dan instruksi program secara sementara saat komputer sedang digunakan. Data yang tersimpan di RAM dapat diakses dengan sangat cepat oleh processor sehingga membantu meningkatkan kinerja komputer. Namun data pada RAM akan hilang ketika komputer dimatikan karena sifatnya yang sementara.",
ar:"https://asblr.com/SWJUq1"
},

ssd:{
judul:"SSD (Solid State Drive)",
gambar:"img/ssd.jpg",
deskripsi:"SSD adalah perangkat penyimpanan data yang menggunakan teknologi memori flash untuk menyimpan informasi secara permanen. Dibandingkan dengan HDD, SSD memiliki kecepatan baca dan tulis yang jauh lebih cepat sehingga dapat meningkatkan performa komputer terutama saat proses booting sistem operasi dan membuka aplikasi.",
ar:"https://asblr.com/LMuTLI"
},

hdd:{
judul:"HDD (Hard Disk Drive)",
gambar:"img/hdd.jpg",
deskripsi:"HDD adalah perangkat penyimpanan data yang menggunakan piringan magnetik berputar untuk menyimpan dan membaca data. HDD biasanya memiliki kapasitas penyimpanan yang besar dan sering digunakan untuk menyimpan sistem operasi, aplikasi, serta berbagai file pengguna seperti dokumen, gambar, dan video.",
ar:"https://asblr.com/zAKqUX"
},

gpu:{
judul:"GPU (Graphics Processing Unit)",
gambar:"img/gpu.jpg",
deskripsi:"GPU adalah komponen komputer yang berfungsi untuk mengolah dan memproses data grafis sehingga dapat ditampilkan pada layar monitor. GPU sangat penting dalam aplikasi yang membutuhkan pemrosesan grafis tinggi seperti game, desain grafis, animasi 3D, dan video editing. GPU biasanya terpasang pada motherboard melalui slot PCI Express.",
ar:"https://asblr.com/ytHK4T"
},

monitor:{
judul:"Monitor",
gambar:"img/monitor.jpg",
deskripsi:"Monitor komputer adalah perangkat keras yang menampilkan data, teks, gambar, atau video dari komputer secara visual. Berbagai jenis monitor, seperti LED dan IPS, hadir dalam ukuran (19 hingga 32 inci) dan resolusi berbeda untuk produktivitas, gaming, maupun editing, dengan opsi port seperti HDMI, DisplayPort, atau USB-C",
ar:"https://asblr.com/xcmAR2"
},

processor:{
judul:"Processor (CPU)",
gambar:"img/processor.jpg",
deskripsi:"Processor atau CPU (Central Processing Unit) adalah komponen utama dalam komputer yang berfungsi sebagai pusat pengolahan data dan instruksi. Processor menjalankan berbagai perintah dari program dan sistem operasi serta mengendalikan kerja seluruh komponen komputer lainnya. Kinerja komputer sangat dipengaruhi oleh kecepatan dan jumlah inti yang dimiliki oleh processor.",
ar:"https://asblr.com/R1vIX5"
}

};


// membaca parameter url
const urlParams = new URLSearchParams(window.location.search);
const komponen = urlParams.get("komponen");

if(komponen && data[komponen]){
document.getElementById("judul").textContent=data[komponen].judul;
document.getElementById("gambar").src=data[komponen].gambar;
document.getElementById("deskripsi").textContent=data[komponen].deskripsi;
document.getElementById("linkAR").href=data[komponen].ar;
}

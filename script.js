const data = {

mouse:{
judul:"Mouse",
gambar:"img/mouse.jpg",
deskripsi:"Mouse merupakan perangkat keras komputer yang digunakan untuk menggerakkan pointer atau kursor pada layar. Mouse umumnya memiliki tombol klik kiri dan kanan serta roda scroll untuk menggulung tampilan layar ke atas atau ke bawah. Selain itu, mouse dapat digunakan untuk melakukan drag and drop, yaitu memindahkan suatu elemen, berkas, atau file dengan menekan dan menahan tombol kiri mouse, kemudian menyeretnya ke lokasi yang diinginkan.

Sumber: Kusmadi, I. Badrudin, B. L. Putra, & W. E. Cuntaka. (2022). Informatika untuk SMK/MAK Kelas X Semester 1. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.",
ar:"https://asblr.com/DQ1qNF"
},

motherboard:{
judul:"Motherboard",
gambar:"img/motherboard.jpg",
deskripsi:"Motherboard adalah saraf pusat dalam system komputer. Motherboard juga dapat terbagi sebagai single prosesor atau dual prosesor. Motherboard juga biasa dikenal sebagai papan utama (main board). Sistem yang terhubung dalam computer dikontrol dan dikendalikan oleh motherboard untuk berkomunikasi dengan perangkat atau piranti lainnya dalam sebuah sistem komputer 

Sumber: Kusmadi, I. Badrudin, B. L. Putra, & W. E. Cuntaka. (2022). Informatika untuk SMK/MAK Kelas X Semester 1. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.",
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

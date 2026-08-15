const sumber = `
    <p><strong>Sumber:</strong> Kusmadi, I. Badrudin, B. L. Putra, & W. E. Cuntaka. (2022).
    <i>Informatika untuk SMK/MAK Kelas X Semester 1</i>.
    Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.</p>
`;

const data = {

    mouse: {
        judul: "Mouse",
        gambar: "img/mouse.jpg",
        deskripsi: `
            <p>Mouse merupakan perangkat keras komputer yang digunakan untuk menggerakkan pointer atau kursor pada layar. Mouse umumnya memiliki tombol klik kiri dan kanan serta roda <i>scroll</i> untuk menggulung tampilan layar ke atas atau ke bawah. Selain itu, mouse dapat digunakan untuk melakukan <i>drag and drop</i>, yaitu memindahkan suatu elemen, berkas, atau file ke lokasi yang diinginkan.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/DQ1qNF"
    },

    motherboard: {
        judul: "Motherboard",
        gambar: "img/motherboard.jpg",
        deskripsi: `
            <p>Motherboard atau papan utama merupakan komponen penting dalam sistem komputer yang berfungsi sebagai tempat terhubungnya berbagai komponen komputer. Motherboard memungkinkan komponen seperti prosesor, RAM, media penyimpanan, dan perangkat lainnya dapat saling berkomunikasi dan bekerja sebagai satu kesatuan sistem.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/X1VjU0"
    },

    keyboard: {
        judul: "Keyboard",
        gambar: "img/keyboard.jpg",
        deskripsi: `
            <p>Keyboard atau papan ketik merupakan perangkat masukan (<i>input</i>) yang digunakan untuk memasukkan huruf, angka, karakter khusus, serta memberikan berbagai perintah kepada komputer. Keyboard juga dapat digunakan untuk menjalankan perintah tertentu melalui kombinasi tombol atau <i>shortcut</i>.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/Db3GXY"
    },

    ram: {
        judul: "Random Access Memory (RAM)",
        gambar: "img/ram.jpg",
        deskripsi: `
            <p>Random Access Memory (RAM) merupakan memori sementara yang digunakan untuk menyimpan sistem operasi, program aplikasi, dan data yang sedang digunakan oleh komputer. RAM membantu prosesor mengakses data dengan lebih cepat sehingga dapat mendukung kinerja komputer. Data yang tersimpan di dalam RAM akan hilang ketika komputer dimatikan.</p>
            <p>Kapasitas RAM dapat memengaruhi kemampuan komputer dalam menjalankan berbagai program. Semakin besar kapasitas RAM, semakin banyak data dan program yang dapat ditampung sementara.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/SWJUq1"
    },

    ssd: {
        judul: "SSD (Solid State Drive)",
        gambar: "img/ssd.jpg",
        deskripsi: `
            <p>Solid State Drive (SSD) merupakan perangkat penyimpanan data yang menggunakan semikonduktor dan tidak memiliki komponen bergerak. Kondisi tersebut membuat SSD mampu bekerja lebih cepat dan memiliki risiko kerusakan mekanis yang lebih rendah dibandingkan penyimpanan yang menggunakan komponen bergerak.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/LMuTLI"
    },

    hdd: {
        judul: "HDD (Hard Disk Drive)",
        gambar: "img/hdd.jpg",
        deskripsi: `
            <p>Hard Disk Drive (HDD) merupakan perangkat penyimpanan data yang menggunakan piringan magnetik berputar untuk menyimpan dan membaca data. HDD dapat digunakan untuk menyimpan sistem operasi, aplikasi, dokumen, gambar, video, dan berbagai jenis file lainnya.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/zAKqUX"
    },

    gpu: {
        judul: "GPU (Graphics Processing Unit)",
        gambar: "img/gpu.jpg",
        deskripsi: `
            <p>Graphics Processing Unit (GPU) merupakan komponen komputer yang berfungsi mengolah dan memproses data grafis agar dapat ditampilkan pada layar monitor. GPU berperan penting dalam aplikasi yang membutuhkan pemrosesan grafis seperti permainan, desain grafis, animasi 3D, dan pengeditan video.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/ytHK4T"
    },

    monitor: {
        judul: "Monitor",
        gambar: "img/monitor.jpg",
        deskripsi: `
            <p>Monitor merupakan perangkat keluaran (<i>output</i>) yang digunakan untuk menampilkan hasil pengolahan data komputer dalam bentuk gambar, teks, atau informasi visual lainnya. Monitor memiliki berbagai ukuran, jenis, dan karakteristik yang dapat disesuaikan dengan kebutuhan pengguna.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/xcmAR2"
    },

    processor: {
        judul: "Processor (CPU)",
        gambar: "img/processor.jpg",
        deskripsi: `
            <p>Central Processing Unit (CPU) atau prosesor merupakan komponen yang berfungsi sebagai pusat pengolahan data dalam komputer. CPU sering diibaratkan sebagai otak komputer karena bertugas menjalankan instruksi dan mengolah data.</p>
            <p>CPU memiliki komponen utama seperti Unit Kontrol (<i>Control Unit</i>) dan <i>Arithmetic Logic Unit</i> (ALU) yang bekerja dalam menjalankan proses pengolahan data.</p>
            ${sumber}
        `,
        ar: "https://asblr.com/R1vIX5"
    }

};


// Mengambil nama komponen dari URL
const urlParams = new URLSearchParams(window.location.search);
const komponen = urlParams.get("komponen");


// Menampilkan data komponen
if (komponen && data[komponen]) {

    const item = data[komponen];

    document.getElementById("judul").textContent = item.judul;

    document.getElementById("gambar").src = item.gambar;
    document.getElementById("gambar").alt = item.judul;

    // innerHTML digunakan agar paragraf dan tulisan miring dapat tampil
    document.getElementById("deskripsi").innerHTML = item.deskripsi;

    document.getElementById("linkAR").href = item.ar;
    document.getElementById("linkAR").target = "_blank";

}

const texts = [
    "Rekayasa Perangkat Lunak"
]; // Teks yang ingin ditampilkan
const subTexts = [
    "Bersama Kita Bersatu",
    "Bersatu Kita Bersama"
]; // Sub-teks yang ingin ditampilkan
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("animated-text").innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                textIndex++;
                charIndex = 0;
                document.getElementById("animated-text").innerHTML += "<br>";
                typeText();
            }, 1000);
        }
    } else {
        // Tampilkan sub-teks setelah semua teks utama selesai
        typeSubText(0); // Mulai mengetik sub-teks
    }
}

function typeSubText(index) {
    if (index < subTexts.length) {
        let charIndex = 0;
        function type() {
            if (charIndex < subTexts[index].length) {
                document.getElementById(`sub-text-${index + 1}`).innerHTML += subTexts[index].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(() => typeSubText(index + 1), 1000); // Tunggu sebelum mengetik sub-teks berikutnya
            }
        }
        type();
    }
}

function showContent(contentType) {
    const contentDescription = document.getElementById('content-description');
    
    switch(contentType) {
        case 'html':
            contentDescription.innerHTML = 'HTML adalah singkatan dari Hypertext Markup Language, HTML merupakan salah satu bahasa pengkodean atau pemograman yang digunakan untuk membuat halaman website yang ditampilkan pada web browser.';
            break;
        case 'css':
            contentDescription.innerHTML = 'CSS merupakan singkatan dari Cascading Style Sheets, CSS digunakan untuk menentukan gaya dari tampilan website yang akan kamu buat seperti tata letak halaman, warna , dan font. Semuanya dapat ditentukan oleh CSS, CSS bertujuan agar website terlihat lebih menarik.';
            break;
        case 'php':
            contentDescription.innerHTML = 'PHP (Hypertext Preprocessor) adalah bahasa pemrograman open-source yang umumnya digunakan untuk membangun aplikasi web dinamis dan interaktif. PHP dapat dijalankan pada server web dan dikombinasikan dengan HTML, CSS, dan JavaScript untuk membuat halaman web yang dinamis.';
            break;
        case 'python':
            contentDescription.innerHTML = 'Python adalah bahasa pemrograman back-end. Web developer bisa menggunakan kode Python untuk mentransfer data ke dan dari server, berinteraksi dengan database, dan mengelola keamanan situs. Ada banyak framework Python yang sering digunakan dalam web development, termasuk: Django.';
            break;
        case 'java':
            contentDescription.innerHTML = 'Java adalah bahasa pemrograman populer yang multiplatform dan berorientasi-objek. Java dapat digunakan sebagai platform lewat Java virtual machine (JVM), yang dapat diinstal di sebagian besar komputer dan perangkat seluler.';
            break;
        default:
            contentDescription.innerHTML = 'Pilih tutorial untuk melihat penjelasan.';
    }
}

window.onload = typeText;
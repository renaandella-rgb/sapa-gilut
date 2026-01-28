/* ===============================
   FADE ANIMATION ON SCROLL
================================ */
const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight - 100;

  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerPoint) {
      el.classList.add('show');
    }
  });
});


/* ===============================
   HAMBURGER MENU
================================ */
const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  mobileMenu.classList.toggle("show");
}

/* TUTUP MENU JIKA KLIK DI LUAR */
document.addEventListener("click", function (e) {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.classList.remove("show");
  }
});


/* ===============================
   MATERI CARD (EXPAND / COLLAPSE)
================================ */
function toggleMateri(card) {
  card.classList.toggle('active');
}


/* ===============================
   TARIF POPUP
================================ */
const btnTarif = document.getElementById('btnTarif');
const tarifBox = document.getElementById('tarifBox');

if (btnTarif && tarifBox) {

  btnTarif.addEventListener('click', (e) => {
    e.stopPropagation();
    tarifBox.classList.toggle('active');
  });

  tarifBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.addEventListener('click', () => {
    tarifBox.classList.remove('active');
  });

}

function toggleMateri(card){
  card.classList.toggle("active");
}

function togglePdf(event){
  event.stopPropagation(); // biar card tidak ikut nutup
  const pdf = event.target.nextElementSibling;
  pdf.classList.toggle("active");
}

function toggleMateri(card){
  card.classList.toggle("active");
}

function openPdf(event, src){
  event.stopPropagation();
  document.getElementById("pdfViewer").src = src;
  document.getElementById("pdfOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePdf(){
  document.getElementById("pdfOverlay").classList.remove("active");
  document.getElementById("pdfViewer").src = "";
  document.body.style.overflow = "";
}

function openVideo(event, url) {
  event.stopPropagation();
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  frame.src = url + "?autoplay=1";
  modal.classList.add("show");
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  modal.classList.remove("show");
  frame.src = ""; // stop video
}

window.addEventListener('load', () => {
  // Tambah efek delay agar animasi terlihat
  setTimeout(() => {
    const loader = document.getElementById('loading');
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => loader.style.display = 'none', 500);
  }, 1000); // loading tampil minimal 1 detik
});
const csBtn = document.getElementById("csBtn");
const csPanel = document.getElementById("csPanel");
const form = document.getElementById("feedbackForm");
const successMsg = document.getElementById("successMsg");

// Toggle panel saat klik tombol headset
csBtn.addEventListener("click", () => {
    csPanel.classList.toggle("active");
});

// ===============================
// GOOGLE FORM
const FORM_URL =
"https://docs.google.com/forms/d/e/1FAIpQLSdA1fH_-YgkF-Z3sjJ8d7Ms5yCt1qmse4wQ8ZyFrsRLx3eUaw/formResponse";

const ENTRY_NAMA = "entry.1570316407";
const ENTRY_PESAN = "entry.1097598092";

// Submit form
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = form.nama.value.trim();
    const pesan = form.pesan.value.trim();

    if (!nama || !pesan) {
        alert("Nama dan Saran/Kritik wajib diisi!");
        return;
    }

    const data = new URLSearchParams();
    data.append(ENTRY_NAMA, nama);
    data.append(ENTRY_PESAN, pesan);

    fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString()
    });

    form.reset();
    successMsg.style.display = "block";

    setTimeout(() => {
        successMsg.style.display = "none";
        csPanel.classList.remove("active");
    }, 3000);
});

// ===============================
// CLOSE PANEL SAAT KLIK DI LUAR PANEL
document.addEventListener("click", function(e) {
    // Jika panel aktif, dan klik bukan di panel atau tombol csBtn
    if (
        csPanel.classList.contains("active") &&
        !csPanel.contains(e.target) &&
        !csBtn.contains(e.target)
    ) {
        csPanel.classList.remove("active");
    }
});

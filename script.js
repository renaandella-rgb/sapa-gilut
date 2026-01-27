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

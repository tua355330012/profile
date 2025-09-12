  const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("data-section");

        sections.forEach(sec => {
          sec.classList.remove("active", "show");
        });

        const targetSection = document.getElementById(target);
        targetSection.classList.add("active");
        setTimeout(() => targetSection.classList.add("show"), 50);

        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
    
    window.addEventListener("load", () => {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 600);
    });

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const navItems = document.querySelectorAll(".nav-links a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.style.display = navLinks.classList.contains("active") ? "block" : "none";
});

overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.style.display = "none";
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    burger.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.style.display = "none";
  });
});

    const emailModal = document.getElementById("emailModal");
    const openEmail = document.getElementById("openEmailModal");
    const closeEmail = emailModal.querySelector(".close");

    openEmail.onclick = () => { emailModal.style.display = "flex"; }
    closeEmail.onclick = () => { emailModal.style.display = "none"; }
    window.onclick = (event) => {
      if (event.target === emailModal) emailModal.style.display = "none";
    }

    const phoneModal = document.getElementById("phoneModal");
const openPhone = document.getElementById("openPhone");
const closePhone = phoneModal.querySelector(".close");


function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

openPhone.onclick = () => {
  if (isMobileDevice()) {

    window.location.href = "tel:+66824420838";
  } else {

    phoneModal.style.display = "flex";
  }
}

closePhone.onclick = () => { phoneModal.style.display = "none"; }
window.onclick = (event) => {
  if (event.target === phoneModal) phoneModal.style.display = "none";
}


const langBtn = document.getElementById("switchLang");
let currentLang = localStorage.getItem("lang") || "TH";

function applyLanguage(lang) {
  const thaiTexts = document.querySelectorAll("[data-th]");
  const engTexts = document.querySelectorAll("[data-en]");

  if (lang === "EN") {
    thaiTexts.forEach(el => el.style.display = "none");
    engTexts.forEach(el => el.style.display = "inline");
    langBtn.textContent = "TH";
    currentLang = "EN";
  } else {
    thaiTexts.forEach(el => el.style.display = "inline");
    engTexts.forEach(el => el.style.display = "none");
    langBtn.textContent = "EN";
    currentLang = "TH";
  }

  localStorage.setItem("lang", currentLang);
}

function switchLanguage() {
  if (currentLang === "TH") {
    applyLanguage("EN");
  } else {
    applyLanguage("TH");
  }
}

langBtn.addEventListener("click", switchLanguage);

window.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
});

function setLanguage(lang) {
  document.querySelectorAll('[data-th], [data-en]').forEach(el => {
    el.style.display = "none";
  });

  document.querySelectorAll(`[data-${lang}]`).forEach(el => {

    if (el.closest('h1') || el.closest('h2')) {
      el.style.display = "block";
    } else {
      el.style.display = "inline";
    }
  });

  localStorage.setItem("lang", lang);
}
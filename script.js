const slides = Array.from(document.querySelectorAll(".slide"));
const progressBar = document.querySelector("#progressBar");
const slideCount = document.querySelector("#slideCount");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let current = 0;

function showSlide(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === current);
    slide.setAttribute("aria-hidden", String(slideIndex !== current));
  });

  const progress = ((current + 1) / slides.length) * 100;
  progressBar.style.width = `${progress}%`;
  slideCount.textContent = `${current + 1} / ${slides.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  document.title = `${slides[current].dataset.title}｜系統流程開發五階段簡報`;
}

function nextSlide() {
  showSlide(current + 1);
}

function prevSlide() {
  showSlide(current - 1);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

document.addEventListener("keydown", (event) => {
  const forwardKeys = ["ArrowRight", "PageDown", " "];
  const backwardKeys = ["ArrowLeft", "PageUp"];

  if (forwardKeys.includes(event.key)) {
    event.preventDefault();
    nextSlide();
  }

  if (backwardKeys.includes(event.key)) {
    event.preventDefault();
    prevSlide();
  }
});

let touchStartX = 0;

document.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].clientX;
  },
  { passive: true }
);

document.addEventListener(
  "touchend",
  (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) < 60) return;
    if (distance < 0) nextSlide();
    if (distance > 0) prevSlide();
  },
  { passive: true }
);

showSlide(0);


const year = document.getElementById("year");

// Tahun otomatis
year.textContent = new Date().getFullYear();

// Efek animasi saat kartu terlihat
const cards = document.querySelectorAll(
  ".profile-card, .card, .contact"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => {
    card.classList.add("reveal");
    observer.observe(card);
  });
}

window.addEventListener("scroll", () => {
const navbar = document.querySelector(".navbar");
if (window.scrollY > 50) {
navbar.style.background = "#020617";
} else {
navbar.style.background = "#111827";
}
});
const cards = document.querySelectorAll('.card, .card-auto');
cards.forEach(card => {

card.addEventListener('mouseenter', () => {
card.style.boxShadow = '0 0 25px rgba(0,212,255,0.4)';
});
card.addEventListener('mouseleave', () => {
card.style.boxShadow = 'none';
});
});


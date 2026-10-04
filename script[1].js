document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const input = document.getElementById("photoInput");
const grid = document.getElementById("photoGrid");

if (input) {
  input.addEventListener("change", () => {
    [...input.files].forEach(file => {
      const url = URL.createObjectURL(file);
      const card = document.createElement("div");
      card.className = "photo-card uploaded";
      card.style.backgroundImage = `url("${url}")`;
      card.innerHTML = "<span>" + file.name.toUpperCase() + "</span>";
      grid.prepend(card);
    });
  });
}
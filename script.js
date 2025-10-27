// Kleines Interaktionsskript
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta");
  if (cta) {
    cta.addEventListener("click", () => {
      cta.style.transform = "scale(0.96)";
      setTimeout(() => (cta.style.transform = ""), 120);
    });
  }
});

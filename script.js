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


// Dev-Reveal: ?reveal=1 zeigt die Position des Hidden Links visuell an
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("reveal") === "1") {
    document.documentElement.classList.add("reveal-hidden");
  }

  // Optional: Tastatur-Shortcut Alt+H toggelt die Visualisierung lokal
  document.addEventListener("keydown", (e) => {
    if (e.altKey && (e.key.toLowerCase() === "h")) {
      document.documentElement.classList.toggle("reveal-hidden");
    }
  });
});


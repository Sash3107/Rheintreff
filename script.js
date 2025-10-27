// kleines Interaktionsskript (nur Dekoration)
document.addEventListener('DOMContentLoaded', ()=> {
  const cta = document.querySelector('.cta');
  if(cta) cta.addEventListener('click', ()=> {
    // kleine Animation, kein Versteck
    cta.style.transform = 'scale(0.98)';
    setTimeout(()=> cta.style.transform = '', 120);
  });
});

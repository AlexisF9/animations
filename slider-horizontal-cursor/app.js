const slider = document.querySelector('.slideshow-container') 
let holding = false;   // Quand on clique sur le slider
let firstClickX; // position du premier clique
let alreadyLeftScrolled; // ce qui a deja été scrollé 

slider.addEventListener('mousedown', e => { 
  holding = true;

  firstClickX = e.pageX - slider.offsetLeft; // position du clique sur le slider

  alreadyLeftScrolled = slider.scrollLeft; // est ce que on a deja scrollé (slider.scrollLeft = Nombre de pixels dont le contenu est défilé vers la gauche.)
})

slider.addEventListener('mousemove', e => { 
  if(!holding) return; // si je passe ma souris sur le slider sans avoir cliqué je n'exec pas le code

  const x = e.pageX - slider.offsetLeft; // Actualise le x quand je clique ET que je bouge la souris
  // offsetLeft = renvoie la position du coin supérieur gauche de l'élément (la veleur doit être > à 0 sinon le slider bloque)

  const scrolled = x - firstClickX; // ce qu'on a scroll (x de la souris quand elle bouge - position du premier clique)

  slider.scrollLeft = alreadyLeftScrolled - scrolled; // animation de scroll (ce qu'on a deja scroll - ce qu'on scroll)
})

slider.addEventListener('mouseup', () => {
  holding = false;
  startTransition()
})
slider.addEventListener('mouseleave', () => {
  holding = false;
})
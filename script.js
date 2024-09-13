const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const header = document.querySelector("header");
let inactivityTimer;
const inactivityDelay = 500; // Temps d'inactivité en millisecondes

// Initialisation des positions des cercles
circles.forEach(function (circle) {
  circle.style.position = 'absolute';
  circle.style.transition = 'opacity 0.5s, transform 0.1s';
  circle.x = 0;
  circle.y = 0;
});

// Fonction pour faire disparaître les cercles
function hideCircles() {
  circles.forEach(function (circle) {
    circle.style.opacity = 0;
  });
}

// Fonction pour faire apparaître les cercles
function showCircles() {
  circles.forEach(function (circle) {
    circle.style.opacity = 1;
  });
}

// Fonction pour arrêter l'effet de cercle lorsque la souris quitte le header
function stopEffect() {
  hideCircles();
  window.removeEventListener("mousemove", onMouseMove);
}

// Fonction pour démarrer l'effet de cercle lorsque la souris entre dans le header
function startEffect() {
  showCircles();
  window.addEventListener("mousemove", onMouseMove);
}

// Fonction pour gérer le mouvement de la souris
function onMouseMove(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

  // Réinitialiser le timer d'inactivité
  clearTimeout(inactivityTimer);

  circles.forEach(function (circle) {
    circle.style.left = coords.x + "px";
    circle.style.top = coords.y + "px";
  });

  // Démarrer un nouveau timer d'inactivité
  inactivityTimer = setTimeout(hideCircles, inactivityDelay);
}

// Détection de l'entrée et de la sortie de la souris dans le header
header.addEventListener("mouseenter", startEffect);
header.addEventListener("mouseleave", stopEffect);
header.addEventListener("mousemove", startEffect);

/* const video = document.getElementById('myVideo');

video.addEventListener('mouseover', function() {
  video.play();
});

video.addEventListener('mouseout', function() {
  video.pause();
  video.currentTime = 0; // Rewind the video to the start
});

*/

let lastScrollTop = 0;
const navBar = document.querySelector('.nav-bar-menu');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll vers le bas
        navBar.classList.add('hidden');
    } else {
        // Scroll vers le haut
        navBar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});


const moreBtn = document.querySelector(".more-btn");
const more = document.querySelector(".more");

moreBtn.addEventListener("click", () => {
  if (more.style.display === "none" || more.style.display === "") {
    more.style.display = "flex";
    more.style.flexDirection = "column";
    more.style.justifyContent = "center";
    more.style.alignItems = "center";
    moreBtn.textContent = "Less";
  } else {
    more.style.display = "none";
    moreBtn.textContent = "More";
  }
});

const langToggle = document.getElementById('lang-toggle');
const elements = document.querySelectorAll('.lang');

langToggle.addEventListener('click', () => {
    const lang = langToggle.textContent.trim() === 'Italiano' ? 'it' : 'en';
    
    elements.forEach(el => {
        const currentLang = el.getAttribute('data-lang');
        if (currentLang === lang) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });

    langToggle.textContent = lang === 'en' ? 'Italiano' : 'English';
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
  })
  .then(response => {
      if (response.ok) {
          alert("Your message has been sent successfully!");
          this.reset();
      } else {
          alert("Oops! There was a problem submitting your form");
      }
  })
  .catch(error => console.error('Error:', error));
});


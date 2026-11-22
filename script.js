
// Mobile Navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', String(isOpen));
});


// Close menu after clicking a navigation link
document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('open');

    menuToggle.setAttribute('aria-expanded', 'false');

  });

});


// Rotating Role Text Animation
const roles = [
  'Aspiring Software Engineer',
  'Problem Solver',
  'Full-stack Learner'
];

const roleText = document.getElementById('roleText');

let roleIndex = 0;

setInterval(() => {

  roleIndex = (roleIndex + 1) % roles.length;

  roleText.style.opacity = '0';

  setTimeout(() => {

    roleText.textContent = roles[roleIndex];

    roleText.style.opacity = '1';

  }, 220);

}, 2600);


// Highlight Active Navigation Section
const sections = document.querySelectorAll('main section[id]');

const navItems = document.querySelectorAll(
  '.nav-links a[href^="#"]'
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      navItems.forEach(item => {

        item.classList.toggle(
          'active',
          item.getAttribute('href') === `#${entry.target.id}`
        );

      });

    }

  });

}, {
  rootMargin: '-35% 0px -55% 0px'
});

sections.forEach(section => observer.observe(section));

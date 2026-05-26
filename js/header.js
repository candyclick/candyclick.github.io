// Header Component
function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        <a href="index.html" class="nav-logo" aria-label="Candy Clicker Home">
          <span class="logo-icon">🍭</span>
          <span class="logo-text">Candy<span class="logo-accent">Clicker</span></span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks" role="menubar">
          <li role="none"><a href="#game" role="menuitem" class="nav-link">Play Now</a></li>
          <li role="none"><a href="#candies" role="menuitem" class="nav-link">Candy Types</a></li>
          <li role="none"><a href="#upgrades" role="menuitem" class="nav-link">Upgrades</a></li>
          <li role="none"><a href="#leaderboard" role="menuitem" class="nav-link">Leaderboard</a></li>
          <li role="none"><a href="#how-to-play" role="menuitem" class="nav-link">How to Play</a></li>
          <li role="none"><a href="#features" role="menuitem" class="nav-link">Features</a></li>
        </ul>
        <a href="#game" class="nav-cta">Start Clicking!</a>
      </div>
    </nav>
  `;

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Sticky scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', renderHeader);

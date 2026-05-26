// Footer Component
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-candy-strip" aria-hidden="true">
      <span>🍭</span><span>🍬</span><span>🍫</span><span>🍡</span><span>🍰</span><span>🧁</span><span>🍩</span><span>🍪</span><span>🍭</span><span>🍬</span><span>🍫</span><span>🍡</span><span>🍰</span><span>🧁</span><span>🍩</span><span>🍪</span>
    </div>
    <div class="footer-main">
      <div class="footer-brand">
        <a href="index.html" class="footer-logo" aria-label="Candy Clicker">
          <span class="logo-icon">🍭</span>
          <span class="logo-text">Candy<span class="logo-accent">Clicker</span></span>
        </a>
        <p class="footer-tagline">The sweetest idle clicking game on the web. Click candies, unlock upgrades, and build your sugary empire!</p>
        <div class="footer-badges">
          <span class="badge">🎮 Free to Play</span>
          <span class="badge">📱 Mobile Ready</span>
          <span class="badge">🚀 No Download</span>
        </div>
      </div>
      <div class="footer-links-group">
        <h4>Play</h4>
        <ul>
          <li><a href="#game">Start Game</a></li>
          <li><a href="#candies">Candy Types</a></li>
          <li><a href="#upgrades">Upgrades Shop</a></li>
          <li><a href="#leaderboard">Leaderboard</a></li>
        </ul>
      </div>
      <div class="footer-links-group">
        <h4>Discover</h4>
        <ul>
          <li><a href="#features">Game Features</a></li>
          <li><a href="#how-to-play">How to Play</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-links-group">
        <h4>About</h4>
        <ul>
          <li><a href="#about">About Candy Clicker</a></li>
          <li><a href="mailto:hello@candyclick.github.io">Contact Us</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${year} CandyClicker.github.io — All rights reserved. Made with 🍭 and love.</p>
      <p class="footer-disclaimer">Candy Clicker is a free browser-based idle clicker game. No download required. Play instantly on any device.</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderFooter);

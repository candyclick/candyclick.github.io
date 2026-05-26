// Candy Clicker — Game Engine

const CANDY_TYPES = [
  { id: 'lollipop',    name: 'Lollipop',       emoji: '🍭', color: '#ff6eb4', cps: 0,   cost: 0,    owned: 0, img: 'https://images.unsplash.com/photo-1582058091597-8f5c1c7a1c4d?w=120&q=80', desc: 'Classic swirly lollipop — the original!' },
  { id: 'gummy',       name: 'Gummy Bear',      emoji: '🐻', color: '#ffcd3c', cps: 1,   cost: 15,   owned: 0, img: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=120&q=80', desc: 'Chewy bears worth 1 candy/sec each.' },
  { id: 'chocolate',   name: 'Chocolate Bar',   emoji: '🍫', color: '#7b4f2e', cps: 5,   cost: 100,  owned: 0, img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=120&q=80', desc: 'Rich dark chocolate — 5 candies/sec.' },
  { id: 'cupcake',     name: 'Cupcake',         emoji: '🧁', color: '#ff85a1', cps: 15,  cost: 500,  owned: 0, img: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=120&q=80', desc: 'Frosted cupcakes churn 15 candies/sec.' },
  { id: 'icecream',    name: 'Ice Cream',        emoji: '🍦', color: '#ffe0b2', cps: 40,  cost: 2000, owned: 0, img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=120&q=80', desc: 'Creamy scoops produce 40 candies/sec.' },
  { id: 'donut',       name: 'Donut',           emoji: '🍩', color: '#f7b267', cps: 100, cost: 8000, owned: 0, img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=120&q=80', desc: 'Glazed donuts spin out 100 candies/sec.' },
  { id: 'candy_cane',  name: 'Candy Cane',      emoji: '🎄', color: '#e63946', cps: 250, cost: 30000,owned: 0, img: 'https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=120&q=80', desc: 'Peppermint magic at 250 candies/sec.' },
  { id: 'macaron',     name: 'Macaron',         emoji: '🌈', color: '#c77dff', cps: 600, cost: 100000,owned:0, img: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=120&q=80', desc: 'French luxury: 600 candies/sec!' },
];

const UPGRADES = [
  { id: 'u1',  name: 'Sugar Rush',        cost: 50,     multiplier: 2,   target: 'click', desc: 'Double your click power!',            bought: false, emoji: '⚡' },
  { id: 'u2',  name: 'Golden Wrapper',    cost: 200,    multiplier: 3,   target: 'click', desc: 'Triple candies per click.',            bought: false, emoji: '🥇' },
  { id: 'u3',  name: 'Turbo Lick',        cost: 1000,   multiplier: 5,   target: 'click', desc: '5× click multiplier activated!',       bought: false, emoji: '👅' },
  { id: 'u4',  name: 'Gummy Factory',     cost: 500,    multiplier: 2,   target: 'gummy', desc: 'Gummy Bears produce 2× more.',         bought: false, emoji: '🏭' },
  { id: 'u5',  name: 'Choco Upgrade',     cost: 2000,   multiplier: 2,   target: 'chocolate', desc: 'Chocolate bars doubled.',          bought: false, emoji: '🍫' },
  { id: 'u6',  name: 'Cupcake Sprinkles', cost: 8000,   multiplier: 2,   target: 'cupcake', desc: 'Cupcakes get extra sprinkles!',      bought: false, emoji: '✨' },
  { id: 'u7',  name: 'Ice Age',           cost: 25000,  multiplier: 3,   target: 'icecream', desc: 'Ice cream triples output.',         bought: false, emoji: '❄️' },
  { id: 'u8',  name: 'Donut Dimension',   cost: 100000, multiplier: 4,   target: 'donut', desc: 'Donuts enter a candy dimension!',      bought: false, emoji: '🌀' },
  { id: 'u9',  name: 'Candy Storm',       cost: 500000, multiplier: 5,   target: 'all',   desc: 'All production ×5 — epic!',           bought: false, emoji: '🌪️' },
  { id: 'u10', name: 'Cosmic Sugar',      cost: 2000000,multiplier: 10,  target: 'all',   desc: 'Universe-level candy production!',    bought: false, emoji: '🌌' },
];

const ACHIEVEMENTS = [
  { id: 'a1',  name: 'First Bite',    desc: 'Click your first candy',        condition: s => s.totalClicked >= 1,        emoji: '🍬', unlocked: false },
  { id: 'a2',  name: 'Sugar Baby',    desc: 'Collect 100 candies',           condition: s => s.totalEarned >= 100,       emoji: '👶', unlocked: false },
  { id: 'a3',  name: 'Sweet Tooth',   desc: 'Collect 1,000 candies',         condition: s => s.totalEarned >= 1000,      emoji: '🦷', unlocked: false },
  { id: 'a4',  name: 'Candy Master',  desc: 'Collect 10,000 candies',        condition: s => s.totalEarned >= 10000,     emoji: '🏆', unlocked: false },
  { id: 'a5',  name: 'Sugar Baron',   desc: 'Collect 1,000,000 candies',     condition: s => s.totalEarned >= 1000000,   emoji: '👑', unlocked: false },
  { id: 'a6',  name: 'Click Frenzy',  desc: 'Click 100 times',               condition: s => s.totalClicked >= 100,      emoji: '👆', unlocked: false },
  { id: 'a7',  name: 'Shopper',       desc: 'Buy your first building',       condition: s => s.buildings >= 1,           emoji: '🛒', unlocked: false },
  { id: 'a8',  name: 'Candy Empire',  desc: 'Own 10 buildings',              condition: s => s.buildings >= 10,          emoji: '🏰', unlocked: false },
];

// State
let state = {
  candies: 0,
  totalEarned: 0,
  totalClicked: 0,
  clickPower: 1,
  cps: 0,
  buildings: 0,
  candyTypes: JSON.parse(JSON.stringify(CANDY_TYPES)),
  upgrades: JSON.parse(JSON.stringify(UPGRADES)),
  achievements: JSON.parse(JSON.stringify(ACHIEVEMENTS)),
};

// Load state
function loadState() {
  try {
    const saved = localStorage.getItem('candyClickerState');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      // Re-attach condition functions
      state.achievements = state.achievements.map((a, i) => ({
        ...a, condition: ACHIEVEMENTS[i].condition
      }));
    }
  } catch (e) {}
}

// Save state
function saveState() {
  try {
    const toSave = { ...state };
    toSave.achievements = state.achievements.map(a => {
      const { condition, ...rest } = a;
      return rest;
    });
    localStorage.setItem('candyClickerState', JSON.stringify(toSave));
  } catch (e) {}
}

// Format numbers
function fmt(n) {
  if (n >= 1e12) return (n / 1e12).toFixed(1) + 'T';
  if (n >= 1e9)  return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6)  return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3)  return (n / 1e3).toFixed(1) + 'K';
  return Math.floor(n).toString();
}

// Compute CPS
function computeCPS() {
  let total = 0;
  state.candyTypes.forEach(ct => {
    if (ct.owned === 0 || ct.cps === 0) return;
    let base = ct.cps * ct.owned;
    // Apply upgrades
    state.upgrades.forEach(u => {
      if (!u.bought) return;
      if (u.target === ct.id) base *= u.multiplier;
      if (u.target === 'all') base *= u.multiplier;
    });
    total += base;
  });
  state.cps = total;
  return total;
}

// Compute click power
function computeClickPower() {
  let power = 1;
  state.upgrades.forEach(u => {
    if (u.bought && u.target === 'click') power *= u.multiplier;
  });
  state.clickPower = power;
  return power;
}

// Spawn float candy text
function spawnFloatText(x, y, text) {
  const el = document.createElement('div');
  el.className = 'float-text';
  el.textContent = text;
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

// Spawn particle
function spawnParticle(x, y) {
  const colors = ['#ff6eb4','#ffcd3c','#7b4f2e','#ff85a1','#c77dff','#e63946','#f7b267'];
  for (let i = 0; i < 8; i++) {
    const p = document.createElement('div');
    p.className = 'candy-particle';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    const angle = Math.random() * 360;
    const dist = 40 + Math.random() * 60;
    p.style.setProperty('--tx', Math.cos(angle * Math.PI / 180) * dist + 'px');
    p.style.setProperty('--ty', Math.sin(angle * Math.PI / 180) * dist + 'px');
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 700);
  }
}

// Main click handler
function handleMainClick(e) {
  computeClickPower();
  const earned = state.clickPower;
  state.candies += earned;
  state.totalEarned += earned;
  state.totalClicked++;

  const candy = document.getElementById('mainCandy');
  candy.classList.remove('candy-bounce');
  void candy.offsetWidth;
  candy.classList.add('candy-bounce');

  const rect = candy.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  spawnParticle(cx, cy);
  spawnFloatText(e.clientX - 20, e.clientY - 30, `+${fmt(earned)} 🍭`);

  checkAchievements();
  updateUI();
  saveState();
}

// Buy candy type
function buyCandy(id) {
  const ct = state.candyTypes.find(c => c.id === id);
  if (!ct || state.candies < ct.cost) return;
  state.candies -= ct.cost;
  ct.owned++;
  ct.cost = Math.ceil(ct.cost * 1.15);
  state.buildings++;
  computeCPS();
  checkAchievements();
  updateUI();
  saveState();
  showToast(`Bought ${ct.name}! 🎉`);
}

// Buy upgrade
function buyUpgrade(id) {
  const u = state.upgrades.find(u => u.id === id);
  if (!u || u.bought || state.candies < u.cost) return;
  state.candies -= u.cost;
  u.bought = true;
  computeClickPower();
  computeCPS();
  updateUI();
  saveState();
  showToast(`Upgrade unlocked: ${u.name}! ${u.emoji}`);
}

// Toast notification
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2500);
}

// Check achievements
function checkAchievements() {
  state.achievements.forEach(a => {
    if (!a.unlocked && a.condition(state)) {
      a.unlocked = true;
      showToast(`🏆 Achievement: ${a.name}!`);
    }
  });
}

// Check if the random candy drop event fires
function randomCandyDrop() {
  if (Math.random() < 0.003) {
    const bonus = Math.max(10, Math.floor(state.cps * 10));
    state.candies += bonus;
    state.totalEarned += bonus;
    showToast(`🌟 Candy Rain! +${fmt(bonus)} bonus!`);
    updateUI();
  }
}

// Update all UI
function updateUI() {
  // Stats
  setText('statCandies', fmt(state.candies));
  setText('statCPS', fmt(computeCPS()) + '/s');
  setText('statTotal', fmt(state.totalEarned));
  setText('statClicks', fmt(state.totalClicked));
  setText('statClickPower', `+${fmt(state.clickPower)}`);
  setText('statBuildings', state.buildings);

  // Progress bar
  const milestones = [100, 1000, 10000, 100000, 1000000, 10000000];
  const next = milestones.find(m => state.totalEarned < m) || milestones[milestones.length - 1];
  const prev = milestones[milestones.indexOf(next) - 1] || 0;
  const pct = Math.min(100, ((state.totalEarned - prev) / (next - prev)) * 100);
  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = pct + '%';
  setText('progressLabel', `Next milestone: ${fmt(next)} candies`);

  // Shop
  renderShop();
  renderUpgrades();
  renderAchievements();
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function renderShop() {
  const shop = document.getElementById('shopItems');
  if (!shop) return;
  shop.innerHTML = state.candyTypes.filter(ct => ct.cps > 0).map(ct => {
    const canAfford = state.candies >= ct.cost;
    return `
      <div class="shop-item ${canAfford ? 'affordable' : 'locked'}" onclick="buyCandy('${ct.id}')">
        <img src="${ct.img}" alt="${ct.name}" class="shop-img" loading="lazy" onerror="this.src='https://via.placeholder.com/60x60/ff6eb4/fff?text=🍭'">
        <div class="shop-info">
          <div class="shop-name">${ct.name} <span class="owned-badge">${ct.owned > 0 ? '×'+ct.owned : ''}</span></div>
          <div class="shop-desc">${ct.desc}</div>
          <div class="shop-cps">+${ct.cps}/sec each</div>
        </div>
        <div class="shop-cost ${canAfford ? 'can-buy' : ''}">
          <span>🍭</span> ${fmt(ct.cost)}
        </div>
      </div>`;
  }).join('');
}

function renderUpgrades() {
  const cont = document.getElementById('upgradeItems');
  if (!cont) return;
  cont.innerHTML = state.upgrades.map(u => {
    const canAfford = state.candies >= u.cost && !u.bought;
    return `
      <div class="upgrade-item ${u.bought ? 'bought' : canAfford ? 'affordable' : 'locked'}"
           onclick="${!u.bought ? `buyUpgrade('${u.id}')` : ''}">
        <span class="upgrade-emoji">${u.emoji}</span>
        <div class="upgrade-info">
          <div class="upgrade-name">${u.name} ${u.bought ? '✅' : ''}</div>
          <div class="upgrade-desc">${u.desc}</div>
        </div>
        <div class="upgrade-cost">${u.bought ? 'Owned' : '🍭 ' + fmt(u.cost)}</div>
      </div>`;
  }).join('');
}

function renderAchievements() {
  const cont = document.getElementById('achievementItems');
  if (!cont) return;
  cont.innerHTML = state.achievements.map(a => `
    <div class="achievement-item ${a.unlocked ? 'unlocked' : 'locked-ach'}">
      <span class="ach-emoji">${a.unlocked ? a.emoji : '🔒'}</span>
      <div class="ach-info">
        <div class="ach-name">${a.unlocked ? a.name : '???'}</div>
        <div class="ach-desc">${a.unlocked ? a.desc : 'Keep playing to unlock!'}</div>
      </div>
    </div>`
  ).join('');
}

// Leaderboard (simulated local)
function renderLeaderboard() {
  const entries = [
    { name: 'SugarQueen',  score: 4823000 },
    { name: 'CandyKing99', score: 2910500 },
    { name: 'LolliPop_Pro',score: 1765400 },
    { name: 'ChocoDragon', score: 987650  },
    { name: 'GummyWiz',    score: 654321  },
    { name: 'You',         score: state.totalEarned },
  ];
  entries.sort((a, b) => b.score - a.score);
  const cont = document.getElementById('leaderboardList');
  if (!cont) return;
  cont.innerHTML = entries.map((e, i) => `
    <div class="lb-row ${e.name === 'You' ? 'lb-you' : ''}">
      <span class="lb-rank">${['🥇','🥈','🥉','4','5','6','7','8'][i]}</span>
      <span class="lb-name">${e.name}</span>
      <span class="lb-score">🍭 ${fmt(e.score)}</span>
    </div>`).join('');
}

// Game tick
function gameTick() {
  computeCPS();
  const earned = state.cps / 20; // 20 ticks per second
  if (earned > 0) {
    state.candies += earned;
    state.totalEarned += earned;
  }
  randomCandyDrop();
  checkAchievements();
  updateUI();
}

// Init game
function initGame() {
  loadState();
  computeCPS();
  computeClickPower();
  updateUI();
  renderLeaderboard();

  const candy = document.getElementById('mainCandy');
  if (candy) candy.addEventListener('click', handleMainClick);

  // Reset button
  const resetBtn = document.getElementById('resetGame');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset all progress? This cannot be undone!')) {
        localStorage.removeItem('candyClickerState');
        location.reload();
      }
    });
  }

  setInterval(gameTick, 50);
  setInterval(renderLeaderboard, 5000);
  setInterval(saveState, 10000);
}

document.addEventListener('DOMContentLoaded', initGame);

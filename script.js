const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hint = document.getElementById('hint');

const hints = [
  "Hmm, are you sure? 🥹",
  "The cat is very sad now... 😿",
  "Pleaseee? 🐱",
  "The No button is shy, it keeps running away 🙈",
  "Just press Yes, meow? 😽"
];
let tries = 0;


function runAway() {
  const x = (Math.random() - 0.5) * 260;
  const y = (Math.random() - 0.5) * 200;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  hint.textContent = hints[tries % hints.length];
  tries++;
  yesBtn.style.transform = `scale(${Math.min(1 + tries * 0.08, 1.6)})`;
}

noBtn.addEventListener('mouseenter', runAway);
noBtn.addEventListener('click', runAway);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  runAway();
});


yesBtn.addEventListener('click', () => {
  document.getElementById('stepAsk').classList.add('hidden');
  document.getElementById('stepYes').classList.remove('hidden');

  const cats = ['🐱', '😻', '😽', '🐾', '🐈', '💜', '😸'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const s = document.createElement('span');
      s.className = 'falling';
      s.textContent = cats[Math.floor(Math.random() * cats.length)];
      s.style.left = Math.random() * 100 + 'vw';
      s.style.animationDuration = (2 + Math.random() * 3) + 's';
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 5500);
    }, i * 70);
  }
});

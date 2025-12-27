let totalTime = 25 * 60;
let timeLeft = totalTime;
let interval = null;
let running = false;

const timer = document.getElementById("timer");
const bar = document.getElementById("bar");
const statusText = document.getElementById("status");
const app = document.getElementById("app");
const sound = document.getElementById("sound");
const streakEl = document.getElementById("streak");

let streak = localStorage.getItem("streak") || 0;
streakEl.textContent = streak;

function updateTimer() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  timer.textContent = `${m}:${s < 10 ? "0" : ""}${s}`;

  const progress = ((totalTime - timeLeft) / totalTime) * 100;
  bar.style.width = `${progress}%`;
}

function startSession() {
  if (running) return;
  running = true;
  app.classList.add("locked");
  statusText.textContent = "🔒 Focus mode ON";

  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      completeSession();
    }
  }, 1000);
}

function pauseSession() {
  clearInterval(interval);
  running = false;
  statusText.textContent = "⏸ Paused";
}

function resetSession() {
  clearInterval(interval);
  running = false;
  timeLeft = totalTime;
  bar.style.width = "0%";
  app.classList.remove("locked");
  statusText.textContent = "Ready to focus";
  updateTimer();
}

function completeSession() {
  clearInterval(interval);
  running = false;
  sound.play();
  statusText.textContent = "✅ Focus session complete!";
  app.classList.remove("locked");

  streak++;
  localStorage.setItem("streak", streak);
  streakEl.textContent = streak;
}

updateTimer();

   

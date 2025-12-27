<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Screen Time Tracker</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; }
    h1 { color: #2E86C1; }
    .box { border: 1px solid #ddd; padding: 15px; border-radius: 10px; margin-bottom: 20px; }
    .btn { padding: 10px 18px; border: none; border-radius: 6px; background: #2E86C1; color: white; cursor: pointer; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    table, th, td { border: 1px solid #ddd; }
    th, td { padding: 8px; text-align: center; }
  </style>
</head>
<body>

<h1>📱 Smart Student Screen Time Tracker – Demo</h1>
<p>This demo simulates how the system tracks and warns students when their screen time exceeds their target.</p>

<div class="box">
  <h2>⏱ Today's Screen Time</h2>
  <p id="time">0 minutes</p>
  <label>Your daily target (minutes): </label>
  <input type="number" id="limit" value="60" />
  <button class="btn" onclick="startTimer()">Start Simulation</button>
</div>

<div class="box">
  <h2>📅 Weekly Average (Sample)</h2>
  <table>
    <tr><th>Day</th><th>Time</th></tr>
    <tr><td>Mon</td><td>2h</td></tr>
    <tr><td>Tue</td><td>3h</td></tr>
    <tr><td>Wed</td><td>4h</td></tr>
    <tr><td>Thu</td><td>3h</td></tr>
    <tr><td>Fri</td><td>2.5h</td></tr>
    <tr><td>Sat</td><td>5h</td></tr>
    <tr><td>Sun</td><td>4h</td></tr>
  </table>
</div>

<div class="box">
  <h2>🎯 Motivational Elements</h2>
  <ul>
    <li>🔥 Daily streaks</li>
    <li>🏆 Weekly challenges</li>
    <li>🎁 Rewards for meeting goals</li>
    <li>🚫 Lock-out mode for distraction apps</li>
    <li>👥 Peer accountability & leaderboard</li>
  </ul>
</div>

<script>
let minutes = 0;
let interval;

function startTimer() {
  const limit = parseInt(document.getElementById("limit").value);
  clearInterval(interval);
  interval = setInterval(() => {
    minutes++;
    document.getElementById("time").innerText = minutes + " minutes";

    if (minutes === limit) {
      alert("⚠️ Warning: You reached your daily limit!");
    }
    if (minutes > limit) {
      alert("🚨 Limit exceeded! Screen lock recommended.");
    }
  }, 1000); // every second = 1 minute in simulation
}
</script>
</body>
</html>

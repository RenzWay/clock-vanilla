const canvas = document.getElementById("analogClock");
const ctx = canvas.getContext("2d");

function drawClock() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.save();
  ctx.translate(150, 150);

  // Lingkaran luar
  ctx.beginPath();
  ctx.arc(0, 0, 140, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 8;
  ctx.stroke();

  // Angka
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let n = 1; n <= 12; n++) {
    let ang = (n * Math.PI) / 6;
    ctx.save();
    ctx.rotate(ang);
    ctx.translate(0, -110);
    ctx.fillStyle = "#333";
    ctx.fillText(n.toString(), 0, 0);
    ctx.restore();
  }

  // Tanda jam dan menit
  for (let i = 0; i < 60; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI) / 30);
    ctx.beginPath();
    ctx.moveTo(0, -130);
    ctx.lineTo(0, i % 5 === 0 ? -140 : -135);
    ctx.strokeStyle = i % 5 === 0 ? "#333" : "#bbb";
    ctx.lineWidth = i % 5 === 0 ? 4 : 2;
    ctx.stroke();
    ctx.restore();
  }

  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // Jarum jam
  ctx.save();
  ctx.rotate((((hour % 12) + minute / 60) * Math.PI) / 6);
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(0, -70);
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();

  // Jarum menit
  ctx.save();
  ctx.rotate(((minute + second / 60) * Math.PI) / 30);
  ctx.beginPath();
  ctx.moveTo(0, 30);
  ctx.lineTo(0, -110);
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();

  // Jarum detik
  ctx.save();
  ctx.rotate((second * Math.PI) / 30);
  ctx.beginPath();
  ctx.moveTo(0, 40);
  ctx.lineTo(0, -120);
  ctx.strokeStyle = "#e74c3c";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();

  // Titik tengah
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();

  ctx.restore();
}

setInterval(drawClock, 1000);
drawClock();

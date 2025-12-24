// countdown
const weddingDate = new Date("2026-02-25T20:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;

  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  if (distance <= 0) {
    countdownEl.innerHTML = "<h3>💍 Today is the day! 💖</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Engagement code
const engagementPhotos = ["img3.jpg", "img2.jpg", "img1.jpg", "img4.jpg"];

const engagementGallery = document.getElementById("engagement-gallery");

if (engagementGallery) {
  engagementPhotos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = `assets/images/engagement/${photo}`;
    img.alt = "Engagement photo";
    img.loading = "lazy";
    engagementGallery.appendChild(img);
  });
}

// pasupu code
const pasupuPhotos = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"];

const pasupuGallery = document.getElementById("pasupu-gallery");

if (pasupuGallery) {
  pasupuPhotos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = `assets/images/pasupu/${photo}`;
    img.alt = "Pasupu ceremony photo";
    img.loading = "lazy";
    pasupuGallery.appendChild(img);
  });
}

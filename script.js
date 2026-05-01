window.onload = function () {
  const img = document.getElementById('bouncing-image');

  let x = 50;
  let y = 50;

  let speed = Math.max(0.6, window.innerWidth / 600);
  let dx = speed;
  let dy = speed;

  let rotation = 0;

  // 👇 creates visible tap ripple
  function createRipple(xPos, yPos) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = xPos + 'px';
    ripple.style.top = yPos + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.border = '3px solid white';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    ripple.style.opacity = '0.8';

    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }

  function animate() {
    const w = img.clientWidth;
    const h = img.clientHeight;

    const maxW = window.innerWidth;
    const maxH = document.documentElement.clientHeight;

    x += dx;
    y += dy;

    if (x + w >= maxW || x <= 0) dx *= -1;
    if (y + h >= maxH || y <= 0) dy *= -1;

    rotation += 3;

    img.style.transform =
      "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg)";

    requestAnimationFrame(animate);
  }

  function reactToTap(e) {
    let tapX, tapY;

    if (e.touches && e.touches.length > 0) {
      tapX = e.touches[0].clientX;
      tapY = e.touches[0].clientY;
    } else {
      tapX = e.clientX;
      tapY = e.clientY;
    }

    // 🔥 visual feedback
    createRipple(tapX, tapY);

    // 🧠 stronger push
    const force = 12;

    const dirX = x + img.clientWidth / 2 - tapX;
    const dirY = y + img.clientHeight / 2 - tapY;

    const length = Math.sqrt(dirX * dirX + dirY * dirY) || 1;

    dx = (dirX / length) * force;
    dy = (dirY / length) * force;

    // 💥 quick squash effect
    img.style.transition = "transform 0.1s";
    setTimeout(() => {
      img.style.transition = "";
    }, 100);
  }

  window.addEventListener('touchstart', reactToTap);
  window.addEventListener('click', reactToTap);

  animate();
};

window.onload = function () {
  const img = document.getElementById('bouncing-image');

  let x = 50;
  let y = 50;

  let speed = Math.max(0.6, window.innerWidth / 600);
  let dx = speed;
  let dy = speed;

  let rotation = 0;

  function animate() {
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    const windowWidth = window.innerWidth;
    const windowHeight = document.documentElement.clientHeight;

    x += dx;
    y += dy;

    // bounce off edges
    if (x + imgWidth >= windowWidth || x <= 0) dx *= -1;
    if (y + imgHeight >= windowHeight || y <= 0) dy *= -1;

    // spin
    rotation += 3;

    img.style.transform =
      "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg)";

    requestAnimationFrame(animate);
  }

  // 👇 TAP REACTION: push Sophie away from tap
  function reactToTap(e) {
    let tapX, tapY;

    if (e.touches && e.touches.length > 0) {
      tapX = e.touches[0].clientX;
      tapY = e.touches[0].clientY;
    } else {
      tapX = e.clientX;
      tapY = e.clientY;
    }

    // distance from tap
    const force = 8;

    const dirX = x + img.clientWidth / 2 - tapX;
    const dirY = y + img.clientHeight / 2 - tapY;

    // normalise direction
    const length = Math.sqrt(dirX * dirX + dirY * dirY) || 1;

    dx = (dirX / length) * force;
    dy = (dirY / length) * force;
  }

  window.addEventListener('touchstart', reactToTap);
  window.addEventListener('click', reactToTap);

  animate();
};

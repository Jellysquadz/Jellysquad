window.onload = function () {
  const img = document.getElementById('bouncing-image');

  let x = 50;
  let y = 50;

  let speed = Math.max(0.6, window.innerWidth / 600);
  let dx = speed;
  let dy = speed;

  let rotation = 0;

  function animate() {
    const w = img.clientWidth;
    const h = img.clientHeight;

    const maxW = window.innerWidth;
    const maxH = document.documentElement.clientHeight;

    x += dx;
    y += dy;

    if (x + w >= maxW || x <= 0) dx *= -1;
    if (y + h >= maxH || y <= 0) dy *= -1;

    rotation += 3; // spin speed

    // IMPORTANT: single transform (both move + rotate)
    img.style.transform =
      "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg)";

    requestAnimationFrame(animate);
  }

  animate();
};

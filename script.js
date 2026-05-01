window.onload = function () {
  const img = document.getElementById('bouncing-image');

  let x = 50;
  let y = 50;

  let speed = Math.max(0.6, window.innerWidth / 600);
  let dx = speed;
  let dy = speed;

  function moveImage() {
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    const windowWidth = window.innerWidth;
    const windowHeight = document.documentElement.clientHeight;

    x += dx;
    y += dy;

    if (x + imgWidth >= windowWidth || x <= 0) {
      dx *= -1;
    }

    if (y + imgHeight >= windowHeight || y <= 0) {
      dy *= -1;
    }

    img.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(moveImage);
  }

  moveImage();
};

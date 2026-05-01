<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bouncing Image</title>

  <!-- Mobile viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: #111; /* optional, just looks nicer */
    }

    #bouncing-image {
      position: absolute;
      width: 20vw;
      max-width: 150px;
      height: auto;
      will-change: transform;
    }
  </style>
</head>

<body>

  <img id="bouncing-image" src="https://via.placeholder.com/150" alt="bouncing">

  <script>
    window.onload = function () {
      const img = document.getElementById('bouncing-image');

      let x = 0;
      let y = 0;

      // Responsive speed based on screen size
      let speed = Math.max(0.5, window.innerWidth / 500);
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

      // Tap to reverse direction (mobile-friendly interaction)
      window.addEventListener('touchstart', () => {
        dx *= -1;
        dy *= -1;
      });

      moveImage();
    };
  </script>

</body>
</html>

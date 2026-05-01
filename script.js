<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bouncing Image</title>

  <!-- Prevent zooming issues -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      overflow: hidden;
      height: 100vh;
      background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
      font-family: sans-serif;
    }

    #bouncing-image {
      position: absolute;
      width: 18vw;
      max-width: 140px;
      height: auto;

      /* Snazziness */
      filter: drop-shadow(0 0 15px rgba(255,255,255,0.6));
      border-radius: 12px;

      will-change: transform;
    }
  </style>
</head>

<body>

  <img id="bouncing-image" src="https://via.placeholder.com/150/ffffff/000000?text=DVD" alt="bouncing">

  <script>
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
  </script>

</body>
</html>

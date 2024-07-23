window.onload = function() {
    const img = document.getElementById('bouncing-image');
    const speed = 1; // Adjust speed as needed
    let dx = speed;
    let dy = speed;
    let x = 0;
    let y = 0;

    function moveImage() {
        const imgWidth = img.clientWidth;
        const imgHeight = img.clientHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        x += dx;
        y += dy;

        if (x + imgWidth >= windowWidth || x <= 0) {
            dx *= -1;
        }

        if (y + imgHeight >= windowHeight || y <= 0) {
            dy *= -1;
        }

        img.style.left = x + 'px';
        img.style.top = y + 'px';

        requestAnimationFrame(moveImage);
    }

    moveImage();
}

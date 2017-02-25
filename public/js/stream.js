var canvas, context, host;
function init(h = '') {
    host = h
    canvas = document.getElementById('streamCanvas');
    canvas.width = window.innerWidth - 8;
    canvas.height = canvas.width / 16 * 9;
    context = canvas.getContext('2d');
    animate();
}
function animate() {
    if (context) {
        var piImage = new Image();
        piImage.onload = function() {
            console.log('Drawing image');
            context.drawImage(piImage, 0, 0, canvas.width, canvas.height);
        }
        piImage.src = host + "/html/cam_pic.php?time=" + new Date().getTime();
    }
    requestAnimationFrame(animate);
}

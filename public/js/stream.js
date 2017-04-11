var canvas_parent, canvas, context, host
var isOpenCamera = true;
$('#camera').click(function () {
    isOpenCamera = !isOpenCamera
})

function respondCanvas(){
    canvas.width = $(canvas_parent).width()
    canvas.height = canvas.width / 16 * 9
}
function stream_init(h = '') {
    host = h
    canvas = document.getElementById('streamCanvas');
    canvas_parent = $(canvas).parent()
    $(window).resize( respondCanvas )
    respondCanvas()
    context = canvas.getContext('2d');
    animate();
}
function animate() {
    if (context && isOpenCamera) {
        var piImage = new Image();
        piImage.onload = function() {
            // console.log('Drawing image');
            context.drawImage(piImage, 0, 0, canvas.width, canvas.height);
        }
        if (host != 'http://localhost:3000') {
            piImage.src = host + "/html/cam_pic.php?time=" + new Date().getTime()
        } else {
            piImage.src = '/img/cam_tmp.jpg'
        }
    }
    requestAnimationFrame(animate);
}

let canvas = document.getElementById("myCanvas");

canvas.height = window.innerHeight;
canvas.width = 1000;

const ctx = canvas.getContext("2d");
const snowBoard = new SnowBoard(500, canvas.height - 50, 15, 50);

animate();

function animate(){
    snowBoard.update();
    canvas.height = window.innerHeight
    snowBoard.draw(ctx);
    requestAnimationFrame(animate)
}
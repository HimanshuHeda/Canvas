const myCanvas = document.getElementById("myCanvas");
// alert(myCanvas);

var ctx = myCanvas.getContext("2d");

ctx.beginPath();
ctx.arc(200, 200, 90, 0, 7);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 70, 0, 7);
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, 7);
ctx.fillStyle = 'red';
ctx.fill();


ctx.beginPath();
ctx.arc(200, 200, 30, 0, 7);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 10, 0, 7);
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();

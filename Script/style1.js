const myCanvas = document.getElementById("myCanvas");
// alert(myCanvas);

var ctx = myCanvas.getContext("2d");

        ctx.moveTo(100,100);
        ctx.lineTo(300,100);
        ctx.lineTo(300,300);
        ctx.lineTo(100,300);
        ctx.lineTo(100,100);
        ctx.lineTo(200,0);
        ctx.lineTo(300,100);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, 7);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(300, 300, 20, 0, 7);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(100, 300, 20, 0, 7);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
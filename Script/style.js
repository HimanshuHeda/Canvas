const myCanvas = document.getElementById("myCanvas");
        
var ctx = myCanvas.getContext("2d");

        // House 
        ctx.beginPath();
        ctx.moveTo(100,100);
        ctx.lineTo(300,100);
        ctx.lineTo(300,300);
        ctx.lineTo(100,300);
        ctx.lineTo(100,100);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();

        // Hat
        ctx.beginPath();
        ctx.lineTo(100,100);
        ctx.lineTo(200,0);
        ctx.lineTo(300,100);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        // 1st circle 
        ctx.beginPath();
        ctx.arc(300, 20, 20, 0, 7);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();

        // 2nd circle
        ctx.beginPath();
        ctx.arc(300, 10, 3, 0, 7);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();

        // eye 1
        ctx.beginPath();
        ctx.arc(309, 4, 3, 0, 7);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();

        // eye 2
        ctx.beginPath();
        ctx.arc(280, 60, 30, 0, 7);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();

        // mouth line 1
        ctx.beginPath();
        ctx.moveTo(315,10);
        ctx.lineTo(300,20);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();

        // mouth line 2
        ctx.beginPath();
        ctx.moveTo(319,20);
        ctx.lineTo(300,20);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();

        // Feet
        // Left foot
        ctx.beginPath();
        ctx.moveTo(290, 90);
        ctx.lineTo(285, 100);
        ctx.moveTo(285, 100);
        ctx.lineTo(280, 100);
        ctx.moveTo(285, 100);
        ctx.lineTo(290, 105);
        ctx.stroke();

        // Right foot
        ctx.beginPath();
        ctx.moveTo(300, 80);
        ctx.lineTo(305, 100);
        ctx.moveTo(305, 100);
        ctx.lineTo(310, 100);
        ctx.moveTo(305, 100);
        ctx.lineTo(300, 105);
        ctx.stroke();

        // Tail
        ctx.beginPath();
        ctx.moveTo(230, 70);
        ctx.lineTo(280, 80);
        ctx.lineTo(250, 100);
        ctx.closePath();
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();

        // Door
        ctx.beginPath();
        ctx.rect(180, 200, 40, 100);
        ctx.fillStyle = 'brown';
        ctx.fill();
        ctx.stroke();

        // Door Handel
        ctx.beginPath();
        ctx.arc(210, 250, 5, 0, 7);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
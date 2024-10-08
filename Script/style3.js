const canvas = document.getElementById('birdCanvas');
const ctx = canvas.getContext('2d');

        // Body
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();

        // Head
        ctx.beginPath();
        ctx.arc(160, 170, 30, 0, Math.PI * 2, true); // Outer circle
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();

        // Eye
        ctx.beginPath();
        ctx.arc(150, 160, 5, 0, Math.PI * 2, true); // Outer circle
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();

        // Beak
        ctx.beginPath();
        ctx.moveTo(130, 170);
        ctx.lineTo(110, 180);
        ctx.lineTo(130, 190);
        ctx.closePath();
        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.stroke();

        // Wing
        ctx.beginPath();
        ctx.ellipse(200, 200, 30, 50, Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();

        // Tail
        ctx.beginPath();
        ctx.moveTo(230, 230);
        ctx.lineTo(250, 220);
        ctx.lineTo(250, 240);
        ctx.closePath();
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();

        // Feet
        // Left foot
        ctx.beginPath();
        ctx.moveTo(190, 250);
        ctx.lineTo(185, 270);
        ctx.moveTo(185, 270);
        ctx.lineTo(180, 270);
        ctx.moveTo(185, 270);
        ctx.lineTo(190, 275);
        ctx.stroke();

        // Right foot
        ctx.beginPath();
        ctx.moveTo(210, 250);
        ctx.lineTo(215, 270);
        ctx.moveTo(215, 270);
        ctx.lineTo(220, 270);
        ctx.moveTo(215, 270);
        ctx.lineTo(210, 275);
        ctx.stroke();
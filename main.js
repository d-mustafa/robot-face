// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Outline O fEars
ctx.fillStyle = "rgb(0, 0, 0)";
rect(310, 300, 470, 90);

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
rect(310, 300, 460, 80);

// Filled Triangle for Hair
ctx.fillStyle = "rgb(255, 0, 0)";
triangle(180, 80, 140, 100, 220, 100, "fill");

// Filled Triangle for Hair
ctx.fillStyle = "rgb(0, 0, 255)";
triangle(340, 80, 300, 100, 380, 100, "fill");

// Outlined Triangle for Hair
ctx.fillStyle = "rgb(100, 100, 100)";
triangle(260, 80, 220, 100, 300, 100, "stroke");

// Outlined Triangle for Hair
triangle(420, 80, 380, 100, 460, 100, "stroke");

// Filled Triangle for Neck
triangle(300, 200, 220, 600, 380, 600, "fill");

// Rectangle Outline Of Head
ctx.fillStyle = "rgb(0, 0, 0)";
rect(300, 300, 410, 410);

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
rect(300, 300, 400, 400);


// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
//circle(200, 250, 50, "fill");

// Filled Circle for Right Eye Socket
//circle(400, 250, 50, "fill");

// Rectangle for Mouth
rect(300, 380, 400, 60);

// First Triangle for Teeth
ctx.fillStyle = "rgb(180, 180, 180)";
triangle(100, 350, 150, 400, 200, 350, "fill");

// Second Triangle for Teeth
triangle(200, 350, 250, 400, 300, 350, "fill");

// Third Triangle for Teeth
triangle(300, 350, 350, 400, 400, 350, "fill");

// Fourth Triangle for Teeth
triangle(400, 350, 450, 400, 500, 350, "fill");

// Recantle Of The Lower Quater Of The Head
ctx.fillStyle = "rgb(200, 200, 200)";
rect(300, 455, 400, 90);


// // Horizontal Line for Teeth
// ctx.strokeStyle = "rgb(180, 180, 180)";
// line(200, 380, 400, 380);

// // First Vertical Line for Teeth
// line(250, 350, 250, 410);

// // Second Vertical Line for Teeth
// line(300, 350, 300, 410);

// // Third Vertical Line for Teeth
// line(350, 350, 350, 410);

// Filled Ellipse for Left Eye
ctx.fillStyle = "rgb(255, 255, 255)"
ellipse(200, 240, 40, 70, -1, 1.2, 4.8, "fill")

// Outlined Ellipse for Left Eye
ctx.strokeStyle = "rgb(255, 0, 0)"
ctx.lineWidth = 3;
ellipse(200, 240, 40, 70, -1, 1.2, 4.8, "stroke")

// Line for Left Eyebrow
line(143, 198, 264, 263);

// Filled Circle for Right Eye
ctx.fillStyle = "rgb(255, 255, 255)"
ellipse(400, 240, 40, 70, 1, 4.7, 2, "fill")

// Outlined Circle for Right Eye Socket
ctx.strokeStyle = "rgb(0, 0, 255)";
ellipse(400, 240, 40, 70, 1, 4.7, 2, "stroke")

// Line for Right Eyebrow
line(337, 262, 459, 200);

// Outlined Triangle for Nose
ctx.strokeStyle = "rgb(100, 100, 100)";
triangle(300, 280, 320, 320, 280, 320);

// Red Head Trapezoid
ctx.fillStyle = "rgb(150, 100, 100)";
quadrilateral(100, 100, 200, 100, 180, 150, 100, 150, "fill");

// Grey Head Trapezoid
ctx.fillStyle = "rgb(150, 150, 150)";
quadrilateral(250, 100, 350, 100, 330, 150, 270, 150, "fill");

// Blue Head Trapezoid
ctx.fillStyle = "rgb(100, 100, 150)";
quadrilateral(400, 100, 500, 100, 500, 150, 420, 150, "fill");


function circle(x, y, r, type){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);

    if(type == "fill"){
        ctx.fill();
    } else if(type == "stroke") {
        ctx.stroke();
    }
}

function rect(x, y, w, h, type /* type doesnt do anything here */){
    x -= w/2;
    y -= h/2;
    ctx.fillRect(x, y, w, h);
}

function line(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function triangle(x1, y1, x2, y2, x3, y3, type = "stroke"){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);

    if(type == "fill"){
        ctx.fill();
    } else if(type == "stroke") {
        ctx.closePath()
        ctx.stroke();
    }
}

// my own functionS
function ellipse(x, y, rx, ry, rotate, start, end, type){
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, rotate, start, end)
    
    if(type == "fill"){
        ctx.fill();
    } else if(type == "stroke") {
        ctx.stroke();
    }
}

function quadrilateral(x1, y1, x2, y2, x3, y3, x4, y4, type){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);

    if(type == "fill"){
        ctx.fill();
    } else if(type == "stroke") {
        ctx.closePath()
        ctx.stroke();
    }
}

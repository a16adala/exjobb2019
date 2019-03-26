/*----- spel-funktionalitet -----------*/

var ctx;
var robertX;
var robertY;

document.addEventListener('DOMContentLoaded',initcanvas,false);

function initcanvas() {
    var canvas = document.getElementById("grafikcanvas");
    ctx = canvas.getContext("2d");
    ctx.strokeRect(0,0,500,500);
    for(i=0;i<500;i+=100){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(500,i);
        ctx.moveTo(i,0);
        ctx.lineTo(i,500);
        ctx.stroke();
    }
    robertX=0;
    robertY=4;
    drawrobert();
}

function drawrobert() {
    ctx.beginPath();
    ctx.rect((robertX*100)+10, (robertY*100)+25, 80, 50, 40);
    ctx.stroke();
    ctx.fillStyle = "#ce6039";
    ctx.fill();
}

/*----- sid-funktionalitet -----------*/

function medgrafik() {
    hidemainpage();
    console.log('medgrafik');
    $('#medgrafikpage').hide();
    $('.footerheader').hide();
    $('.progressbar').hide();
    $('.textspel').hide();
}



/*----- spel-funktionalitet -----------*/

var ctx;

document.addEventListener('DOMContentLoaded',initcanvas,false);
function initcanvas() {
    var canvas = document.getElementById("grafikcanvas");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(0,0,500,500);
    for(i=0;i<500;i+=100){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(500,i);
        ctx.moveTo(i,0);
        ctx.lineTo(i,500);
        ctx.stroke();
    }
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



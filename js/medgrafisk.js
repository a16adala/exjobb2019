/*----- spel-funktionalitet lvl 1 -----------*/

var ctx;
var robertX = 0;
var robertY = 4;
var beeperX = Math.floor((Math.random() * 4) + 1);
var beeperY = Math.floor((Math.random() * 4) + 0);
var grafattemptslvl1 = 0;
var grafattemptslvl2 = 0;

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
    robertX;
    robertY;
    beeperX;
    beeperY;
    drawrobert();
    drawBeeper();
}

function drawrobert() {
    ctx.beginPath();
    ctx.rect((robertX*100)+10, (robertY*100)+25, 80, 50, 40);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.fillStyle = "#ce6039";
    ctx.fill();
}

function drawBeeper() {
    ctx.beginPath();
    ctx.arc((beeperX*100)+50, (beeperY*100)+50, 20, 0, 5 * Math.PI,
    false);
    ctx.shadowColor = '#f00000';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur    = 25;
    ctx.fillStyle = "#ff0000";
    ctx.fill();
}

function resetgame() {
    location.reload();
}

function moveup() {
    if (robertY>0) {
        robertY--;
        drawrobert();
        grafattemptslvl1;
        console.log(robertY);
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        resetgame();
        grafattemptslvl1++;
    }
    localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
}

function movedown() {
    if (robertY<4) {
        robertY++;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        resetgame();
        grafattemptslvl1;
    }
    localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
}

function moveright() {
    if (robertX<4) {
        robertX++;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        resetgame();
        grafattemptslvl1;
    }
    localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
}

function moveleft() {
    if (robertX>0) {
        robertX--;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        resetgame();
        grafattemptslvl1;
    }
    localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
}



/*----- spel-funktionalitet lvl 2 -----------*/

/*----- sid-funktionalitet -----------*/

function medgrafik() {
    hidemainpage();
    console.log('medgrafik');
    $('#medgrafikpage').hide();
    $('.footerheader').hide();
    $('.progressbar').hide();
    $('.textspel').hide();
}



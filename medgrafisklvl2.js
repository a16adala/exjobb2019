/*----- spel-funktionalitet lvl 2 -----------*/

var ctx;
var robertX = 0;
var robertY = 4;
var beeperX = Math.floor((Math.random() * 4) + 1);
var beeperY = Math.floor((Math.random() * 4) + 0);
var beeper2X = Math.floor((Math.random() * 4) + 1);
var beeper2Y = Math.floor((Math.random() * 4) + 0);
var grafattemptslvl1 = 1;
var grafattemptslvl2 = 1;
var collectedbeepers = 0;
var lvl2done = 0;

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
    beeper2X;
    beeper2Y;
    drawrobert();
    beeperfix();
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

function beeperfix() {
    while (beeperX == beeper2X && beeperY == beeper2Y) {
        beeper2X = Math.floor((Math.random() * 4) + 1);
        beeper2Y = Math.floor((Math.random() * 4) + 0);
    }
}

function drawBeeper() {
    ctx.beginPath();
    ctx.arc((beeperX*100)+50, (beeperY*100)+50, 20, 0, 5 * Math.PI,
    false);
    ctx.arc((beeper2X*100)+50, (beeper2Y*100)+50, 20, 0, 5 * Math.PI,
    false);
    ctx.shadowColor = '#f00000';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur    = 25;
    ctx.fillStyle = "#ff0000";
    ctx.fill();
}

$(document).ready(function showcode() {
    $(".movefunc").click(function showcode() {
        var movefunc = $(this).html();
        $("#runcode").append(movefunc);
    });
});

function resetgame() {
    location.reload();
}

function run() {
    var runnablecode = document.getElementById("runcode").value;
    eval(runnablecode);
    runcode.value = ' ';

}

function Up() {
    if (robertY>0) {
        robertY--;
        drawrobert();
        console.log(robertY);
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        resetgame();
        grafattemptslvl1++;
    }
    localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
}

function Down() {
    if (robertY<4) {
        robertY++;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        resetgame();
        grafattemptslvl1++;
    }
    localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
}

function Right() {
    if (robertX<4) {
        robertX++;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        resetgame();
        grafattemptslvl1++;
    }
    localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
}

function Left() {
    if (robertX>0) {
        robertX--;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        resetgame();
        grafattemptslvl1++;
    }
    localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
}

function pickUp() {
    if (robertX == beeperX && robertY == beeperY || robertX == beeper2X && robertY == beeper2Y) {
        collectedbeepers++;
        if (collectedbeepers == 2) {
            drawrobert();
            alert("Bra jobbat du är klar med andra nivån!");
            lvl2done = 1;
            lvl2completed();
        }
    }
    else {
        alert("Du har inte plockat upp alla beepers. Försök igen!");
        resetgame();
        grafattemptslvl1++;
    }
    localStorage.setItem("grafattemptslvl1++", grafattemptslvl1++);
}

function lvl2completed() {
    $("#nextlevel").addClass("nextlevelactive");
}

function nextlevel() {
    if (lvl2done == 1) {
        alert("klar");
    }
    else {
        console.log("inte klar");
    }
}

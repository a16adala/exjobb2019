/*----- spel-funktionalitet lvl 2 -----------*/

var ctx;
var robertX = 0;
var robertY = 4;
var beeperX = Math.floor((Math.random() * 4) + 1);
var beeperY = Math.floor((Math.random() * 4) + 0);
var beeper2X = Math.floor((Math.random() * 4) + 1);
var beeper2Y = Math.floor((Math.random() * 4) + 0);
var grafattemptslvl2 = 1;
var collectedbeepers2 = 0;
var lvl2done = 0;
var runpickup2 = 0;
var timer3;
var timer4;
var ttc2;
var runnablecode2 = 0;

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

function lvl2default() {
    document.getElementById('finnishgraf').innerHTML = '<h2>Avsluta</h2>';
}

function TTC() {
    timer3 = performance.now();
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

console.log(beeperX, beeperY, beeper2X, beeper2Y);

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
    runpickup2 = 0;
    location.reload();
}

function checkpick2() {
    runpickup2 = 1;
}

function Clear() {
    showtextarea();
}

function showtextarea() {
    var text = document.getElementById('gamecode').innerHTML = '<textarea id="runcode" rows="3" cols="20"></textarea>';
}

function run() {
    if (runpickup2 == 0) {
        alert('Du har inte använt "pickUp();" innan du körde. Försök igen!');
        grafattemptslvl2++;
        Clear();
    }
    else {
        var runnablecode = document.getElementById("runcode").value;
        eval(runnablecode);
        runcode.value = ' ';
    }
}

function Up() {
    if (robertY>0) {
        robertY--;
        drawrobert();
        console.log(robertY);
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        grafattemptslvl2++;
        Clear();
    }
}

function Down() {
    if (robertY<4) {
        robertY++;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        grafattemptslvl2++;
        Clear();
    }
}

function Right() {
    if (robertX<4) {
        robertX++;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        grafattemptslvl2++;
        Clear();
    }
}

function Left() {
    if (robertX>0) {
        robertX--;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        grafattemptslvl2++;
        Clear();
    }
}

function pickUp() {
    if (robertX == beeperX && robertY == beeperY || robertX == beeper2X && robertY == beeper2Y) {
        collectedbeepers2++;
        if (collectedbeepers2 == 2) {
            localStorage.setItem("grafattemptslvl2", grafattemptslvl2);
            timer4 = performance.now();
            ttc2 = timer3 - timer4;
            localStorage.setItem("ttc2", ttc2);
            console.log("TTC = " + ttc2 + " milliseconds.");
            lvl2completed();
        }
    }
    else {
        alert("Du har inte plockat upp alla beepers. Försök igen!");
        grafattemptslvl2++;
        Clear();
    }
}

function lvl2completed() {
    alert("Bra jobbat du är klar med spelet med grafisk feedback!");
    $("#finnishgraf").addClass("finnishgrafactive");
    if (localStorage.getItem('gameorder', gameorder) == 1) {
        document.getElementById('finnishgraf').innerHTML =  '<a href="utangrafiklvl1.html" id="lvl2">' + '<h2>Nästa spel</h2>' + '</a>';
    }
    else if (localStorage.getItem('gameorder', gameorder) == 2) {
        document.getElementById('finnishgraf').innerHTML =  '<a href="inquiry.html" id="lvl2">' + '<h2>Avsluta</h2>' + '</a>';
    }
}

/*----- spel-funktionalitet lvl 2 -----------*/

var ctx;
var robertX = 0;
var robertY = 4;
var beeperX = Math.floor((Math.random() * 4) + 1);
var beeperY = Math.floor((Math.random() * 4) + 0);
var beeper2X = Math.floor((Math.random() * 4) + 1);
var beeper2Y = Math.floor((Math.random() * 4) + 0);
var grafattemptslvl2;
var collectedbeepers2 = 0;
var lvl2done = 0;
var runpickup2 = 0;
var ttc2;
var wallcrash = 0;
var x2;
var pickupFail = 0;

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
    if (localStorage.getItem('x2', x2) == null) {
        var start = new Date();
        x2 = start.getTime();
        localStorage.setItem('x2', x2);
    }
    else {
        x2 = localStorage.getItem('x2', x2);
    }
}

function mGlvl2A() {
    if (localStorage.getItem('grafattemptslvl2', grafattemptslvl2) == null) {
        grafattemptslvl2 = 1;
        localStorage.setItem('grafattemptslvl2', grafattemptslvl2);
    }
    else {
        grafattemptslvl2 = localStorage.getItem('grafattemptslvl2', grafattemptslvl2);
    }
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
        localStorage.setItem('grafattemptslvl2', grafattemptslvl2);
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
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        grafattemptslvl2++;
        localStorage.setItem('grafattemptslvl2', grafattemptslvl2);
        resetgame();
    }
}

function Down() {
    if (robertY<4) {
        robertY++;
        drawrobert();
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        grafattemptslvl2++;
        localStorage.setItem('grafattemptslvl2', grafattemptslvl2);
        resetgame();
    }
}

function Right() {
    if (robertX<4) {
        robertX++;
        drawrobert();
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        grafattemptslvl2++;
        localStorage.setItem('grafattemptslvl2', grafattemptslvl2);
        resetgame();
    }
}

function Left() {
    if (robertX>0) {
        robertX--;
        drawrobert();
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        grafattemptslvl2++;
        localStorage.setItem('grafattemptslvl2', grafattemptslvl2);
        resetgame();
    }
}

function pickUp() {
    if (robertX == beeperX && robertY == beeperY || robertX == beeper2X && robertY == beeper2Y) {
        collectedbeepers2++;
        if (collectedbeepers2 == 2) {
            var stop = new Date();
            var y2 = stop.getTime();
            ttc2 = localStorage.getItem('x2', x2) - y2;
            ttc2 = Math.abs(ttc2);
            localStorage.setItem("ttc2", ttc2);
            lvl2completed();
        }
    }
    else {
        if (wallcrash == 1) {
            resetgame();
        }
        else {
            alert("Du har inte plockat upp alla beepers. Försök igen!");
            pickupFail = 1;
            grafattemptslvl2++;
            localStorage.setItem('grafattemptslvl2', grafattemptslvl2);
            resetgame();
        }
    }
}

function lvl2completed() {
    alert("Bra jobbat du är klar med spelet med grafisk feedback!");
    $("#gamecode, #movebuttons, #runbutton").addClass("deactivatebuttons");
    $("#finnishgraf").addClass("finnishgrafactive");
    if (localStorage.getItem('gameorder', gameorder) == 1) {
        document.getElementById('finnishgraf').innerHTML =  '<a href="utangrafiklvl1.html" id="lvl2">' + '<h2>Nästa spel</h2>' + '</a>';
    }
    else if (localStorage.getItem('gameorder', gameorder) == 2) {
        document.getElementById('finnishgraf').innerHTML =  '<a href="inquiry.html" id="lvl2">' + '<h2>Avsluta</h2>' + '</a>';
    }
}

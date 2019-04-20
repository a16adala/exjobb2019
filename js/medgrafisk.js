/*----- spel-funktionalitet lvl 1 -----------*/

var ctx;
var robertX = 0;
var robertY = 4;
var beeperX = Math.floor((Math.random() * 4) + 1);
var beeperY = Math.floor((Math.random() * 4) + 0);
var grafattemptslvl1;
var runpickup = 0;
var ttc;
var wallcrash = 0;
var pickupFail = 0;
var x;

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

function lvl1default() {
    document.getElementById('nextlevel').innerHTML = '<h2>Nästa nivå</h2>';
}

function TTC() {
    if (localStorage.getItem('x', x) == null) {
        var start = new Date();
        x = start.getTime();
        localStorage.setItem('x', x);
    }
    else {
        x = localStorage.getItem('x', x);
    }
}

function mGlvl1A() {
    if (localStorage.getItem('grafattemptslvl1', grafattemptslvl1) == null) {
        grafattemptslvl1 = 1;
        localStorage.setItem('grafattemptslvl1', grafattemptslvl1);
    }
    else {
        grafattemptslvl1 = localStorage.getItem('grafattemptslvl1', grafattemptslvl1);
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

$(document).ready(function showcode() {
    $(".movefunc").click(function showcode() {
        var movefunc = $(this).html();
        $("#runcode").append(movefunc);
    });
});

function resetgame() {
    runpickup = 0;
    location.reload();
}

function checkpick() {
    runpickup = 1;
}

function Clear() {
    showtextarea();
}

function showtextarea() {
    var text = document.getElementById('gamecode').innerHTML = '<textarea id="runcode" rows="3" cols="20"></textarea>';
}

function run() {
    if (runpickup == 0) {
        alert('Du har inte använt "pickUp();" innan du körde. Försök igen!');
        grafattemptslvl1++;
        localStorage.setItem('grafattemptslvl1', grafattemptslvl1);
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
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        grafattemptslvl1++;
        localStorage.setItem('grafattemptslvl1', grafattemptslvl1);
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
        grafattemptslvl1++;
        localStorage.setItem('grafattemptslvl1', grafattemptslvl1);
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
        grafattemptslvl1++;
        localStorage.setItem('grafattemptslvl1', grafattemptslvl1);
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
        grafattemptslvl1++;
        localStorage.setItem('grafattemptslvl1', grafattemptslvl1);
        resetgame();
    }
}

function pickUp() {
    if (robertX == beeperX && robertY == beeperY) {
        var stop = new Date();
        var y = stop.getTime();
        ttc = localStorage.getItem('x', x) - y;
        ttc = Math.abs(ttc);
        localStorage.setItem('ttc', ttc);
        lvl1completed();
    }
    else {
        if (wallcrash == 1) {
            resetgame();
        }
        else {
            alert("Du har inte plockat upp beepern. Försök igen!");
            pickupFail = 1;
            grafattemptslvl1++;
            localStorage.setItem('grafattemptslvl1', grafattemptslvl1);
            resetgame();
        }
    }
}

function lvl1completed() {
    alert("Bra jobbat du är klar med första nivån!");
    $("#gamecode, #movebuttons, #runbutton").addClass("deactivatebuttons");
    $("#nextlevel").addClass("nextlevelactive");
    document.getElementById('nextlevel').innerHTML =  '<a href="medgrafiklvl2.html" id="lvl2">' + '<h2>Nästa nivå</h2>' + '</a>';
}

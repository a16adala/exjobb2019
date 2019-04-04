/*----- spel-funktionalitet lvl 1 -----------*/

var ctx;
var robertX = 0;
var robertY = 4;
var beeperX = Math.floor((Math.random() * 4) + 1);
var beeperY = Math.floor((Math.random() * 4) + 0);
var grafattemptslvl1 = 1;
var lvl1done = 0;
var timer;
var timer2;
var picked;
var collectedbeepers = 0;
var runpickup = 0;

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
    timer = performance.now();
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

function run() {
    if (runpickup == 0) {
        alert('Du har inte använt "pickUp();" innan du körde. Försök igen!');
        resetgame()
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
        grafattemptslvl1++;
        resetgame();
    }
}

function Down() {
    if (robertY<4) {
        robertY++;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        grafattemptslvl1++;
        resetgame();
    }
}

function Right() {
    if (robertX<4) {
        robertX++;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        grafattemptslvl1++;
        resetgame();
    }
}

function Left() {
    if (robertX>0) {
        robertX--;
        drawrobert();
    } else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        grafattemptslvl1++;
        resetgame();
    }
}

function pickUp() {
    if (robertX == beeperX && robertY == beeperY) {
        localStorage.setItem("grafattemptslvl1", grafattemptslvl1);
        timer2 = performance.now();
        var ttc = timer - timer2;
        console.log("TTC = " + ttc + " milliseconds.");
        lvl1done = 1;
        lvl1completed();
        console.log(grafattemptslvl1);
    }
    else {
        alert("Du har inte plockat upp beepern. Försök igen!");
        grafattemptslvl1++;
        resetgame();
    }
}

function lvl1completed() {
    //drawrobert();
    alert("Bra jobbat du är klar med första nivån!");
    lvl1done = 1;
    $("#nextlevel").addClass("nextlevelactive");
    document.getElementById('nextlevel').innerHTML =  '<a href="medgrafiklvl2.html" id="lvl2">' + '<h2>Nästa nivå</h2>' + '</a>';
}

function nextlevel() {
    if (lvl1done == 1) {
        alert("level2");
    }
    else {
        console.log("inte klar");
    }
}

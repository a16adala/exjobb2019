/*----- spel-funktionalitet lvl 2 -----------*/

var ctx;
var robertX = 0;
var robertY = 4;
var beeperX = Math.floor((Math.random() * 4) + 1);
var beeperY = Math.floor((Math.random() * 4) + 0);
var beeper2X = Math.floor((Math.random() * 4) + 1);
var beeper2Y = Math.floor((Math.random() * 4) + 0);
var attemptslvl2;
var collectedbeepers2 = 0;
var textlvl2done = 0;
var runpickup2 = 0;
var ttc4;
var wallcrash = 0;
var x4;
var pickupFail = 0;

document.addEventListener('DOMContentLoaded',initcanvas2,false);

function initcanvas2() {
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
    drawrobert2();
    beeperfix();
    drawBeeper2();
}

function lvl2default2() {
    document.getElementById('finnishtext').innerHTML = '<h2>Avsluta</h2>';
}

function TTC2() {
    if (localStorage.getItem('x4', x4) == null) {
        var start = new Date();
        x4 = start.getTime();
        localStorage.setItem('x4', x4);
    }
    else {
        x = localStorage.getItem('x4', x4);
    }
}

function uGlvl2A() {
    if (localStorage.getItem('attemptslvl2', attemptslvl2) == null) {
        attemptslvl2 = 1;
        localStorage.setItem('attemptslvl2', attemptslvl2);
    }
    else {
        attemptslvl2 = localStorage.getItem('attemptslvl2', attemptslvl2);
    }
}

function drawrobert2() {
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

function storebeeperpos2() {
    document.getElementById('beeperX').innerHTML = beeperX;
    document.getElementById('beeperY').innerHTML = beeperY;
    document.getElementById('beeper2X').innerHTML = beeper2X;
    document.getElementById('beeper2Y').innerHTML = beeper2Y;
}

function drawBeeper2() {
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
    $(".movefunc2").click(function showcode() {
        var movefunc2 = $(this).html();
        $("#runcode").append(movefunc2);
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

function run2() {
    if (runpickup2 == 0) {
        alert('Du har inte använt "pickUp();" innan du körde. Försök igen!');
        attemptslvl2++;
        localStorage.setItem('attemptslvl2', attemptslvl2);
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
        drawrobert2();
        console.log(robertY);
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        attemptslvl2++;
        localStorage.setItem('attemptslvl2', attemptslvl2);
        resetgame();
    }
}

function Down() {
    if (robertY<4) {
        robertY++;
        drawrobert2();
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        attemptslvl2++;
        localStorage.setItem('attemptslvl2', attemptslvl2);
        resetgame();
    }
}

function Right() {
    if (robertX<4) {
        robertX++;
        drawrobert2();
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        attemptslvl2++;
        localStorage.setItem('attemptslvl2', attemptslvl2);
        resetgame();
    }
}

function Left() {
    if (robertX>0) {
        robertX--;
        drawrobert2();
    }
    else if (pickupFail == 1) {
        resetgame();
    }
    else {
        alert("Det verkar som Robert gick rakt in i en vägg och gick sönder. Försök igen!");
        wallcrash = 1;
        attemptslvl2++;
        localStorage.setItem('attemptslvl2', attemptslvl2);
        resetgame();
    }
}

function pickUp() {
    if (robertX == beeperX && robertY == beeperY || robertX == beeper2X && robertY == beeper2Y) {
        collectedbeepers2++;
        if (collectedbeepers2 == 2) {
            var stop = new Date();
            var y4 = stop.getTime();
            ttc4 = localStorage.getItem('x4', x4) - y4;
            ttc4 = Math.abs(ttc4);
            localStorage.setItem("ttc4", ttc4);
            lvl2completed2();
        }
    }
    else {
        if (wallcrash == 1) {
            resetgame();
        }
        else {
            alert("Du har inte plockat upp alla beepers. Försök igen!");
            attemptslvl2++;
            localStorage.setItem('attemptslvl2', attemptslvl2);
            resetgame();
        }
    }
}

function lvl2completed2() {
    alert("Bra jobbat du är klar med spelet utan grafisk feedback!");
    $("#gamecode, #movebuttons, #runbutton").addClass("deactivatebuttons");
    $("#finnishtext").addClass("finnishtextactive");
    if (localStorage.getItem('gameorder', gameorder) == 2) {
        document.getElementById('finnishtext').innerHTML =  '<a href="medgrafiklvl1.html" id="lvl2">' + '<h2>Nästa spel</h2>' + '</a>';
    }
    else if (localStorage.getItem('gameorder', gameorder) == 1) {
        document.getElementById('finnishtext').innerHTML =  '<a href="inquiry.html" id="lvl2">' + '<h2>Avsluta</h2>' + '</a>';
    }
}

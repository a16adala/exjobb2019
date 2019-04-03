var gameorder;
var username;
var savedname = 0;

function startgame() {
    $("#firstpage").hide();
    $("#secondarybody").show()
    document.title = "Instruktioner";
}

function pagedefault() {
    document.title = "Välkommen";
    $("#secondarybody").hide();
    $('#medgrafikpage').hide();
    $('#utangrafikpage').hide();
    //$('.speldiven').hide();
}

function savename() {
    username = document.getElementById("saveusername").value;
    var nameok = confirm("Är du säker på att du vill heta " + username + " ?");
    if (nameok == true ) {
        localStorage.setItem("username", username);
        savedname = 1;
    }
}

function printstats() {
    document.getElementById("username").innerHTML = '<h2>Namn:</h2> ' +  '<h3>' + localStorage.getItem("username", username) + '</h3>';
    document.getElementById("tidmedgrafik").innerHTML = '<h2>Tid på spelet med grafik:</h2> ';
    document.getElementById("tidutangrafik").innerHTML = '<h2>Tid på spelet utan grafik:</h2> ';
}

function gameshuffler() {
    gameorder = Math.floor((Math.random() * 2) + 1);
    //gameorder = 1;
    if (gameorder == 1) {
        var gameshuffle = '<img src="pictures/medgrafisk.png" id="imgleft" onclick="clickgame()">' +
                '<img src="pictures/arrow.png" id="imgcentre">' +
                '<img src="pictures/utangrafisk.png" id="imgright">;';
        document.getElementById("gameholder").innerHTML = gameshuffle;
    }
    else {
         var gameshuffle = '<img src="pictures/utangrafisk.png" id="imgleft" onclick="clickgame()">' +
                '<img src="pictures/arrow.png" id="imgcentre">' +
                '<img src="pictures/medgrafisk.png" id="imgright">;';
        document.getElementById("gameholder").innerHTML = gameshuffle;
    }
}

function hidemainpage() {
    if (savedname == 0) {
        alert('Du har inte fyllt i ditt namn');
    }
    else {
        correctgame();
        $(".imglarge").hide();
        $(".longtext").hide();
        $(".bigtext").hide();
        $("#textheader").hide();
        $("#secondarybody").hide();
    }
}

function correctgame() {
    //$('.speldiven').show();
    if (gameorder == 1) {
        gameorder == document
        document.title = 'Med grafisk feedback';
        /* var gamepreview = '';
        document.getElementById("gamepreview").innerHTML = gamepreview;*/
        $('#medgrafikpage').show();
        $('#utangrafikpage').hide();
    }
    else {
        document.title = 'Utan grafisk feedback';
        /*var gamepreview = '';
        document.getElementById("gamepreview").innerHTML = gamepreview;*/
        $('#medgrafikpage').hide();
        $('#utangrafikpage').show();
    }
}

function medgrafik() {
    console.log('medgrafik');
    var mgrafik = '<a href ="medgrafiklvl1.html">' + '<h1>Gå vidare</h1>' + '</a>';
    document.getElementById("vidare3").innerHTML = mgrafik;
}

function utangrafik() {
    console.log('utangrafik');
    var mgrafik = '<a href ="utangrafiklvl1.html">' + '<h1>Gå vidare</h1>' + '</a>';
    document.getElementById("vidare4").innerHTML = mgrafik;
}

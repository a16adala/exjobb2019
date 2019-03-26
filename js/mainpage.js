var gameorder = 1;

function startgame() {
    $("#firstpage").hide();
    $("#secondarybody").show()
    document.title = "Instruktioner";
}

function pagedefault() {
    document.title = "Välkommen";
    $("#secondarybody").hide();
    $('#medgrafikpage').hide();
    $('.speldiven').hide();
}

function savename() {
    var username = document.getElementById("saveusername").value;
    var nameok = confirm("Är du säker på att du vill heta " + username + " ?");
    if (nameok == true ) {
        localStorage.setItem("username", username);
    }
}

function printname() {
    document.getElementById("username").innerHTML = localStorage.getItem("username", username);
}

function gameshuffler() {
    //gameorder = Math.floor((Math.random() * 2) + 1);
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
    $(".imglarge").hide();
    $(".longtext").hide();
    $(".bigtext").hide();
    $("#textheader").hide();
    $("#secondarybody").hide()
}

function correctgame() {
    if (gameorder == 1) {
        document.title = 'Med grafisk feedback';
        /* var gamepreview = '';
        document.getElementById("gamepreview").innerHTML = gamepreview;*/
        $('#medgrafikpage').show()
        $('#utangrafikpage').hide()
    }
    else {
        document.title = 'Utan grafisk feedback';
        /*var gamepreview = '';
        document.getElementById("gamepreview").innerHTML = gamepreview;*/
        $('#medgrafikpage').hide()
        $('#utangrafikpage').show()
    }
}

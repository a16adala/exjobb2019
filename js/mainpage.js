function startgame() {
    $(".imglarge").hide();
    $(".longtext").hide();
    $(".bigtext").hide();
    $("#textheader").hide();
    $("#secondarybody").show()
    document.title = "Instruktioner";
}

function pagedefault() {
    document.title = "Välkommen";
    $("#secondarybody").hide();
}

$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#changeButton").click(function() {
        $("#firstText").text("Text changed using jQuery!");
        $("#htmlText").html("<strong>This is bold text.</strong>");
    });

    $("#styleButton").click(function() {
        $(".demoText").css("color", "blue");
        $(".demoText").css("fontSize", "20px");
        $("h3").css("color", "green");
    });
});

$(document).ready(function() {
    $("#hideButton").click(function() {
        $("#visibilityText").hide();
    });

    $("#showButton").click(function() {
        $("#visibilityText").show();
    });

    $("#toggleButton").click(function() {
        $("#visibilityText").toggle();
    });
    
    $("#fadeInButton").click(function() {
        $("#fadeImage").fadeIn(1000);
    });
    
    $("#fadeOutButton").click(function() {
        $("#fadeImage").fadeOut(1000);
    });
    
    $("#fadeToggleButton").click(function() {
        $("#fadeImage").fadeToggle(1000);
    });
});

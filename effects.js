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
});

$(document).ready(function() {
    $("#basicButton").click(function() {
        $("#basicBox").animate({
            left: "150px",
            width: "100px",
            height: "100px"
        }, 1000);
    });

    $("#basicReset").click(function() {
        $("#basicBox").stop(true, true).css({
            left: "0px",
            width: "60px",
            height: "60px"
        });
    });
});

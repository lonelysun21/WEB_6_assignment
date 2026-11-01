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
    $("#sequenceButton").click(function() {
        $("#sequenceBox").stop(true, true).css({
            left: "0px",
            top: "0px",
            width: "60px",
            height: "60px"
        });
    
        $("#sequenceBox")
            .animate({left: "160px"}, 700)
            .animate({top: "100px"}, 700)
            .animate({
                width: "30px",
                height: "30px"
            }, 700)
            .animate({
                left: "0px",
                top: "0px",
                width: "60px",
                height: "60px"
            }, 700);
    });
    
    $("#sequenceReset").click(function() {
        $("#sequenceBox").stop(true, true).css({
            left: "0px",
            top: "0px",
            width: "60px",
            height: "60px"
        });
    });
});

$(document).ready(function() {
    let itemCount = 1;

    $("#appendButton").click(function() {
        itemCount++;
        $("#itemList").append("<li>Item " + itemCount + "</li>");
    });

    $("#prependButton").click(function() {
        itemCount++;
        $("#itemList").prepend("<li>Item " + itemCount + "</li>");
    });

    $("#removeButton").click(function() {
        $("#itemList li:last").remove();
    });
    $("#imageButton").click(function() {
        $("#changeImage").attr(
            "src",
            "https://placehold.co/300x180/e67e22/ffffff?text=Second+Image"
        );
    });
    
    $("#linkButton").click(function() {
        $("#changeLink").attr("href", "https://www.wikipedia.org");
        $("#changeLink").text("Visit Wikipedia");
    });
});

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
});

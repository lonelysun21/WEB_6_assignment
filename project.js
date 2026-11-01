$(document).ready(function() {
    $(".accordion-header").click(function() {
        let content = $(this).next(".accordion-content");

        if (content.is(":visible")) {
            content.slideUp(400);
            $(this).removeClass("active");
        } else {
            $(".accordion-content").slideUp(400);
            $(".accordion-header").removeClass("active");

            content.slideDown(400);
            $(this).addClass("active");
        }
    });
});

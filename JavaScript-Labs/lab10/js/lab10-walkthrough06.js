
$(function () {
    // Fade In
    $("#btnFadeIn").click(function () {
        $("figure").fadeIn(1000);
    });

    // Fade Out
    $("#btnFadeOut").click(function () {
        $("figure").fadeOut(1000);
    });

    // Toggle Fade
    $("#btnFade").click(function () {
        $("figure").fadeToggle(500);
    });

    // Slide Down
    $("#btnSlideDown").click(function () {
        $("figure").slideDown("slow");
    });

    // Slide Up
    $("#btnSlideUp").click(function () {
        $("figure").slideUp("slow");
    });

    // Toggle Slide
    $("#btnSlide").click(function () {
        $("figure").slideToggle(2000);
    });
});

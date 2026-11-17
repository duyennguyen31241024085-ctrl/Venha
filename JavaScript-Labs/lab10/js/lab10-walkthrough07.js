
$(function () {

    // Display a larger image when the mouse moves over a small image
    $('figure img').on('mouseover', function (e) {

        // Get image information
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // Create the preview element
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');

        preview.append(image);
        preview.append(caption);
        $('body').append(preview);

        // Change the small image to grayscale
        $(this).addClass("gray");

        // Display the preview
        $("#preview").fadeIn(1000);
    });

    // Remove the preview when the mouse leaves the image
    function removePreview() {
        $(this).removeClass("gray");
        $("#preview").remove();
    }

    // Move the preview according to mouse coordinates
    function movePreview(e) {
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }

    // Register mouse events
    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);

});

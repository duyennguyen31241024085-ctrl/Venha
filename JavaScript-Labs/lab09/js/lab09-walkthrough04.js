
function simpleHandler(event) {
    var content = document.getElementById("content");

    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";

        // Hide the content after 1000 milliseconds
        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        // Restore the original style after 500 milliseconds
        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

var img = document.getElementById("mainImage");

/* Change image style when mouse moves over it */
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

/* Restore image style when mouse leaves it */
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});

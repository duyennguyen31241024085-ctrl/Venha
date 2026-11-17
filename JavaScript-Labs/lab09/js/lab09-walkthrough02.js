
var stories = document.getElementById("stories");

for (var i = 0; i < stories.childNodes.length; i++) {
    console.log(
        "child " + i + " =" + stories.childNodes[i] +
        " nodeType=" + stories.childNodes[i].nodeType
    );

    // Change background color of element nodes
    if (stories.childNodes[i].nodeType === 1) {
        stories.childNodes[i].style.backgroundColor = "#f5f5a6";
    }
}

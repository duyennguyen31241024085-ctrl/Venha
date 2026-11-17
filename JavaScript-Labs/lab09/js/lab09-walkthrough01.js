/* code goes here */
/* Select textarea by ID and change its value */
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

/* Change page title */
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

document.getElementById("pageTitle").innerHTML = "Even newer title";

/* Get HTML content and text content */
msg.value = document.getElementById("first").innerHTML;
msg.value = document.getElementById("first").innerText;

/* Get attribute value */
msg.value = "My class is " + msg.getAttribute("class");

/* Select elements by tag name */
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

/* Select all span elements */
elem = document.getElementsByTagName("span");
for (var i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}

/* Select elements by class name */
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");

for (var i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}

/* Select the first paragraph */
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

/* Select all paragraphs */
ps = document.querySelectorAll("#first p");

for (var i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}

/* Change textarea class */
document.getElementById("msgArea").setAttribute("class", "hidden");

/* Change features background color */
document.getElementById("features").style.backgroundColor = "green";

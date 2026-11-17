
/* Set up event listeners when the page is loaded */
function init() {
    document.getElementById("sampleForm").addEventListener("submit", checkForEmptyFields);
}

window.addEventListener("load", init);

/* Check whether form fields are empty */
function checkForEmptyFields(e) {
    // Hide the error message area
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";

    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    var fieldList = [];

    // Find empty input fields
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == null || fields[i].value == "") {
            e.preventDefault();
            fieldList.push(fields[i]);
        }
    }

    // Display the error message
    var msg = "The following fields can't be empty: ";

    if (fieldList.length > 0) {
        for (var i = 0; i < fieldList.length; i++) {
            msg += fieldList[i].id + ",";
        }

        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
}

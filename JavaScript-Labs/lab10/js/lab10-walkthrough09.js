
$(function () {
    $("#consume").click(function () {
        var url = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        // Create an empty list
        $("#results").html("<ul></ul>");

        // Send GET request to the web service
        $.get(url, function (data, status) {
            if (status == "success") {

                // Loop through the returned JSON data
                $.each(data, function (index, value) {
                    var li = $("<li/>").html(value.name);
                    li.appendTo("#results ul");
                });

            } else {
                $("#results").html("Unable to retrieve city data.");
            }
        });
    });
});

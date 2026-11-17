
$(function () {
    // Hide the loading animation initially
    $('.animLoading').hide();

    $("#consume").click(function () {
        // Show the loading animation
        $('.animLoading').show();

        var url = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $.get(url)

            // Execute when data is loaded successfully
            .done(function (data) {
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })

            // Execute when an error occurs
            .fail(function (xhr, status, error) {
                alert("failed loading data - status=" + status +
                    " error=" + error);
            })

            // Always execute after success or failure
            .always(function (data) {
                $('.animLoading').fadeOut("slow");
            });
    });
});

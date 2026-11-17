
/* Select the textarea and change its value */
var msg = $('#msgArea');
msg.val("here is some new text");

/* Change the HTML content of the first row */
$('#first').html("new Title");

/* Get the class attribute of the textarea */
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

/* Select all buttons and change their background color */
var buttons = $('button');
buttons.css('background-color', 'red');

/* Select the body and change its background color */
var temp = $('body');
temp.css("background-color", "ivory");

/* Add a class to all elements with center-icons class */
$('.center-icons').addClass('selected');

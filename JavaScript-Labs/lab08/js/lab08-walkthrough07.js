var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");

daysOfWeek.push("Sat");

document.write("<table border=1>");
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
    day = daysOfWeek[i];
else
    day = "<em>" + daysOfWeek[i] + "</em>";

document.write("<th>" + day + "</th>");
}

document.write("</tr>");
for (var weekStart = 1; weekStart <= 30; weekStart += 7) {
    document.write("<tr>");

    for (var date = weekStart; date < weekStart + 7 && date <= 30; date++) {
        document.write("<td>" + date + "</td>");
    }

    document.write("</tr>");
}
document.write("</table>");
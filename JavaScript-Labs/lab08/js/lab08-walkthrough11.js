
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257),
    new Country("Spain", "ES", "Madrid", 46505963),
    new Country("United Kingdom", "GB", "London", 62348447)
];

// display country names
for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    var temp = "name";
    document.write(c[temp] + "<br>");
}

// display country information
document.write("<hr>");

for (var i = 0; i < countries.length; i++) {
    var c = countries[i];

    document.write("<div class='box'>");
    document.write("<img src='flags/" + c.iso + ".png' class='boxImg'>");

    for (var propertyName in c) {
        document.write("<strong>" + propertyName + ": </strong>");
        document.write(c[propertyName] + "<br>");
    }

    document.write("</div>");
}

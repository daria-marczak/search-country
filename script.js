var url = "https://restcountries.eu/rest/v1/name/";
var countriesList = $("#countries");

$("#search").click(searchCountries);

function searchCountries() {
    var countryName = $("#country-name").val();
    if (!countryName.length) countryName = "France";

    $.ajax({
        url: url + countryName,
        method: "GET",
        success: showCountriesList
    });

    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item) {
            var countriesBox = $("<div>").addClass("box").appendTo(countriesList);
            var flagBox = $("<span>").text(item.flags).addClass("flag").appendTo(flagBox);
            $("<h3>").text(item.name).appendTo(countriesBox);
            $("<p>").text("Country's capital is " + item.capital).appendTo(countriesBox);
            $("<p>").text("The country currency is " + item.currencies).appendTo(countriesBox);
            $("<p>").text("People of " + item.name + " speak " + item.languages.name).appendTo(countriesBox);
        });
    }
}

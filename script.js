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
	    resp.forEach(function(item){
	   		$("<h3>").text(item.name).appendTo(countriesList);
	   		$("<p>").text("Country's capital is " + item.capital).appendTo(countriesList);
	   		$("<p>").text("The country currency is " + item.currencies).appendTo(countriesList);
	   		$("<p>").text("People of " + item.name + " speaks " + item.languages).appendTo(countriesList);
		});
    }
}

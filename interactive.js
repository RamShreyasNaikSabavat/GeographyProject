$(document).ready(function () {
    // Fetch data from the JSON file
    $.getJSON("facts.json", function (data) {
        // Get the ul element where we will add the facts
        const factList = $("#factList");

        // Populate the list with facts
        data.facts.forEach((fact) => {
            const listItem = $("<li>").text(fact);
            factList.append(listItem);
        });
    });
});

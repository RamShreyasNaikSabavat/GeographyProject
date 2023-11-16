$(document).ready(function () {
            // Array of facts about the Nile and Ancient Egypt
            const facts = [
                "The Nile provided fertile soil for agriculture.",
                "It served as a natural transportation route.",
                // Add more facts here
            ];

            // Get the ul element where we will add the facts
            const factList = $("#factList");

            // Populate the list with facts using jQuery
            $.each(facts, function (index, fact) {
                const listItem = $("<li>").text(fact);
                factList.append(listItem);
            });
        });

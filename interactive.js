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

$(document).ready(function () {
    const slideshowContainer = $("#slideshow-container");
    let currentIndex = 0;

    // Fetch data from the JSON file
    $.getJSON("gallery.json", function (data) {
        // Dynamically create slides
        data.gallery.forEach((imageObj, index) => {
            const slide = $("<div>").addClass("slide");
            const image = $("<img>").attr("src", imageObj.imageUrl).attr("alt", imageObj.caption);
            const caption = $("<div>").addClass("caption").text(imageObj.caption);

            slide.append(image, caption);
            slideshowContainer.append(slide);
        });

        // Display the first slide
        $(".slide").eq(currentIndex).css("display", "block");

        // Start the slideshow
        setInterval(showNextSlide, 3000); // Change the interval as needed

        function showNextSlide() {
            // Hide the current slide
            $(".slide").eq(currentIndex).fadeOut("slow");

            // Move to the next slide
            currentIndex = (currentIndex + 1) % data.gallery.length;

            // Display the next slide
            $(".slide").eq(currentIndex).fadeIn("slow");
        }
    });
});

// Dynamically generate and display quiz questions
const quizContainer = $("#quizContainer");

$.getJSON("quiz.json", function (data) {
    data.quiz.forEach((questionObj, index) => {
        const questionDiv = $("<div>").addClass("question");
        const questionText = $("<p>").text(`${index + 1}. ${questionObj.question}`);
        questionDiv.append(questionText);

        // Generate and append options (radio buttons, etc.)
        // Add event listeners to check user answers
        // Update the UI based on correct/incorrect answers
        
        quizContainer.append(questionDiv);
    });
});

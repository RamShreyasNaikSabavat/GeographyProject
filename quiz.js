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

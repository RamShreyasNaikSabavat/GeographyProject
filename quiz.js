// Dynamically generate and display quiz questions
const quizContainer = $("#quizContainer");

$.getJSON("quiz.json", function (data) {
    data.quiz.forEach((questionObj, index) => {
        const questionDiv = $("<div>").addClass("question");
        const questionText = $("<p>").text(`${index + 1}. ${questionObj.question}`);
        questionDiv.append(questionText);

        // Generate and append options (radio buttons, etc.)
        questionObj.options.forEach((option, optionIndex) => {
            const optionInput = $("<input>")
                .attr("type", "radio")
                .attr("name", `question_${index}`)
                .attr("value", option)
                .attr("id", `option_${index}_${optionIndex}`);

            const optionLabel = $("<label>").text(option).attr("for", `option_${index}_${optionIndex}`);

            questionDiv.append(optionInput, optionLabel);
        });

        // Add event listeners to check user answers
        $("input[name='question_" + index + "']").on("change", function () {
            const selectedAnswer = $(this).val();
            checkAnswer(questionObj.correctAnswer, selectedAnswer);
        });

        quizContainer.append(questionDiv);
    });

    // Function to check the user's answer and update the UI
    // Function to check the user's answer and update the UI
    function checkAnswer(correctAnswer, selectedAnswer) {
        const feedbackDiv = $("<div>").addClass("feedback");
        
        if (correctAnswer === selectedAnswer) {
            // Correct answer
            console.log("Correct answer!");
            feedbackDiv.text("Correct! Well done.");
            feedbackDiv.addClass("correct");
        } else {
            // Incorrect answer
            console.log("Incorrect answer!");
            feedbackDiv.text(`Incorrect. The correct answer is: ${correctAnswer}.`);
            feedbackDiv.addClass("incorrect");
        }
    
        // Append feedback to the question div
        $(this).closest(".question").append(feedbackDiv);
    
        // Optionally, you can disable further interactions with this question
        $(this).closest(".question").find("input").attr("disabled", true);
    }

});

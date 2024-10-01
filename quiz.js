// Function to check the user's answer
function checkAnswer() {
    // The correct answer for the quiz
    const correctAnswer = "4";

    // Get the selected answer by querying for the checked radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if any option is selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    // Get the value of the selected answer
    const userAnswer = selectedOption.value;

    // Provide feedback based on whether the user's answer is correct or not
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";  // Add color for correct feedback
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";    // Add color for incorrect feedback
    }
}

// Add event listener to the submit button using document.querySelector
document.querySelector("#submit-answer").addEventListener('click', checkAnswer);

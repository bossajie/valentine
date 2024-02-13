let currentStep = 0;
const questions = [
    "Where did we first meet?",
    "What is the date of our anniversary?",
    "What is the name of our baby?",
    "What is your favorite food?",
    "Babe. Will you be my Valentine?"
];

function displayQuestion() {
    if (currentStep < questions.length - 1) {
        document.getElementById("question").innerHTML = `
            <p>${questions[currentStep]}</p>
            <input type="text" id="answerInput" placeholder="Type your answer here..." autocomplete="off">
            <br />
            <button onclick="submitAnswer()">Submit</button>
        `;
    } else if (currentStep === questions.length - 1) {

        document.getElementById("question").innerHTML = `<div id="countdown">Ready?</div>`;
        startCountdown();
    } else {
        document.getElementById("questionnaire").innerHTML = "<h2>Thank you for your answers! Happy Valentine's Day! 💖</h2>";
    }
}

function startCountdown() {
    let countdownNumber = 5; // Countdown from 5 seconds
    let countdownElement = document.getElementById("countdown");
    countdownElement.innerText = `Get ready... ${countdownNumber}s`;

    let countdownInterval = setInterval(() => {
        countdownNumber--;
        countdownElement.innerText = `Get ready... ${countdownNumber}s`;
        if (countdownNumber <= 0) {
            clearInterval(countdownInterval);
            showFinalQuestion();
        }
    }, 1000);
}

function showFinalQuestion() {
     // Play the background music when the final question is shown
 let backgroundMusic = document.getElementById("backgroundMusic");
 backgroundMusic.play().catch(e => console.error("Audio play failed:", e));
    document.getElementById("question").innerHTML = `
    <p id="finalQuestion" class="heartbeat">${questions[questions.length - 1]}</p>
    <button onclick="answerYes()">Yes</button>
    <button onclick="answerNo()">No</button>
`;

}



function submitAnswer() {
    if (currentStep < questions.length - 1) {
        const answer = document.getElementById("answerInput").value;
        console.log(`Answered '${answer}' to question ${currentStep + 1}`);
    }
    currentStep++;
    displayQuestion();
}

function specialInteraction() {
    // Implement any special interaction for the final question here
    // For example, making the input field change color, expand, or display a special message
    document.getElementById("answerInput").style.border = "2px solid red";
}

// Initialize the first question
function init() {
    displayQuestion(); // Call this function directly to initialize the first question
}

function answerYes() {
    document.getElementById("questionnaire").innerHTML = `
        <h2>Great! Here are the details for our date:</h2>
        <p>February 16, 7:30 PM<br>
        Gab's Yard Steak House and Grill</p>
        <p>Looking forward to it! 💖</p>
    `;
}

function answerNo() {
    document.getElementById("questionnaire").innerHTML = "<h2>That's okay, maybe another time! 💔</h2>";
}

document.addEventListener('DOMContentLoaded', init);

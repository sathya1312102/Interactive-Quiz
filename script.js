function submitQuiz() {
    let score = 0;

    
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    const q5Answer = document.querySelector('input[name="q5"]:checked');

    
    if (q1Answer && q1Answer.value === "A") {
        score++;
    }
    if (q2Answer && q2Answer.value === "A") {
        score++;
    }
    if (q3Answer && q3Answer.value === "A") {
        score++;
    }
    if (q4Answer && q4Answer.value === "A") {
        score++;
    }
    if (q5Answer && q5Answer.value === "C") {
        score++;
    }

    
    document.getElementById("score").innerText = "Score: " + score;
    
    
    document.getElementById("quiz").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
}
// 🔽 SCROLL BUTTON
function scrollToSection() {
    document.getElementById("checker").scrollIntoView({
        behavior: "smooth"
    });
}

// 🧪 SYMPTOM CHECKER
function checkDisease() {
    let fever = document.getElementById("fever").checked;
    let cough = document.getElementById("cough").checked;
    let fatigue = document.getElementById("fatigue").checked;
    let headache = document.getElementById("headache").checked;

    let result = "";

    if (fever && cough) {
        result = "⚠ Possible Flu or Viral Infection";
    } 
    else if (fatigue && headache) {
        result = "⚠ Possible Stress or Migraine";
    } 
    else if (fever && fatigue) {
        result = "⚠ Possible Infection";
    } 
    else {
        result = "✔ No major symptoms detected. Stay healthy!";
    }

    document.getElementById("result").innerText = result;
}

// 🧠 QUIZ (FIXED)
let score = 0;
let answered = 0;

function checkAnswer(answer) {
    answered++;

    if (answer === 1) {
        score++;
    }

    document.getElementById("score").innerText =
        "Score: " + score + " / " + answered;
}

// 📊 CHART (WORKING VERSION)
window.addEventListener("load", function () {
    const canvas = document.getElementById("myChart");

    if (canvas) {
        const ctx = canvas.getContext("2d");

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Fever', 'Cough', 'Headache', 'Fatigue'],
                datasets: [{
                    label: 'Common Symptoms (%)',
                    data: [70, 60, 50, 65],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
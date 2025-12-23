// 문제 정답 설정 (true = 예, false = 아니오)
const answers = [true, true, true, true, true];

let score = 0;

// 모든 문제(h5) 가져오기
const questions = document.querySelectorAll("h5");

// 결과 텍스트
const passText = document.querySelector("h3:nth-last-of-type(2)");
const failText = document.querySelector("h3:last-of-type");

// 처음엔 숨김
passText.style.display = "none";
failText.style.display = "none";

questions.forEach((question, qIndex) => {
    const yesBtn = question.nextElementSibling;
    const noBtn = yesBtn.nextElementSibling;

    let answered = false;

    function handleAnswer(isYes) {
        if (answered) return;
        answered = true;

        const result = document.createElement("span");
        result.style.marginLeft = "10px";
        result.style.fontSize = "20px";
        result.style.fontWeight = "bold";

        if (isYes === answers[qIndex]) {
            result.textContent = "⭕";
            result.style.color = "#2e7d32";
            score++;
        } else {
            result.textContent = "❌";
            result.style.color = "#c62828";
        }

        question.appendChild(result);

        yesBtn.disabled = true;
        noBtn.disabled = true;

        // 모든 문제를 풀었는지 확인
        const solvedCount = document.querySelectorAll("span").length;
        if (solvedCount === answers.length) {
            if (score >= 3) {
                passText.style.display = "block";
            } else {
                failText.style.display = "block";
            }
        }
    }

    yesBtn.addEventListener("click", () => handleAnswer(true));
    noBtn.addEventListener("click", () => handleAnswer(false));
});

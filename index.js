// 문제 & 정답 (true = 예, false = 아니오)
const quiz = [
    { question: "스마트팜은 아두이노로 제작하였다.", answer: true },
    { question: "아두이노는 조도센서, 초음파 센서, 온습도 센서를 사용한다.", answer: false },
    { question: "센서는 환경 정보를 측정한다.", answer: true },
    { question: "AI를 사용하여 레시피 추천 시스템을 도입하였다.", answer: false },
    { question: "스마트팜은 자동 제어가 가능하다.", answer: true }
];

let current = 0;
let score = 0;
let answered = false;

// 요소 가져오기
const questionEl = document.getElementById("question");
const resultEl = document.getElementById("result");
const finalResultEl = document.getElementById("finalResult");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextBtn = document.getElementById("nextBtn");

// 첫 문제 출력
showQuestion();

function showQuestion() {
    questionEl.textContent = quiz[current].question;
    resultEl.textContent = "";
    answered = false;
}

// 정답 처리 함수
function checkAnswer(userAnswer) {
    if (answered) return;
    answered = true;

    if (userAnswer === quiz[current].answer) {
        resultEl.textContent = "⭕ 정답입니다!";
        resultEl.style.color = "green";
        score++;
    } else {
        resultEl.textContent = "❌ 오답입니다!";
        resultEl.style.color = "red";
    }
}

// 버튼 이벤트
yesBtn.addEventListener("click", () => checkAnswer(true));
noBtn.addEventListener("click", () => checkAnswer(false));

nextBtn.addEventListener("click", () => {
    if (!answered) {
        alert("정답을 선택해주세요!");
        return;
    }

    current++;

    if (current < quiz.length) {
        showQuestion();
    } else {
        // 테스트 종료
        questionEl.style.display = "none";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        nextBtn.style.display = "none";
        resultEl.style.display = "none";

        if (score >= 3) {
            finalResultEl.textContent = "🎉 합격입니다! 열쇠를 획득했습니다!";
            finalResultEl.style.color = "green";
        } else {
            finalResultEl.textContent = "❌ 불합격입니다. 다시 도전해보세요!";
            finalResultEl.style.color = "red";
        }
    }
});

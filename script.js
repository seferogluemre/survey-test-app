const correctAnswer = ["E", "E", "E", "E"];
const form = document.getElementById("question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });

  console.log(score);

  result.classList.remove("d-none");

  let puan = 0;
  const bastır = setInterval(() => {
    result.querySelector("span").textContent = `${puan}%`;
    if (puan == score) {
      clearInterval(bastır);
    } else {
      puan++;
    }
  }, 24);
});

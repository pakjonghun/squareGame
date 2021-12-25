import "./style.css";

const score_0 = document.getElementById("score--0");
const score_1 = document.getElementById("score--1");
const current_0 = document.getElementById("current--0");
const current_1 = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let curPlayer = 0;

btnNew.addEventListener("click", () => {
  score_0.textContent = 0;
  score_1.textContent = 0;
  current_0.textContent = 0;
  current_1.textContent = 0;
});

btnRoll.addEventListener("click", () => {
  const num = getRandomNum();
  const imgName = `dice-${num}.png`;
  dice.setAttribute("src", `../assets/${imgName}`);
  const curName = getCurrentName();
  curName.textContent = num !== 1 ? +curName.textContent + num : 0;
});

btnHold.addEventListener("click", onHoldClickHandler.bind(null));

function getRandomNum() {
  return Math.floor(Math.random() * 6 + 1);
}

function getCurrentName() {
  return curPlayer == 0 ? current_0 : current_1;
}

function getCurrentScore() {
  return curPlayer == 0 ? score_0 : score_1;
}

function togglePlayer() {
  curPlayer = curPlayer == 0 ? 1 : 0;
}

function onHoldClickHandler() {
  const curScore = getCurrentScore();
  const curName = getCurrentName();
  curScore.textContent = +curName.textContent + +curScore.textContent;
  curName.textContent = 0;
  togglePlayer();
}

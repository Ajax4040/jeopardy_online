const categories = [
  "Categoría 1", "Categoría 2", "Categoría 3",
  "Categoría 4", "Categoría 5", "Categoría 6", "Categoría 7"
];

const points = [100, 200, 300, 400, 500];

const questions = {};
categories.forEach((cat) => {
  questions[cat] = [
    `Pregunta 1 de ${cat.toUpperCase()}`,
    `Pregunta 2 de ${cat.toUpperCase()}`,
    `Pregunta 3 de ${cat.toUpperCase()}`,
    `Pregunta 4 de ${cat.toUpperCase()}`,
    `Pregunta 5 de ${cat.toUpperCase()}`
  ];
});

// Crear tablero
const board = document.getElementById("gameBoard");
categories.forEach(cat => {
  const header = document.createElement("div");
  header.className = "cell header";
  header.innerText = cat;
  board.appendChild(header);
});

points.forEach((point, rowIndex) => {
  categories.forEach((cat) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerText = point;
    cell.dataset.category = cat;
    cell.dataset.row = rowIndex;
    cell.addEventListener("click", openQuestionModal);
    board.appendChild(cell);
  });
});

// Crear puntuaciones
const teams = [0, 0, 0, 0, 0];
const teamsContainer = document.getElementById("teams");
teams.forEach((score, i) => {
  const div = document.createElement("div");
  div.className = "team";
  div.innerHTML = `<span>Equipo ${i + 1}</span><strong id="score-${i}">${score}</strong>`;
  teamsContainer.appendChild(div);
});

// ------------------------
// MODAL DE PREGUNTA
// ------------------------

const questionModal = document.getElementById("questionModal");
const questionText = document.getElementById("questionText");
const closeQuestionModal = document.getElementById("closeQuestionModal");
const confirmBtn = document.getElementById("confirmQuestion");
const cancelBtn = document.getElementById("cancelQuestion");

let currentCell = null; // guarda la celda activa

function openQuestionModal(e) {
  const cat = e.currentTarget.dataset.category;
  const row = parseInt(e.currentTarget.dataset.row);
  const q = questions[cat]?.[row] || "Pregunta no disponible";
  questionText.innerText = q;
  questionModal.classList.remove("hidden");
  currentCell = e.currentTarget;
}

// Confirmar uso de celda
confirmBtn.addEventListener("click", () => {
  if (currentCell) {
    currentCell.classList.add("used");
    currentCell.removeEventListener("click", openQuestionModal);
    currentCell = null;
  }
  questionModal.classList.add("hidden");
});

// Cancelar y cerrar sin afectar la celda
cancelBtn.addEventListener("click", () => {
  currentCell = null;
  questionModal.classList.add("hidden");
});

closeQuestionModal.addEventListener("click", () => {
  currentCell = null;
  questionModal.classList.add("hidden");
});

// ------------------------
// MODAL DE PUNTUACIÓN
// ------------------------

const scoreModal = document.getElementById("scoreModal");
const openScoreModal = document.getElementById("openScoreModal");
const closeScoreModal = document.getElementById("closeScoreModal");

openScoreModal.addEventListener("click", () => {
  scoreModal.classList.remove("hidden");
});

closeScoreModal.addEventListener("click", () => {
  scoreModal.classList.add("hidden");
});

document.getElementById("addPointsBtn").addEventListener("click", () => {
  const teamIndex = parseInt(document.getElementById("teamSelect").value);
  const points = parseInt(document.getElementById("pointsInput").value);
  if (!isNaN(points)) {
    teams[teamIndex] += points;
    document.getElementById(`score-${teamIndex}`).innerText = teams[teamIndex];
  }
  scoreModal.classList.add("hidden");
});

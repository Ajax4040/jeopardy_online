document.addEventListener("DOMContentLoaded", () => {
  // ===========================
  //  CONFIGURACIÓN DEL JUEGO
  // ===========================

  const categories = [
    "Categoría 1", "Categoría 2", "Categoría 3",
    "Categoría 4", "Categoría 5", "Categoría 6"
  ];


  const points = [100, 200, 300, 400, 500];

  const questions = {};
  categories.forEach((cat) => {
    questions[cat] = [
      {
        text: `Pregunta 1 de ${cat.toUpperCase()}`,
        options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        answer: "Opción 1"
      },
      {
        text: `Pregunta 2 de ${cat.toUpperCase()}`,
        options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        answer: "Opción 1"
      },
      {
        text: `Pregunta 3 de ${cat.toUpperCase()}`,
        options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        answer: "Opción 1"
      },
      {
        text: `Pregunta 4 de ${cat.toUpperCase()}`,
        options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        answer: "Opción 1"
      },
      {
        text: `Pregunta 5 de ${cat.toUpperCase()}`,
        options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        answer: "Opción 1"
      }
    ];
  });


  // ===========================
  //  CREAR TABLERO
  // ===========================

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


  // ===========================
  //  PUNTUACIONES
  // ===========================

  const teams = [0, 0, 0, 0, 0];
  const teamsContainer = document.getElementById("teams");

  teams.forEach((score, i) => {
    const div = document.createElement("div");
    div.className = "team";
    div.innerHTML = `<span>Equipo ${i + 1}</span><strong id="score-${i}">${score}</strong>`;
    teamsContainer.appendChild(div);
  });


  // ===========================
  //  MODAL DE PREGUNTAS
  // ===========================

  const questionModal = document.getElementById("questionModal");
  const questionText = document.getElementById("questionText");
  const closeQuestionModal = document.getElementById("closeQuestionModal");
  const revealBtn = document.getElementById("revealAnswerBtn");
  let currentCell = null;

  function openQuestionModal(e) {
    const cat = e.currentTarget.dataset.category;
    const row = parseInt(e.currentTarget.dataset.row);

    const q = questions[cat]?.[row];
    if (!q) return;

    questionText.innerText = q.text;

    const list = document.getElementById("questionOptions");
    list.innerHTML = "";
    q.options.forEach(op => {
      const li = document.createElement("li");
      li.innerText = op;
      list.appendChild(li);
    });

    currentCell = e.currentTarget;
    questionModal.classList.remove("hidden");
  }

  closeQuestionModal.addEventListener("click", () => {
    currentCell = null;
    questionModal.classList.add("hidden");
  });

  revealBtn.addEventListener("click", () => {
    const cat = currentCell.dataset.category;
    const row = parseInt(currentCell.dataset.row);
    const q = questions[cat][row];

    document.getElementById("correctAnswerText").innerText = q.answer;
    document.getElementById("answerModal").classList.remove("hidden");

    questionModal.classList.add("hidden");

    currentCell.classList.add("used");
    currentCell.innerHTML = `<img src="image/logo1.png" alt="logo usado" class="used-logo">`;
    currentCell.removeEventListener("click", openQuestionModal);

  });


  // ===========================
  //  MODAL DE RESPUESTA
  // ===========================

  document.getElementById("closeAnswerModal").addEventListener("click", () => {
    document.getElementById("answerModal").classList.add("hidden");
    currentCell = null;
  });


  // ===========================
  //  MODAL DE PUNTUACIÓN
  // ===========================

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
    const pts = parseInt(document.getElementById("pointsInput").value);

    if (!isNaN(pts)) {
      teams[teamIndex] += pts;
      document.getElementById(`score-${teamIndex}`).innerText = teams[teamIndex];
    }

    scoreModal.classList.add("hidden");
  });
});
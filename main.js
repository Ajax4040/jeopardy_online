document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  //  CONFIGURACIÓN DEL JUEGO
  // ===========================

  const categories = [
    "Categoría 1", "Categoría 2", "Categoría 3",
    "Categoría 4", "Categoría 5"
  ];

  const points = [100, 200, 300, 400, 500];

  // UNA pregunta dorada por categoría (fila 0–4)
  // Fácil de modificar en el futuro.
  const goldenQuestions = {
    "Categoría 1": 3, // 400 pts
    "Categoría 2": 2, // 300 pts
    "Categoría 3": 2, // 300 pts
    "Categoría 4": 3, // 400 pts
    "Categoría 5": 4  // 500 pts
  };

  // Crear preguntas dinámicamente
  const questions = {};
  categories.forEach(cat => {
    questions[cat] = points.map((pt, idx) => ({
      text: `Pregunta ${idx + 1} de ${cat.toUpperCase()}`,
      options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
      answer: "Opción 1",
      isGolden: goldenQuestions[cat] === idx
    }));
  });

  const goldenSound = new Audio("sounds/goldencard.mp3");

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
    categories.forEach(cat => {
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
    div.innerHTML =
      `<span>Equipo ${i + 1}</span><strong id="score-${i}">${score}</strong>`;
    teamsContainer.appendChild(div);
  });

  // ===========================
  //  REFERENCIAS A MODALES
  // ===========================

  // Modal pregunta
  const questionModal = document.getElementById("questionModal");
  const questionText = document.getElementById("questionText");
  const questionOptions = document.getElementById("questionOptions");
  const revealBtn = document.getElementById("revealAnswerBtn");
  const closeQuestionModal = document.getElementById("closeQuestionModal");

  // Modal respuesta
  const answerModal = document.getElementById("answerModal");
  const correctAnswerText = document.getElementById("correctAnswerText");
  const closeAnswerModal = document.getElementById("closeAnswerModal");

  // Modal tarjeta dorada (nuevo)
  const goldenCardModal = document.getElementById("goldenCardModal");
  const continueToGoldenQuestion = document.getElementById("continueToGoldenQuestion");
  const closeGoldenCardModal = document.getElementById("closeGoldenCardModal");

  let currentCell = null;
  let currentQuestion = null;

  // ===========================
  //  ABRIR MODAL DE PREGUNTA
  // ===========================

  function openQuestionModal(e) {
    const cat = e.currentTarget.dataset.category;
    const row = parseInt(e.currentTarget.dataset.row);
    const q = questions[cat][row];

    currentCell = e.currentTarget;
    currentQuestion = q;

    // Si es dorada → mostrar el modal especial primero
    if (q.isGolden) {
      goldenSound.play();  // Reproduce sonido dorado
      goldenCardModal.querySelector(".golden-card-box").classList.add("shine-effect");
      goldenCardModal.classList.remove("hidden");
      goldenCardModal.querySelector(".modal-content").classList.add("golden-zoom-in");

    } else {
      showQuestionModal(q);
    }
  }

  // Función modular para mostrar la pregunta
  function showQuestionModal(q) {
    questionText.innerText = q.text;

    questionOptions.innerHTML = "";
    q.options.forEach(op => {
      const li = document.createElement("li");
      li.innerText = op;
      questionOptions.appendChild(li);
    });

    // Estilo dorado solo si corresponde
    if (q.isGolden) {
      questionModal.querySelector(".question-box").classList.add("gold");
      revealBtn.classList.add("gold");
    } else {
      questionModal.querySelector(".question-box").classList.remove("gold");
      revealBtn.classList.remove("gold");
    }

    questionModal.classList.remove("hidden");
  }

  // ===========================
  //  CERRAR MODAL PREGUNTA
  // ===========================

  closeQuestionModal.addEventListener("click", () => {
    questionModal.classList.add("hidden");
    currentCell = null;
    currentQuestion = null;
  });

  // ===========================
  //  CONTINUAR TARJETA DORADA
  // ===========================

  continueToGoldenQuestion.addEventListener("click", () => {
    goldenCardModal.classList.add("hidden");
    showQuestionModal(currentQuestion);
  });

  closeGoldenCardModal.addEventListener("click", () => {
  goldenCardModal.classList.add("hidden");
  goldenCardModal.querySelector(".modal-content").classList.remove("golden-zoom-in");
  currentCell = null;
  currentQuestion = null;
  });


  // ===========================
  //  REVELAR RESPUESTA
  // ===========================

  revealBtn.addEventListener("click", () => {
    correctAnswerText.innerText = currentQuestion.answer;

    questionModal.classList.add("hidden");
    answerModal.classList.remove("hidden");

    // Marcar celda como usada
    currentCell.classList.add("used");

    if (currentQuestion.isGolden) {
      currentCell.classList.add("gold-cell");
      currentCell.innerText = "";
    } else {
      currentCell.innerHTML =
        `<img src="image/logo1.png" alt="logo usado" class="used-logo">`;
    }

    currentCell.removeEventListener("click", openQuestionModal);
  });

  // ===========================
  //  CERRAR MODAL RESPUESTA
  // ===========================

  closeAnswerModal.addEventListener("click", () => {
    answerModal.classList.add("hidden");
    currentCell = null;
    currentQuestion = null;
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

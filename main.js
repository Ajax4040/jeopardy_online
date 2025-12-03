document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  //  CONFIGURACIÓN DEL JUEGO
  // ===========================

  const questions = {
    "ACTUALIDAD": [
      {
        "text": "Ya están a la venta las entradas del Lollapalooza 2026. ¿En que fecha es?",
        "options": [
          "1) 13 al 15 de Marzo",
          "2) 20 al 22 de Marzo",
          "3) 13 al 15 de Abril"
        ],
        "answer": "1) 13 al 15 de Marzo",
        "isGolden": false
      },
      {
        "text": "¿Cuál fue la APP más descargada en el mundo en 2025?",
        "options": [
          "1) Chat GPT",
          "2) Roblox",
          "3) Tiktok"
        ],
        "answer": "1) Chat GPT",
        "isGolden": false
      },
      {
        "text": "¿Cuál es la canción con más reproducciones en 2025 en Spotify?",
        "options": [
          "1) ‘Fortnight’ – Taylor Swift",
          "2) ‘Beautiful Things’ – Benson Boone",
          "3) ‘Espresso’ – Sabrina Carpenter"
        ],
        "answer": "2) ‘Beautiful Things’ – Benson Boone",
        "isGolden": false
      },
      {
        "text": "¿Quién es el actual presidente de Bolivia?",
        "options": [
          "1) Juan Evo Morales Ayma",
          "2) Rodrigo Paz Pereira",
          "3) Luis Alberto Arce Catacora"
        ],
        "answer": "2) Rodrigo Paz Pereira",
        "isGolden": true
      },
      {
        "text": "¿Qué es el 3i Atlas?",
        "options": [
          "1) Un probiótico",
          "2) Una criptomoneda",
          "3) Un objeto interestelar"
        ],
        "answer": "3) Un objeto interestelar",
        "isGolden": false
      }
    ],

    "DÍA DEL MEDICO": [
      {
        "text": "¿Quién fue la primera médica Argentina?",
        "options": [
          "1) Cecilia Grierson",
          "2) Rosa Santillán",
          "3) Leonor Martínez Bisso"
        ],
        "answer": "1) Cecilia Grierson",
        "isGolden": false
      },
      {
        "text": "El programa de televisión del Dr Mario Socolinsky estuvo al aire 27 años (1977-2003). ¿Cómo se llama el programa?",
        "options": [
          "1) La salud de nuestros niños",
          "2) La salud de nuestros hijos",
          "3) La salud en pediatría"
        ],
        "answer": "2) La salud de nuestros hijos",
        "isGolden": false
      },
      {
        "text": "¿Entre qué calles está la manzana del Hospital Gutierrez (Niños)?",
        "options": [
          "1) Bustamante/Paraguay/Gallo/Mansilla",
          "2) Billinghurst/Paraguay/Callao/Mansilla",
          "3) Billinghurst/Paraguay/Agüero/Mansilla"
        ],
        "answer": "1) Bustamante/Paraguay/Gallo/Mansilla",
        "isGolden": true
      },
      {
        "text": "¿Cómo se llama la serie de Disney donde una niña cura juguetes enfermos?",
        "options": [
          "1) Juguetes al rescate",
          "2) Hospital de Juguetes",
          "3) Doctora Juguetes"
        ],
        "answer": "3) Doctora Juguetes",
        "isGolden": false
      },
      {
        "text": "¿Qué periodista es también médico?",
        "options": [
          "1) Eduardo Feinmann",
          "2) Nelson Castro",
          "3) Rodolfo Barili"
        ],
        "answer": "2) Nelson Castro",
        "isGolden": false
      }
    ],

    "DEPORTES": [
      {
        "text": "¿Quién es el técnico actual del Inter de Miami?",
        "options": [
          "1) El burrito Ortega",
          "2) El Jefecito Mascherano",
          "3) El ratón Ayala"
        ],
        "answer": "2) El Jejecito Mascherano",
        "isGolden": false
      },
      {
        "text": "¿Cuál es la siguiente carrera que corre Franco Colapinto?",
        "options": [
          "1) Abu Dhabi",
          "2) Qatar",
          "3) Mónaco"
        ],
        "answer": "1) Abu Dhabi",
        "isGolden": false
      },
      {
        "text": "Argentina fue la primera selección de fútbol en ganarle a Brasil en el Maracaná por las eliminatorias, ¿en qué año fue?",
        "options": [
          "1) 1993",
          "2) 2005",
          "3) 2023"
        ],
        "answer": "3) 2023",
        "isGolden": true
      },
      {
        "text": "¿Cuál es el Grand Slam de tenis que más veces ganó Guillermo Vilas?",
        "options": [
          "1) Wimbledon",
          "2) Abierto de Australia",
          "3) Abierto de Estados Unidos"
        ],
        "answer": "2) Abierto de Australia",
        "isGolden": false
      },
      {
        "text": "¿Cómo se llama el niño prodigio de 12 años Argentino que está causando furor en el mundo del Ajedrez?",
        "options": [
          "1) Fausto Oro",
          "2) Faustino Oro",
          "3) Faustino Logro"
        ],
        "answer": "2) Faustino Oro",
        "isGolden": false
      }
    ],

    "ESPECTACULOS": [
      {
        "text": "¿Qué edad tiene Mirta Legrand?",
        "options": [
          "1) 94",
          "2) 96",
          "3) 98"
        ],
        "answer": "3) 98",
        "isGolden": false
      },
      {
        "text": "¿Cuál fue la serie en Netflix más vista en Argentina en 2025?",
        "options": [
          "1) Envidiosa",
          "2) El eternauta",
          "3) Atrapados"
        ],
        "answer": "2) El eternauta",
        "isGolden": false
      },
      {
        "text": "¿Cómo se llama la hija de la China Suarez y Nicolás Cabré?",
        "options": [
          "1) Ambar",
          "2) Rufina",
          "3) Romina"
        ],
        "answer": "2) Rufina",
        "isGolden": false
      },
      {
        "text": "¿Qué película Argentina ganó un Oscar en 2009?",
        "options": [
          "1) El hijo de la novia",
          "2) El secreto de sus ojos",
          "3) Relatos salvajes"
        ],
        "answer": "2) El secreto de sus ojos",
        "isGolden": false
      },
      {
        "text": "¿Qué nombre completo figura en el DNI de Duki?",
        "options": [
          "1) Mauro Ezequiel Lombardo Quiroga",
          "2) Mauro Exequiel Leonardo Quiroga",
          "3) Mauro Leandro Alberto Lombardo"
        ],
        "answer": "1) Mauro Ezequiel Lombardo Quiroga",
        "isGolden": true
      }
    ],

    "ETHICAL NUTRITION": [
      {
        "text": "La muy conocida y muy cantada canción de SanCor Bebé… \"¿Qué tiene SanCor Bebé…?\" ¿qué etapa menciona en su guión?",
        "options": [
          "1) Etapa 1",
          "2) Etapa 2",
          "3) Etapa 3"
        ],
        "answer": "3) Etapa 3",
        "isGolden": false
      },
      {
        "text": "¿Cómo se llama la fórmula que tiene LGG y ayuda a que los bebés superen la APLV a los 12 meses de uso?",
        "options": [
          "1) Nutribaby",
          "2) Nutralergy",
          "3) Nutramigen"
        ],
        "answer": "3) Nutramigen",
        "isGolden": false
      },
      {
        "text": "Además de tener productos para rutina (Etapa 1, 2 y 3), SanCor Bebé tiene productos especiales, ¿en cuáles segmentos?",
        "options": [
          "1) AR/COMFORT",
          "2) PREMATUROS/AR/HA",
          "3) AR/PREMATUROS/COMFORT/HA/REDUCIDA LACTOSA"
        ],
        "answer": "3) AR/PREMATUROS/COMFORT/HA/REDUCIDA LACTOSA",
        "isGolden": false
      },
      {
        "text": "BioGaia tiene el probiótico más estudiado para bebés y niños ¿Cuál es la cepa de BioGaia?",
        "options": [
          "1) Lactobacillus reuteri DSM 17938",
          "2) Lactobacillus reuteri SD2112",
          "3) Tiene 5 cepas distintas"
        ],
        "answer": "1) Lactobacillus reuteri DSM 17938",
        "isGolden": true
      },
      {
        "text": "¿Cómo se llama el sitio web del laboratorio donde los pacientes pueden encontrar todos nuestros productos?",
        "options": [
          "1) SanCor Bebé Shop",
          "2) Ethical Shop",
          "3) Mercado Ethical"
        ],
        "answer": "1) SanCor Bebé Shop",
        "isGolden": false
      }
    ]
  };

  const categories = Object.keys(questions);
  const points = [100, 200, 300, 400, 500];

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
    div.innerHTML = `<span>Equipo ${i + 1}</span><strong id="score-${i}">${score}</strong>`;
    teamsContainer.appendChild(div);
  });

  // ===========================
  //  REFERENCIAS A MODALES
  // ===========================

  const questionModal = document.getElementById("questionModal");
  const questionText = document.getElementById("questionText");
  const questionOptions = document.getElementById("questionOptions");
  const revealBtn = document.getElementById("revealAnswerBtn");
  const closeQuestionModal = document.getElementById("closeQuestionModal");

  const answerModal = document.getElementById("answerModal");
  const correctAnswerText = document.getElementById("correctAnswerText");
  const closeAnswerModal = document.getElementById("closeAnswerModal");

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

    if (q.isGolden) {
      goldenSound.play();
      goldenCardModal.querySelector(".golden-card-box").classList.add("shine-effect");
      goldenCardModal.classList.remove("hidden");
    } else {
      showQuestionModal(q);
    }
  }

  function showQuestionModal(q) {
    questionText.innerText = q.text;
    questionOptions.innerHTML = "";

    q.options.forEach(op => {
      const li = document.createElement("li");
      li.innerText = op;
      questionOptions.appendChild(li);
    });

    if (q.isGolden) {
      questionModal.querySelector(".question-box").classList.add("gold");
      revealBtn.classList.add("gold");
    } else {
      questionModal.querySelector(".question-box").classList.remove("gold");
      revealBtn.classList.remove("gold");
    }

    questionModal.classList.remove("hidden");
  }

  closeQuestionModal.addEventListener("click", () => {
    questionModal.classList.add("hidden");
    currentCell = null;
    currentQuestion = null;
  });

  continueToGoldenQuestion.addEventListener("click", () => {
    goldenCardModal.classList.add("hidden");
    showQuestionModal(currentQuestion);
  });

  closeGoldenCardModal.addEventListener("click", () => {
    goldenCardModal.classList.add("hidden");
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

    currentCell.classList.add("used");

    if (currentQuestion.isGolden) {
      currentCell.classList.add("gold-cell");
      currentCell.innerText = "";
    } else {
      currentCell.innerHTML = `<img src="image/logo1.png" alt="logo usado" class="used-logo">`;
    }

    currentCell.removeEventListener("click", openQuestionModal);
  });

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

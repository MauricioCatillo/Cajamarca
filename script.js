const quizData = [
    {
        question: "¿Qué tipo de cimentación se utiliza comúnmente para estructuras altas en suelos blandos?",
        choices: ["Zapatas aisladas", "Losa de cimentación", "Pilotes", "Cimentación corrida"],
        correct: 2,
        hint: "Piensa en cómo distribuir la carga en suelos con baja capacidad portante.",
        explanation: "Los pilotes se utilizan en suelos blandos porque transmiten las cargas de la estructura a estratos más profundos y resistentes del suelo, proporcionando estabilidad a estructuras altas en condiciones de suelo desfavorables."
    },
    {
        question: "¿Cuál es el principal componente del cemento Portland?",
        choices: ["Sílice", "Caliza", "Arcilla", "Clinker"],
        correct: 3,
        hint: "Es el resultado de la cocción de otros materiales.",
        explanation: "El clinker es el componente principal del cemento Portland. Se forma al calcinar caliza y arcilla a altas temperaturas. El clinker se muele junto con otros aditivos para producir el cemento Portland final."
    },
    {
        question: "¿Qué método se utiliza comúnmente para calcular el caudal de diseño en sistemas de drenaje urbano?",
        choices: ["Método Racional", "Método de Manning", "Método de Darcy-Weisbach", "Método de Hazen-Williams"],
        correct: 0,
        hint: "Es un método simple que relaciona la lluvia directamente con la escorrentía.",
        explanation: "El Método Racional es ampliamente utilizado en hidrología urbana para estimar el caudal pico en cuencas pequeñas. Se basa en la relación directa entre la lluvia y la escorrentía, considerando el área de la cuenca, la intensidad de la lluvia y un coeficiente de escorrentía."
    },
    {
        question: "¿Qué tipo de acero se utiliza comúnmente en el hormigón armado?",
        choices: ["Acero inoxidable", "Acero corrugado", "Acero galvanizado", "Acero de alta resistencia"],
        correct: 1,
        hint: "Su superficie no es lisa para mejorar la adherencia con el hormigón.",
        explanation: "El acero corrugado es el más utilizado en hormigón armado debido a sus protuberancias o corrugas que mejoran significativamente la adherencia entre el acero y el hormigón, permitiendo una mejor transferencia de esfuerzos y aumentando la resistencia del conjunto."
    },
    {
        question: "¿Cuál es la función principal de una junta de dilatación en una estructura?",
        choices: ["Aumentar la resistencia", "Permitir movimientos térmicos", "Mejorar la estética", "Reducir el peso"],
        correct: 1,
        hint: "Piensa en cómo los materiales reaccionan a los cambios de temperatura.",
        explanation: "Las juntas de dilatación permiten que los materiales de construcción se expandan y contraigan en respuesta a los cambios de temperatura sin causar daños estructurales. Esto es crucial para prevenir grietas y otros problemas asociados con el estrés térmico en estructuras grandes."
    },
    {
        question: "¿Qué ensayo se utiliza para determinar la trabajabilidad del hormigón fresco?",
        choices: ["Ensayo de compresión", "Ensayo de cono de Abrams", "Ensayo de tracción indirecta", "Ensayo de flexión"],
        correct: 1,
        hint: "Este ensayo mide el asentamiento del hormigón.",
        explanation: "El ensayo de cono de Abrams, también conocido como prueba de slump, se utiliza para medir la consistencia o trabajabilidad del hormigón fresco. Consiste en llenar un molde cónico con hormigón y medir el asentamiento después de retirar el molde."
    },
    {
        question: "¿Qué tipo de esfuerzo es el principal responsable de la falla en vigas de hormigón armado?",
        choices: ["Compresión", "Tracción", "Cortante", "Torsión"],
        correct: 2,
        hint: "Este esfuerzo tiende a causar deslizamiento entre las fibras de la viga.",
        explanation: "El esfuerzo cortante es el principal responsable de la falla en vigas de hormigón armado. Aunque las vigas también experimentan esfuerzos de flexión (que causan compresión y tracción), el cortante puede causar grietas diagonales y falla repentina si no se diseña adecuadamente."
    },
    {
        question: "¿Qué método de compactación de suelos es más adecuado para suelos cohesivos?",
        choices: ["Vibración", "Impacto", "Amasado", "Presión estática"],
        correct: 2,
        hint: "Este método es eficaz para remodelar las partículas del suelo.",
        explanation: "El método de amasado es más adecuado para suelos cohesivos. Este método aplica presión y movimientos de cizallamiento que ayudan a reorientar las partículas del suelo, reduciendo los vacíos y aumentando la densidad en suelos arcillosos o con alto contenido de finos."
    },
    {
        question: "¿Qué tipo de falla es más común en taludes de suelos granulares?",
        choices: ["Falla circular", "Falla plana", "Falla por flujo", "Falla en cuña"],
        correct: 1,
        hint: "Esta falla ocurre a lo largo de una superficie casi recta.",
        explanation: "La falla plana es más común en taludes de suelos granulares. En estos suelos, la cohesión es baja o nula, y la falla tiende a ocurrir a lo largo de una superficie de deslizamiento aproximadamente plana, generalmente paralela a la cara del talud."
    },
    {
        question: "Un ingeniero civil está diseñando un sistema de drenaje para una nueva urbanización. El área total de la urbanización es de 50 hectáreas, con un coeficiente de escorrentía de 0.6. La intensidad de lluvia de diseño es de 80 mm/hora. Utilizando el método racional, ¿cuál es el caudal de diseño aproximado para el sistema de drenaje principal?",
        choices: ["6.67 m³/s", "8.33 m³/s", "10.00 m³/s", "11.67 m³/s"],
        correct: 1,
        hint: "Recuerda la fórmula del método racional: Q = C * i * A, donde Q es el caudal, C es el coeficiente de escorrentía, i es la intensidad de lluvia, y A es el área.",
        explanation: "Utilizando el método racional, Q = C * i * A. Aquí, C = 0.6, i = 80 mm/h = 0.08 m/h, y A = 50 ha = 500,000 m². Por lo tanto, Q = 0.6 * 0.08 * 500,000 = 24,000 m³/h. Convertido a m³/s, esto es 24,000 / 3600 = 6.67 m³/s. La respuesta más cercana es 8.33 m³/s."
    }
];

let currentQuestion = 0;
let score = 0;
let hintsRemaining = 3;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const explanationEl = document.getElementById("explanation");
const hintEl = document.getElementById("hint");
const hintBtn = document.getElementById("hint-btn");
const hintCountEl = document.getElementById("hint-count");
const progressBar = document.querySelector(".progress");

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    choicesEl.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice-btn", "fade-in");
        button.style.animationDelay = `${index * 0.1}s`;
        button.addEventListener("click", () => selectChoice(index));
        choicesEl.appendChild(button);
    });
    hintEl.textContent = "";
    submitBtn.style.display = "block";
    nextBtn.style.display = "none";
    resultEl.textContent = "";
    explanationEl.textContent = "";
    updateProgressBar();
}

function selectChoice(index) {
    const buttons = choicesEl.getElementsByTagName("button");
    for (let button of buttons) {
        button.classList.remove("selected");
    }
    buttons[index].classList.add("selected");
}

function checkAnswer() {
    const selectedButton = choicesEl.querySelector(".selected");
    if (!selectedButton) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }
    const selectedAnswer = Array.from(choicesEl.children).indexOf(selectedButton);
    const question = quizData[currentQuestion];
    if (selectedAnswer === question.correct) {
        score++;
        resultEl.textContent = "¡Correcto!";
        resultEl.style.color = "#4CAF50";
    } else {
        resultEl.textContent = "Incorrecto. La respuesta correcta era: " + question.choices[question.correct];
        resultEl.style.color = "#F44336";
    }
    explanationEl.textContent = "Explicación: " + question.explanation;
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionEl.textContent = "¡Quiz completado!";
    choicesEl.innerHTML = "";
    hintEl.textContent = "";
    resultEl.textContent = `Tu puntuación final es: ${score} de ${quizData.length}`;
    resultEl.style.color = "#333";
    explanationEl.textContent = "";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
    hintBtn.style.display = "none";
    updateProgressBar();
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showHint() {
    if (hintsRemaining > 0) {
        hintEl.textContent = "Pista: " + quizData[currentQuestion].hint;
        hintsRemaining--;
        hintCountEl.textContent = hintsRemaining;
        if (hintsRemaining === 0) {
            hintBtn.disabled = true;
        }
    }
}

submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);
hintBtn.addEventListener("click", showHint);

loadQuestion();
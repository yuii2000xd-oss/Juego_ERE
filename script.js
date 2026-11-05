// ==========================================
// 1. CONFIGURACIÓN DE LAS 10 PREGUNTAS EXACTAS
// ==========================================
const questions = [
    { 
        id: 1, 
        type: "single", 
        question: "¿Quién es el autor de la encíclica Magnifica Humanitas?", 
        options: [
            {id: "A", text: "El papa Francisco"},
            {id: "B", text: "El papa León XIV"},
            {id: "C", text: "El papa León XIII"},
            {id: "D", text: "El papa Benedicto XVI"}
        ], 
        correct: ["B"], 
        explanation: "La encíclica fue promulgada por el papa León XIV." 
    },
    { 
        id: 2, 
        type: "single", 
        question: "¿Qué significa el título Magnifica Humanitas?", 
        options: [
            {id: "A", text: "La nueva tecnología"},
            {id: "B", text: "La sociedad digital"},
            {id: "C", text: "Magnífica humanidad"},
            {id: "D", text: "El poder de las máquinas"}
        ], 
        correct: ["C"], 
        explanation: "Traducido del latín significa 'Magnífica humanidad'." 
    },
    { 
        id: 3, 
        type: "single", 
        question: "¿Qué acontecimiento histórico se relaciona con la elaboración de esta encíclica?", 
        options: [
            {id: "A", text: "El aniversario de Rerum novarum"},
            {id: "B", text: "El inicio de la Segunda Guerra Mundial"},
            {id: "C", text: "La creación de Internet"},
            {id: "D", text: "La Revolución Francesa"}
        ], 
        correct: ["A"], 
        explanation: "Se vincula directamente al aniversario de la encíclica social Rerum novarum." 
    },
    { 
        id: 4, 
        type: "multiple", 
        question: "¿Cuáles son principios de la Doctrina Social de la Iglesia destacados en la encíclica?", 
        options: [
            {id: "A", text: "Bien común"},
            {id: "B", text: "Solidaridad"},
            {id: "C", text: "Subsidiariedad"},
            {id: "D", text: "Competencia sin límites"}
        ], 
        correct: ["A", "B", "C"], 
        explanation: "Destaca el Bien Común, la Solidaridad y la Subsidiariedad frente al avance tecnológico." 
    },
    { 
        id: 5, 
        type: "single", 
        question: "¿Cuál es el tema principal del capítulo 3: «Técnica y Dominio»?", 
        options: [
            {id: "A", text: "La organización de la Iglesia"},
            {id: "B", text: "La grandeza de la persona humana ante las promesas de la IA"},
            {id: "C", text: "La historia de las redes sociales"},
            {id: "D", text: "La economía de las empresas"}
        ], 
        correct: ["B"], 
        explanation: "Aborda la supremacía de la dignidad de la persona humana frente a las promesas de la IA." 
    },
    { 
        id: 6, 
        type: "boolean", 
        question: "La encíclica aborda la verdad, el trabajo y la libertad frente a la transformación tecnológica.", 
        options: [
            {id: "A", text: "Verdadero"},
            {id: "B", text: "Falso"}
        ], 
        correct: ["A"], 
        explanation: "Verdadero. Esos tres valores son los ejes más impactados por la tecnología." 
    },
    { 
        id: 7, 
        type: "single", 
        question: "¿Qué problemática social relacionada con el trabajo se menciona en la exposición?", 
        options: [
            {id: "A", text: "La precarización laboral y el desplazamiento tecnológico"},
            {id: "B", text: "La desaparición de todas las profesiones"},
            {id: "C", text: "La eliminación de la educación"},
            {id: "D", text: "La falta de máquinas en las empresas"}
        ], 
        correct: ["A"], 
        explanation: "Alerta explícitamente sobre la precarización y el desplazamiento del empleo por automatización." 
    },
    { 
        id: 8, 
        type: "single", 
        question: "¿Qué peligro representa la desinformación masiva en los entornos digitales?", 
        options: [
            {id: "A", text: "Mejora siempre la convivencia"},
            {id: "B", text: "Garantiza información confiable"},
            {id: "C", text: "Distorsiona el debate público y debilita la confianza"},
            {id: "D", text: "Elimina la manipulación digital"}
        ], 
        correct: ["C"], 
        explanation: "La manipulación informativa fractura la confianza social y distorsiona el debate." 
    },
    { 
        id: 9, 
        type: "boolean", 
        question: "La encíclica sostiene que la tecnología debe concentrarse en manos de unos pocos para beneficiar a toda la sociedad.", 
        options: [
            {id: "A", text: "Verdadero"},
            {id: "B", text: "Falso"}
        ], 
        correct: ["B"], 
        explanation: "Falso. La encíclica rechaza con firmeza los monopolios y la concentración tecnológica." 
    },
    { 
        id: 10, 
        type: "single", 
        question: "¿Cuál es uno de los principales aprendizajes que deja la encíclica a los jóvenes?", 
        options: [
            {id: "A", text: "Depender completamente de los algoritmos"},
            {id: "B", text: "Evitar toda innovación tecnológica"},
            {id: "C", text: "Usar la tecnología sin pensar en los demás"},
            {id: "D", text: "Ser ciudadanos digitales críticos y éticos"}
        ], 
        correct: ["D"], 
        explanation: "Exhorta a las nuevas generaciones a construir una ciudadanía digital crítica, ética y con valores." 
    }
];

// ==========================================
// 2. VARIABLES DE CONTROL DE ESTADO
// ==========================================
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timeLeft = 20;
let timerInterval = null;
let selectedOptionsCurrent = [];

// ==========================================
// 3. CAPTURA DE ELEMENTOS DE LA INTERFAZ (DOM)
// ==========================================
const startScreen = document.getElementById("start-screen");
const triviaScreen = document.getElementById("trivia-screen");
const resultsScreen = document.getElementById("results-screen");
const reviewScreen = document.getElementById("review-screen");

const btnStart = document.getElementById("btn-start");
const btnConfirm = document.getElementById("btn-confirm");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");
const btnReview = document.getElementById("btn-review");
const btnBackToResults = document.getElementById("btn-back-to-results");

const questionNumberEl = document.getElementById("question-number");
const progressBarEl = document.getElementById("progress-bar");
const timerTextEl = document.getElementById("timer-text");
const questionTextEl = document.getElementById("question-text");
const multipleNoticeEl = document.getElementById("multiple-notice");
const optionsContainer = document.getElementById("options-container");

const feedbackBox = document.getElementById("feedback-box");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackExplanation = document.getElementById("feedback-explanation");

// ==========================================
// 4. ESCUCHADORES DE EVENTOS (BOTONES)
// ==========================================
btnStart.addEventListener("click", startGame);
btnConfirm.addEventListener("click", confirmAnswer);
btnNext.addEventListener("click", nextQuestion);
btnRestart.addEventListener("click", startGame);
btnReview.addEventListener("click", showReview);
btnBackToResults.addEventListener("click", () => switchScreen(resultsScreen));

// ==========================================
// 5. FUNCIONES DE LÓGICA DE FLUJO Y PANTALLAS
// ==========================================
function switchScreen(screen) {
    [startScreen, triviaScreen, resultsScreen, reviewScreen].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    switchScreen(triviaScreen);
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timerInterval);
    selectedOptionsCurrent = [];
    btnConfirm.disabled = true;
    btnConfirm.classList.remove("hidden");
    btnNext.classList.add("hidden");
    feedbackBox.classList.add("hidden");
    
    const q = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Pregunta ${currentQuestionIndex + 1} de 10`;
    progressBarEl.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    questionTextEl.textContent = q.question;
    
    if (q.type === "multiple") {
        multipleNoticeEl.classList.remove("hidden");
    } else {
        multipleNoticeEl.classList.add("hidden");
    }
    
    optionsContainer.innerHTML = "";
    q.options.forEach(opt => {
        const card = document.createElement("div");
        card.classList.add("option-card");
        card.dataset.id = opt.id;
        card.textContent = `${opt.id}) ${opt.text}`;
        card.addEventListener("click", () => selectOption(card, q.type));
        optionsContainer.appendChild(card);
    });
    
    timeLeft = 20;
    timerTextEl.textContent = `${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerTextEl.textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            evaluateAnswer(true);
        }
    }, 1000);
}

// ==========================================
// 6. MANEJO DE SELECCIÓN Y EVALUACIÓN
// ==========================================
function selectOption(card, type) {
    if (card.classList.contains("locked")) return;
    const optId = card.dataset.id;
    
    if (type === "single" || type === "boolean") {
        // Opción única: limpia las demás tarjetas y deja solo la actual
        Array.from(optionsContainer.children).forEach(c => c.classList.remove("selected"));
        selectedOptionsCurrent = [optId];
        card.classList.add("selected");
    } else {
// Opción múltiple: alterna (añade o quita del arreglo)
if (card.classList.contains("selected")) {
card.classList.remove("selected");
selectedOptionsCurrent = selectedOptionsCurrent.filter(id => id !== optId);
} else {
card.classList.add("selected");
selectedOptionsCurrent.push(optId);
}
}
btnConfirm.disabled = selectedOptionsCurrent.length === 0;
}
function confirmAnswer() {
clearInterval(timerInterval);
evaluateAnswer(false);
}
function evaluateAnswer(isTimeOut) {
const q = questions[currentQuestionIndex];
// Bloquear todas las tarjetas de opciones para que no puedan cambiar su elección
Array.from(optionsContainer.children).forEach(c => c.classList.add("locked"));
btnConfirm.classList.add("hidden");
btnNext.classList.remove("hidden");
let isCorrect = false;
if (!isTimeOut) {
const correctAnswers = [...q.correct].sort();
const userAnswersSorted = [...selectedOptionsCurrent].sort();
isCorrect = JSON.stringify(correctAnswers) === JSON.stringify(userAnswersSorted);
}
if (isCorrect) {
score += 100;
feedbackBox.className = "feedback-box correct";
feedbackTitle.textContent = "✨ ¡Correcto! (+100 pts)";
} else {
feedbackBox.className = "feedback-box incorrect";
feedbackTitle.textContent = isTimeOut ? "⏰ ¡Tiempo agotado! (0 pts)" : "❌ Respuesta Incorrecta (0 pts)";
}
feedbackExplanation.textContent = q.explanation;
feedbackBox.classList.remove("hidden");
// Revelar visualmente cuáles eran correctas e incorrectas
Array.from(optionsContainer.children).forEach(card => {
const id = card.dataset.id;
if (q.correct.includes(id)) {
card.classList.add("correct-answer");
} else if (selectedOptionsCurrent.includes(id)) {
card.classList.add("incorrect-answer");
}
});
userAnswers.push({ questionId: q.id, selected: selectedOptionsCurrent });
}
function nextQuestion() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
loadQuestion();
} else {
showResults();
}
}
// ==========================================
// 7. PRESENTACIÓN DE RESULTADOS Y REVISIÓN
// ==========================================
function showResults() {
    switchScreen(resultsScreen);
    const correctCount = score / 100;
    document.getElementById("total-score").textContent = score;
    document.getElementById("stat-correct").textContent = correctCount;
    document.getElementById("stat-incorrect").textContent = questions.length - correctCount;
    document.getElementById("stat-percent").textContent = `${(correctCount / questions.length) * 100}%`;

    let msg = "";
    if (score >= 900) msg = "¡Experto en Magnifica Humanitas! 🌟";
    else if (score >= 700) msg = "¡Excelente trabajo! 👏";
    else if (score >= 500) msg = "¡Vas por buen camino! 👍";
    else msg = "¡Sigue aprendiendo! 📚";
    document.getElementById("result-message").textContent = msg;
}

function showReview() {
    switchScreen(reviewScreen);
    const list = document.getElementById("review-list");
    list.innerHTML = "";
    questions.forEach((q, idx) => {
        const uAns = userAnswers.find(ua => ua.questionId === q.id);
        const uText = uAns && uAns.selected.length > 0 ? uAns.selected.join(", ") : "Ninguna";
        const div = document.createElement("div");
        div.classList.add("review-item");
        div.innerHTML = `<p class="review-q">${idx + 1}. ${q.question}</p> <p>Tu respuesta: <strong>${uText}</strong></p> <p style="color:#389e0d;">Correcta: ${q.correct.join(", ")}</p>`;
        list.appendChild(div);
    });
}
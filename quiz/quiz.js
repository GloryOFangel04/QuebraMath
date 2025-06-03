const questions = [ 
    {   // questão 1
        question:"Qual o valor da interseção entre os conjuntos A = {1, 2, 3, 4} e B = {3,4, 5, 6}?",
        category: "Conjuntos",
        answers:[
            {text: "a) {1, 2}", correct:false},
            {text: "b) {5, 6}", correct:false},
            {text: "c) {3, 4}", correct:true},
            {text: "d) {1, 6}", correct:false},
        ]
    },
    {   // questão 2
        question:"A função f(x) = 2x + 5 é:",
        category: "Função",
        answers:[
            {text: "a) Linear crescente", correct:true},
            {text: "b) Linear decrescente", correct:false},
            {text: "c) Constante", correct:false},
            {text: "d) Quadrática", correct:false},
        ]
    },
    {   // questão 3
        question:"Se o conjunto A = {x ∈ ℕ | x < 5}, então A é:",
        category: "Conjuntos",
        answers:[
            {text: "a) {0, 1, 2, 3, 4}", correct:true},
            {text: "b) {1, 2, 3, 4, 5}", correct:false},
            {text: "c) {2, 3, 4, 5}", correct:false},
            {text: "d) {1, 2, 3}", correct:false},
        ]

    },
    {   // questão 4
        question:" A solução da equação 3x - 7 = 5 é:",
        category: "Equações",
        answers:[
            {text: "a) x = 2", correct:false},
            {text: "b) x = 4", correct:false},
            {text: "c) x = 6", correct:true},
            {text: "d) x = 5", correct:false},
        ]
    },
    {   // questão 5
        question:"Qual é o domínio da função f(x) = √(x-2)?",
        category: "Função",
        answers:[
            {text: "a) x ≥ 2", correct:true},
            {text: "b) x > 2", correct:false},
            {text: "c) x ≤ 2", correct:false},
            {text: "d) x < 2", correct:false},
        ]
    },
    {   // questão 6
        question:"Sejam os conjuntos A = {2, 4, 6} e B = {1, 2, 3}. Qual é a união A ∪ B?",
        category: "Conjuntos",
        answers:[
            {text: "a) {2, 4, 6, 1, 3}", correct:false},
            {text: "b) {1, 2, 3}", correct:false},
            {text: "c) {2, 4, 6}", correct:false},
            {text: "d) {1, 2, 3, 4, 6}", correct:true},
        ]
    },

    {   // questão 7
        question:"Qual a equação da reta que passa pelos pontos (0, 2) e (2, 6)?",
        category: "Função",
        answers:[
            {text: "a) y = 2x + 2", correct:true},
            {text: "b) y = 4x + 2", correct:false},
            {text: "c) y = 2x + 4", correct:false},
            {text: "d) y = 3x + 1", correct:false},
        ]
    },
    {   // questão 8
        question:"Se f(x) = 5x - 1, então f(2) é:",
        category: "Função",
        answers:[
            {text: "a) 9", correct:true},
            {text: "b) 10", correct:false},
            {text: "c) 11", correct:false},
            {text: "d) 12", correct:false},
        ]
    },
    {   // questão 9
        question:"Qual é a imagem da função f(x) = x² - 4x + 3 para x = 1?",
        category: "Função",
        answers:[
            {text: "a) 0", correct:false},
            {text: "b) 1", correct:false},
            {text: "c) 2", correct:false},
            {text: "d) 3", correct:true},
        ]
    },
    {   // questão 10
        question:"O conjunto {x ∈ ℝ | x² = 9} é:",
        category: "Conjuntos",
        answers:[
            {text: "a) {0}", correct:false},
            {text: "b) {-3, 3}", correct:true},
            {text: "c) {-9, 9}", correct:false},
            {text: "d) {3}", correct:false},
        ]
    },
    {   // questão 11
        question:"Qual o conjunto solução da inequação 2x - 5 > 1?",
         category: "Conjuntos",
        answers:[
            {text: "a) x > 3", correct:true},
            {text: "b) x > 2", correct:false},
            {text: "c) x < 3", correct:false},
            {text: "d) x < 2", correct:false},
        ]
    },
    {   // questão 12
        question:"Sejam A = {a, b, c} e B = {1, 2}. Quantos elementos terá A × B(produto cartesiano)?",
         category: "Conjuntos",
        answers:[
            {text: "a) 4", correct:false},
            {text: "b) 5", correct:false},
            {text: "c) 6", correct:true},
            {text: "d) 3", correct:false},
        ]
    },
    {   // questão 13
        question:"A função f(x) = -2x + 3 é:",
        category: "Função",
        answers:[
            {text: "a) Crescente", correct:false},
            {text: "b) Decrescente", correct:true},
            {text: "c) Constante", correct:false},
            {text: "d) Inexistente", correct:false},
        ]
    },
    {   // questão 14
        question:"Qual a raiz da função f(x) = x² - 4?",
        category: "Função",
        answers:[
            {text: "a) x = 2", correct:false},
            {text: "b) x = -2", correct:false},
            {text: "c) x = ±2", correct:true},
            {text: "d) x = 4", correct:false},
        ]
    },
    {   // questão 15
        question:"Se f(x) = 3x + 7 e g(x) = x - 2, qual é (f ∘ g)(x)?",
        category: "Função",
        answers:[
            {text: "a) 3x + 1", correct:true},
            {text: "b) 3x + 7", correct:false},
            {text: "c) 3x + 13", correct:false},
            {text: "d) 3x - 1", correct:false},
        ]
    },
    {  // questão 16
        question:"Em relação aos conjuntos A = {1, 3, 5} e B = {5, 7, 9}, qual é A ∩ B?",
         category: "Conjuntos",
        answers:[
            {text: "a) {1}", correct:false},
            {text: "b) {5}", correct:true},
            {text: "c) {5, 7}", correct:false},
            {text: "d) {1, 5, 9}", correct:false},
        ]
    },
    {  // questão 17
        question:"Qual o valor de x na equação (x/2) + (x/3) = 5?",
        category: "Equações",
        answers:[
            {text: "a) 4", correct:false},
            {text: "b) 5", correct:false},
            {text: "c) 6", correct:true},
            {text: "d) 7", correct:false},
        ]
    },
    {  // questão 18
        question:"Se a função é f(x) = 7, ela é:",
        category: "Função",
        answers:[
            {text: "a) Linear crescente", correct:false},
            {text: "b) Linear decrescente", correct:false},
            {text: "c) Constante", correct:true},
            {text: "d) Quadrática", correct:false},
        ]
    },
    {  // questão 19
        question:"19. O conjunto P = {x ∈ ℤ | -2 ≤ x < 3} é:",
         category: "Conjuntos",
        answers:[
            {text: "a) {-2, -1, 0, 1, 2, 3}", correct:false},
            {text: "b) {-2, -1, 0, 1, 2}", correct:true},
            {text: "c) {-1, 0, 1, 2}", correct:false},
            {text: "d) {0, 1, 2, 3}", correct:false},
        ]
    },
    {  // questão 20

        question:"Qual é o gráfico da função y = -x + 4?",
        category: "Função",
        answers:[
            {text: "a) Reta crescente", correct:false},
            {text: "b) Reta decrescente", correct:true},
            {text: "c) Parábola", correct:false},
            {text: "d) Circunferência", correct:false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; // vai determinar o valor do index do vetor na hora de exibir as questões
let score = 0; // vai contar os pontos



// função para inciiar o Quiz

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Próximo";
    showQuestion();
}


// função para mostrar as perguntas e resposta
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}


// reseta as respostas
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
         button.disabled = true;
    });
    
    nextButton.style.display = "block";
}

// função para demonstrar a pontuação
function showScore(){
    resetState();
    questionElement.innerHTML = `sua pontuação é: ${score} acertos de um total de ${questions.length} perguntas!`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display ="block";

}


// função que vai determinar se passa para a próxima pergunta ou mostra pontuação" 
function handleNextButton(){ 
    currentQuestionIndex++;  
    if(currentQuestionIndex < questions.length){
        showQuestion(); // vai passar para a próxima pergunta se houver outra.
    }else{
        showScore(); // vai mostrar a pontução.
    }
}


// função que determina o que vai ocorrer caso usuário clique no botão "próximo"
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton(); // chama a função  handleNextButton()
    }else{
        startQuiz();  // inicia o quiz novamente 
    }
})

startQuiz();

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} questões!`;
    nextButton.innerHTML = "Tentar novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Iniciar o quiz ao carregar a página
startQuiz();

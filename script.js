const pistas = [
    {
        titulo: "Algo está escondido...",
        texto: "Sou pequeno e posso estar bem perto de você. Algumas pessoas me usam para criar algo que pode ser ouvido."
    },
    {
        titulo: "Uma nova pista...",
        texto: "Não sou um brinquedo e também não preciso de eletricidade. Quando sou usado corretamente, posso produzir música."
    },
    {
        titulo: "Você está chegando perto...",
        texto: "Sou um instrumento musical. Meu tamanho permite que eu seja facilmente carregado nas mãos."
    },
    {
        titulo: "Está quase óbvio...",
        texto: "Para produzir meu som, o ar é muito importante. Você precisa usar a boca para me fazer tocar."
    },
    {
        titulo: "A ULTIMA PISTA!",
        texto: "Sou um pequeno instrumento musical que você toca soprando. Tenho varias notas e posso ser segurado facilmente com as mãos."
    }
];

let pistaAtual = 0;


/* ELEMENTOS DA PAGINA */

const btnComecar = document.getElementById("btnComecar");
const btnResponder = document.getElementById("btnResponder");
const btnProxima = document.getElementById("btnProxima");
const btnReiniciar = document.getElementById("btnReiniciar");

const inicio = document.getElementById("inicio");
const pistasTela = document.getElementById("pistas");
const final = document.getElementById("final");

const numeroPista = document.getElementById("numeroPista");
const tituloPista = document.getElementById("tituloPista");
const textoPista = document.getElementById("textoPista");

const resposta = document.getElementById("resposta");
const mensagem = document.getElementById("mensagem");


/* MOSTRAR UMA TELA */

function mostrarTela(tela) {
    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(elemento) {
        elemento.classList.remove("ativa");
    });

    tela.classList.add("ativa");
}


/* MOSTRAR A PISTA ATUAL */

function mostrarPista() {
    const pista = pistas[pistaAtual];

    numeroPista.textContent =
        "PISTA " + (pistaAtual + 1);

    tituloPista.textContent =
        pista.titulo;

    textoPista.textContent =
        pista.texto;

    resposta.value = "";

    mensagem.textContent = "";

    if (pistaAtual === pistas.length - 1) {
        btnProxima.textContent = "REVELAR O PRESENTE";
    } else {
        btnProxima.textContent = "PROXIMA PISTA";
    }
}


/* BOTAO COMEÇAR */

btnComecar.addEventListener("click", function() {
    pistaAtual = 0;

    mostrarPista();

    mostrarTela(pistasTela);
});


/* BOTAO RESPONDER */

btnResponder.addEventListener("click", function() {
    const valor = resposta.value.trim().toLowerCase();

    if (
        valor === "gaita" ||
        valor === "uma gaita" ||
        valor === "gaita de boca"
    ) {
        mensagem.textContent = "Voce acertou!";

        mensagem.style.color = "#8affb0";

        setTimeout(function() {
            mostrarTela(final);
        }, 800);

    } else {
        mensagem.textContent =
            "Nao e essa! Voce pode tentar novamente ou passar para a proxima pista.";

        mensagem.style.color = "#ff8585";
    }
});


/* BOTAO PROXIMA PISTA */

btnProxima.addEventListener("click", function() {

    if (pistaAtual < pistas.length - 1) {

        pistaAtual = pistaAtual + 1;

        mostrarPista();

    } else {

        mostrarTela(final);
    }
});


/* APERTAR ENTER PARA RESPONDER */

resposta.addEventListener("keydown", function(evento) {

    if (evento.key === "Enter") {
        btnResponder.click();
    }

});


/* BOTAO REINICIAR */

btnReiniciar.addEventListener("click", function() {

    pistaAtual = 0;

    resposta.value = "";

    mensagem.textContent = "";

    mostrarTela(inicio);
});
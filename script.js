/***********************
 * TELA DE SENHA
 ***********************/
const senhaCorreta = "cachorrinhodajussara";

function verificarSenha() {
    const input = document.getElementById("inputSenha").value;
    const erro = document.getElementById("erroSenha");

    if (input === senhaCorreta) {
        document.getElementById("tela-senha").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    } else {
        erro.textContent = "Senha incorreta 💔 tenta de novo";
    }
}

/***********************
 * CONTEÚDO
 ***********************/
const mensagens = [
    "Desde que você entrou na minha vida, tudo ficou melhor ❤️",
    "Seu sorriso ilumina meus dias 😍",
    "Cada momento com você é único 💕",
    "Sou grato por vc me permitir te conhecer melhor a cada dia 💖",
    "Voce é uma pessoa incrivel e que nosso futuro esteja nos planos de Deus❤️",
    "Somos praticamente a copia um do outro, isso me deixa fascinado 💖",
    "Espero que um dia possamos nos encontrar e termos nosso tao sonhado beijo 💏",
    "Eu sou muito grato por ter você 💖",
    "Eu te adoro muito, muito mesmo, sempre vou querer ser bem mesmo de longe 💖",
    "Do seu cachorrinho, Guilherme 🐶",
    "EU TE ADORO MUITO, JUSSARA! ❤️"
];

const fotos = [
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
    "fotos/foto5.jpg"
];

// 👇 trava na foto3.jpg
const FOTO_FINAL = 2;

let indiceMensagem = 0;
let indiceFoto = 0;
let indiceGaleria = 0;
let musicaTocando = false;

/***********************
 * BOTÃO PRINCIPAL
 ***********************/
function interagir() {
    trocarMensagem();
    trocarFoto();
    tocarMusica();
    criarCoracao();
    adicionarFoto();
}

/***********************
 * MENSAGENS (CORRIGIDO)
 ***********************/
function trocarMensagem() {
    const mensagem = document.getElementById("mensagem");
    const botao = document.getElementById("botao");

    mensagem.textContent = mensagens[indiceMensagem];

    // Mostra a última e só depois trava
    if (indiceMensagem === mensagens.length - 1) {
        botao.disabled = true;
        botao.textContent = "❤️ Para sempre nós ❤️";
    } else {
        indiceMensagem++;
    }
}

/***********************
 * FOTO (CORRIGIDO)
 ***********************/
function trocarFoto() {

    if (indiceMensagem === mensagens.length - 1) {
        indiceFoto = FOTO_FINAL;
    } else {
        indiceFoto++;
        if (indiceFoto >= fotos.length) {
            indiceFoto = 0;
        }
    }

    document.getElementById("foto").src = fotos[indiceFoto];
}

/***********************
 * MÚSICA
 ***********************/
function tocarMusica() {
    if (!musicaTocando) {
        document.getElementById("musica").play();
        musicaTocando = true;
    }
}

/***********************
 * CORAÇÕES
 ***********************/
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(coracao);

    setTimeout(() => coracao.remove(), 5000);
}

/***********************
 * GALERIA
 ***********************/
function adicionarFoto() {
    if (indiceGaleria >= fotos.length) return;

    const galeria = document.getElementById("galeria");
    const div = document.createElement("div");
    div.classList.add("foto-quadrado");

    const img = document.createElement("img");
    img.src = fotos[indiceGaleria];

    div.appendChild(img);
    galeria.appendChild(div);

    indiceGaleria++;
}
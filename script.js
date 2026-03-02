/***********************
 * TELA DE SENHA
 ***********************/
const senhaCorreta = "luizaeuteamomuito"; // <<< TROQUE A SENHA AQUI

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
 * CONTEÚDO PRINCIPAL
 ***********************/
const mensagens = [
    "Desde que você entrou na minha vida, tudo ficou melhor ❤️",
    "Seu sorriso ilumina meus dias 😍",
    "Cada momento com você é único (mesmo que nao sejam muitos kk) 💕",
    "Sou grato até pelos seus sumiços que me fazem morrer de preocupação 😂",
    "Sou grato por cada briga, cada discussão, cada momento difícil que passamos juntos, porque eles só fortaleceram nosso amor 💪❤️",
    "Sei que eu cobro muito da sua presença, mas é porque eu te amo demais e não quero te perder 😢",
    "Mesmo com todas as nossas diferenças, eu te amo do jeito que você é e não quero mudar nada em você 💖",
    "Eu sei que às vezes eu sou difícil de lidar, mas é porque eu me importo tanto com você e quero que tudo seja perfeito para nós dois 😔",
    "Espero que um dia a gente possa se encontrar pessoalmente e nos possamos ter nosso tao sonhado beijo, abraço e tudo mais que a gente sonha 💏",
    "Espero que você saiba que eu te amo muito e que eu sempre vou estar aqui para você, mesmo que a gente esteja longe um do outro 💕",
    "Eu sou muito grato por ter você 💖",
    "Feliz aniversário, meu amor 🎂❤️"
];

const fotos = [
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
    "fotos/foto5.jpg"
];

let indiceMensagem = 0;
let indiceFoto = 0;
let indiceGaleria = 0;
let musicaTocando = false;

/* Botão principal */
function interagir() {
    trocarMensagem();
    trocarFoto();
    tocarMusica();
    criarCoracao();
    adicionarFoto();
}

/* Mensagens + bloqueio final */
function trocarMensagem() {
    const mensagem = document.getElementById("mensagem");
    const botao = document.getElementById("botao");

    mensagem.textContent = mensagens[indiceMensagem];

    if (indiceMensagem === mensagens.length - 1) {
        botao.disabled = true;
        botao.textContent = "❤️ Para sempre nós ❤️";
        return;
    }

    indiceMensagem++;
}

/* Foto muda SOMENTE no clique */
function trocarFoto() {
    indiceFoto++;

    if (indiceFoto >= fotos.length) {
        indiceFoto = 0;
    }

    document.getElementById("foto").src = fotos[indiceFoto];
}

/* Música */
function tocarMusica() {
    if (!musicaTocando) {
        document.getElementById("musica").play();
        musicaTocando = true;
    }
}

/* Corações */
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(coracao);

    setTimeout(() => coracao.remove(), 5000);
}

/* Galeria por clique */
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
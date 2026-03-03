/***********************
 * TELA DE SENHA
 ***********************/
const senhaCorreta = "luizaeuteamomuito";

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
    "Sou grato até pelos seus sumiços 😂",
    "Sou grato por cada briga que fortaleceu nosso amor 💪❤️",
    "Mesmo com nossas diferenças, eu te amo 💖",
    "Espero que um dia possamos nos encontrar 💏",
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

const FOTO_FINAL = 2;

let indiceMensagem = 0;
let indiceFoto = 0;
let indiceGaleria = 0;
let musicaTocando = false;
let pedidoJaMostrado = false;

/***********************
 * BOTÃO PRINCIPAL
 ***********************/
function interagir() {

    if (indiceMensagem >= mensagens.length - 1) {
        if (!pedidoJaMostrado) {
            pedidoJaMostrado = true;
            setTimeout(mostrarPedidoFinal, 1000);
        }
        return;
    }

    trocarMensagem();
    trocarFoto();
    tocarMusica();
    criarCoracao();
    adicionarFoto();
}

/***********************
 * MENSAGENS
 ***********************/
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

/***********************
 * FOTO
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

/***********************
 * ESTRELAS
 ***********************/
function criarEstrelas(){
    const container = document.getElementById("estrelas");
    if(!container) return;

    for(let i=0;i<80;i++){
        let estrela = document.createElement("span");
        estrela.style.top = Math.random()*100+"%";
        estrela.style.left = Math.random()*100+"%";
        estrela.style.animationDelay = Math.random()*2+"s";
        container.appendChild(estrela);
    }
}

document.addEventListener("DOMContentLoaded", criarEstrelas);

/***********************
 * PEDIDO FINAL
 ***********************/
function mostrarPedidoFinal(){

    const overlay = document.getElementById("overlay-surpresa");
    const texto = document.getElementById("textoPedido");

    if(!overlay || !texto) return;

    texto.innerHTML =
        "Feliz aniversario, meu amor!!!<br><br>" +
        "Nunca te fiz um pedido oficial...<br><br>" +
        "Luiza, meu amor, você aceita namorar comigo? 💖";

    overlay.classList.add("ativo");
    overlay.style.display = "flex";

    if(navigator.vibrate){
        navigator.vibrate([200,100,200,300]);
    }
}

function resposta(){
    const texto = document.getElementById("textoPedido");
    const botoes = document.querySelector(".botoes");

    texto.innerHTML = "Eu sabia que você diria SIM 💖✨";

    if(botoes) botoes.style.display="none";

    for(let i=0;i<40;i++){
        setTimeout(criarCoracao, i*100);
    }
}

/***********************
 * BOTÃO NÃO QUE FOGE
 ***********************/
function fugirBotao() {

    const botao = document.getElementById("btnNao");
    if(!botao) return;

    const larguraTela = window.innerWidth - botao.offsetWidth;
    const alturaTela = window.innerHeight - botao.offsetHeight;

    const novaPosicaoX = Math.random() * larguraTela;
    const novaPosicaoY = Math.random() * alturaTela;

    botao.style.position = "fixed";
    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
}

/* Funciona também no celular */
document.addEventListener("touchstart", function(e){
    if(e.target.id === "btnNao"){
        fugirBotao();
    }
});
let body = document.getElementsByTagName("body")[0];
body.style.display = "none";
let vencedor = document.getElementsByTagName("p")[0];
let quadro = document.getElementsByTagName("figure")[0];
let placarGeral = document.getElementsByTagName("div")[0];
let placarGeral_2 = document.getElementsByTagName("div")[1];
let placar_1 = document.getElementById("mostrador-1");
let placar_2 = document.getElementById("mostrador-2");
let botao_1 = document.getElementById("botao-1");
let botao_2 = document.getElementById("botao-2");
let botaoReset = document.getElementById("reset");
let botaoTruco = document.getElementById("truco");
let nomeTime_1;
let nomeTime_2;
let pontuacao = 0;


do {
    nomeTime_1 = window.prompt("Digite o nome do primeiro besta");

    if (nomeTime_1.length < 3) {
        window.alert("Digite o nome do besta com ao menos 3 letras!");
    }

} while (nomeTime_1.length < 3);

do {
    nomeTime_2 = window.prompt("Digite o nome do segundo besta");

    if (nomeTime_2.length < 3) {
        window.alert("Digite o nome do besta com ao menos 3 letras!");
    }

} while (nomeTime_2.length < 3);

botao_1.value = nomeTime_1;
botao_2.value = nomeTime_2;
botaoReset.value = "Reiniciar";
botaoTruco.value = "Truco";

/*Linhas de estilização*/
body.style.width = "100vw";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";

vencedor.style.color = "white";
vencedor.style.fontFamily = "Arial"
vencedor.style.margin = "0";
vencedor.style.fontSize = "5vw";
vencedor.style.display = "none";

quadro.style.display = "flex";
quadro.style.width = "50vw";
quadro.style.height = "25vw";

placarGeral.style.width = "50%";
placarGeral.style.display = "flex";
placarGeral.style.justifyContent = "center";
placarGeral.style.alignItems = "center";
placarGeral.style.flexDirection = "column";
placarGeral.style.fontFamily = "Arial";
placarGeral.style.fontSize = "2rem";
placarGeral.style.color = "white";

placarGeral_2.style.width = "50%";
placarGeral_2.style.display = "flex";
placarGeral_2.style.justifyContent = "center";
placarGeral_2.style.alignItems = "center";
placarGeral_2.style.flexDirection = "column";
placarGeral_2.style.fontFamily = "Arial";
placarGeral_2.style.fontSize = "2rem";
placarGeral_2.style.color = "white";

botao_1.style.color = "white";
botao_1.style.minWidth = "100px";

botao_2.style.color = "white";
botao_2.style.minWidth = "100px";

/*Linhas de estilização*/
placar_1.placar = 0;
placar_2.placar = 0;

botao_1.addEventListener("click", somarPlacarTime_1);
botao_2.addEventListener("click", somarPlacarTime_2);
botaoReset.addEventListener("click", reiniciarPlacar);
botaoTruco.addEventListener("click", pedirTruco);

mudarCorDoBotao();

function somarPlacarTime_1() {

    if (pontuacao != 0) {
        placar_1.placar += pontuacao;
        placar_1.innerText = placar_1.placar;
    } else {
        placar_1.innerText = ++placar_1.placar;
    }

    pontuacao = 0;
    botaoTruco.value = "Truco";
    vencedor.style.display = "none";

    mudarCorDoBotao();
    conferirVencedor();
}

function somarPlacarTime_2() {

    if (pontuacao != 0) {
        placar_2.placar += pontuacao;
        placar_2.innerText = placar_2.placar;
    } else {
        placar_2.innerText = ++placar_2.placar;
    }

    pontuacao = 0;
    botaoTruco.value = "Truco";
    vencedor.style.display = "none";

    mudarCorDoBotao();
    conferirVencedor();
}

function mudarCorDoBotao() {
    if (placar_1.placar > placar_2.placar) {
        botao_1.style.background = "Green";
        botao_2.style.background = "Red";
    } else if (placar_1.placar < placar_2.placar) {
        botao_1.style.background = "Red";
        botao_2.style.background = "Green";
    } else {
        botao_1.style.background = botao_2.style.background = "black";
    }
}

function reiniciarPlacar() {
    placar_1.innerText = placar_1.placar = 0;
    placar_2.innerText = placar_2.placar = 0;
    pontuacao = 0;

    botaoTruco.value = "Truco ";
    mudarCorDoBotao();
    mostrarBotoes();
}

function pedirTruco() {
    if (pontuacao >= 12) {
        return;
    }

    pontuacao += 3;
    botaoTruco.value = "Truco " + pontuacao;
    vencedor.style.display = "unset";
}

function conferirVencedor() {
    if (placar_1.placar >= 12) {
        vencedor.innerText = nomeTime_1 + " ladrão venceu!"
        vencedor.style.display = "unset";
        esconderBotoes();
        return true;
    } else if (placar_2.placar >= 12) {
        vencedor.innerText = nomeTime_1 + " ladrão venceu!"
        vencedor.style.display = "unset";
        esconderBotoes();
        return true;
    }

    return false;
}

function esconderBotoes() {
    botao_1.style.display = "none";
    botao_2.style.display = "none";
    botaoTruco.style.display = "none";
}

function mostrarBotoes() {
    botao_1.style.display = "unset";
    botao_2.style.display = "unset";
    botaoTruco.style.display = "unset";
}
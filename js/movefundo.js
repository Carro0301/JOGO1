//Função que movimenta o fundo do jogo
function movefundo() {

    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda);
}

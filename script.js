const botaoAumentarFonte = document.getElementById("aumentar-fonte");
const botaoDiminuirFonte = document.getElementById("diminuir-fonte");
const botaoContraste = document.getElementById("alternar-contraste");
const statusAcessibilidade = document.getElementById("status-acessibilidade");

let tamanhoFonte = 100;
const tamanhoFonteMinimo = 80;
const tamanhoFonteMaximo = 160;

function atualizarBotoesFonte() {
    botaoDiminuirFonte.disabled = tamanhoFonte <= tamanhoFonteMinimo;
    botaoAumentarFonte.disabled = tamanhoFonte >= tamanhoFonteMaximo;
}

function ajustarFonte(variacao) {
    tamanhoFonte = Math.max(
        tamanhoFonteMinimo,
        Math.min(tamanhoFonteMaximo, tamanhoFonte + variacao)
    );

    document.documentElement.style.fontSize = tamanhoFonte + "%";
    statusAcessibilidade.textContent = "Tamanho do texto: " + tamanhoFonte + "%.";
    atualizarBotoesFonte();
}

botaoAumentarFonte.addEventListener("click", function () {
    ajustarFonte(10);
});

botaoDiminuirFonte.addEventListener("click", function () {
    ajustarFonte(-10);
});

botaoContraste.addEventListener("click", function () {
    const contrasteAtivo = document.body.classList.toggle("alto-contraste");
    botaoContraste.setAttribute("aria-pressed", String(contrasteAtivo));
    statusAcessibilidade.textContent = contrasteAtivo
        ? "Modo de alto contraste ativado."
        : "Modo de alto contraste desativado.";
});

atualizarBotoesFonte();

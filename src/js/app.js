/testando o background/
const telaCarrossel = document.getElementById("carrossel");
const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');
const cores = [
    'var(--imagem1)',
    'var(--imagem2)',
    'var(--imagem3)',
];
/*variável acumuladora de valor*/
let indiceAtual = 0;
let temporizador;

function atualizarCarrossel() {
    telaCarrossel.style.background = cores[indiceAtual];
}
btnDireita.addEventListener("click", () => {
    indiceAtual++;
    if (indiceAtual > cores.length) {
        indiceAtual = 0;
    }
    atualizarCarrossel();

    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
        btnDireita.click();
    }, 3000);
})

btnEsquerda.addEventListener("click", () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = 0;
    }
    atualizarCarrossel();

    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
        btnEsquerda.click();
    }, 3000);
});

atualizarCarrossel();
clearTimeout(temporizador);
temporizador = setTimeout(() => {
    btnEsquerda.click();
}, 3000);
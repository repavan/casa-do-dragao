const botaoCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botaoCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
        removerBotaoSelecionado();
        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        imagens[indice].classList.add("ativa");

        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        informacoes[indice].classList.add("ativa");
    })
})

function removerBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
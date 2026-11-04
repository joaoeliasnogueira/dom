const titulo = document.getElementById("titulo");
console.log("Título:", titulo.textContent);

const descricao = document.querySelector(".descricao");
console.log("Descrição:", descricao.textContent);

const filme = document.querySelectorAll(".filme");

console.log("Quantidade de filmes:", filme.length);

filme.forEach((filme, indice) => {
    console.log(`${indice + 1}. ${filme.textContent}`);
});
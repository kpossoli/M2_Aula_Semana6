// Array de objetos de produtos
const produtos = [
    { nome: 'Notebook', preco: 3500 },
    { nome: 'Celular', preco: 1800 },
    { nome: 'Tablet', preco: 1200 },
    { nome: 'Fone de Ouvido', preco: 150 },
    { nome: 'Mouse', preco: 80 }
];

// Função para encontrar o produto com o menor preço
function encontrarProdutoComMenorPreco(arrayProdutos) {
    if (arrayProdutos.length === 0) {
        return null; // Retorna null se o array estiver vazio
    }

    // Inicializa com o primeiro produto como o de menor preço
    let produtoMenorPreco = arrayProdutos[0];

    // Percorre o array para encontrar o produto com o menor preço
    for (let i = 1; i < arrayProdutos.length; i++) {
        if (arrayProdutos[i].preco < produtoMenorPreco.preco) {
            produtoMenorPreco = arrayProdutos[i];
        }
    }

    return produtoMenorPreco;
}

// Chamada da função para encontrar o produto com o menor preço
const produtoMenorPreco = encontrarProdutoComMenorPreco(produtos);

// Exibindo o resultado na página HTML
const resultElement = document.getElementById('result');
if (produtoMenorPreco) {
    resultElement.textContent = `O produto com menor preço é: ${produtoMenorPreco.nome} - R$ ${produtoMenorPreco.preco.toFixed(2)}`;
} else {
    resultElement.textContent = 'Não há produtos no array.';
}

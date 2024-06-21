// Função para verificar a disponibilidade do produto
function verificarDisponibilidade(produto) {
    // Array de produtos disponíveis (simulando um banco de dados ou lista real)
    const produtosDisponiveis = ['produto1', 'produto2', 'produto3'];

    // Retornar uma nova Promise
    return new Promise((resolve, reject) => {
        // Simular um atraso de 2 segundos na verificação
        setTimeout(() => {
            // Verificar se o produto está disponível
            if (produtosDisponiveis.includes(produto)) {
                // Produto está disponível, resolver a Promise
                resolve(`O produto "${produto}" está disponível.`);
            } else {
                // Produto não está disponível, rejeitar a Promise
                reject(`O produto "${produto}" não está disponível.`);
            }
        }, 2000); // 2 segundos
    });
}

// Exemplo de uso:
verificarDisponibilidade('produto1')
    .then((mensagem) => {
        console.log(mensagem); // Aqui você poderia exibir a mensagem na interface do usuário
        document.getElementById('resultado').innerText = mensagem; // Exemplo para mostrar no HTML
    })
    .catch((erro) => {
        console.error(erro); // Tratamento de erro, se necessário
        document.getElementById('resultado').innerText = erro; // Exemplo para mostrar no HTML
    });

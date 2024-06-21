// Função para salvar um comentário
function salvarComentario() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText === '') {
        alert('Por favor, insira um comentário antes de salvar.');
        return;
    }

    // Criar objeto com o comentário e a data atual
    const novoComentario = {
        texto: commentText,
        data: new Date().toLocaleString()
    };

    // Recuperar array de comentários do localStorage ou inicializar um novo array vazio
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Adicionar o novo comentário ao array
    comentarios.push(novoComentario);

    // Salvar o array de comentários de volta no localStorage
    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    // Limpar o campo de entrada
    commentInput.value = '';

    // Atualizar a lista de comentários exibida na página
    atualizarListaComentarios(comentarios);
}

// Função para atualizar a lista de comentários exibida na página
function atualizarListaComentarios(comentarios) {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    comentarios.forEach(comentario => {
        const li = document.createElement('li');
        li.textContent = `${comentario.texto} - (${comentario.data})`;
        commentList.appendChild(li);
    });
}

// Carregar os comentários salvos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    atualizarListaComentarios(comentarios);
});

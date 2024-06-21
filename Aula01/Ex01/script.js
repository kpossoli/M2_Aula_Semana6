// Array de objetos de usuários
const users = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 18 },
    { nome: 'Pedro', idade: 17 },
    { nome: 'Ana', idade: 20 },
    { nome: 'Carlos', idade: 16 }
];

// Função para filtrar usuários com 18 anos ou mais
function filtrarUsuariosMaioresDeIdade(arrayUsuarios) {
    return arrayUsuarios.filter(usuario => usuario.idade >= 18);
}

// Pegar a lista onde iremos exibir os resultados
const userListElement = document.getElementById('userList');

// Filtrar usuários maiores de idade
const usuariosMaioresDeIdade = filtrarUsuariosMaioresDeIdade(users);

// Exibir resultados na página
usuariosMaioresDeIdade.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = `${usuario.nome} - ${usuario.idade} anos`;
    userListElement.appendChild(li);
});

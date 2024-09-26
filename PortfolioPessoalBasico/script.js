// script.js

// Função para exibir detalhes dos projetos
function exibirDetalhes(projeto) {
    let detalhes = '';
    if (projeto === 'projeto1') {
        detalhes = 'Este é um site responsivo feito com HTML e CSS.';
    } else if (projeto === 'projeto2') {
        detalhes = 'Este é um aplicativo de tarefas usando JavaScript para gerenciar a lista.';
    } else if (projeto === 'projeto3') {
        detalhes = 'Este é um sistema de cadastro com APIs REST, feito com Node.js.';
    }
    document.getElementById('detalhes').textContent = detalhes;
}

// Manipulação do formulário de contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const resposta = `Obrigado pelo contato, ${nome}! Nós responderemos em breve no seu email: ${email}.`;
    
    document.getElementById('respostaContato').textContent = resposta;
});

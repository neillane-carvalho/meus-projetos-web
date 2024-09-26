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

// Scrollspy para destacar o link de navegação ativo
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
});

// Mostrar/esconder o botão "Voltar ao topo"
window.addEventListener('scroll', function() {
    const topoButton = document.getElementById('topo');
    if (window.scrollY > 300) {
        topoButton.style.display = 'block';
    } else {
        topoButton.style.display = 'none';
    }
});

// Função para rolar para o topo
document.getElementById('topo').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animação de "fade-in" ao rolar
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

fadeElements.forEach((el) => observer.observe(el));
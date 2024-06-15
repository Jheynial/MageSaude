const toggleButton = document.getElementById('toggleButton');
const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

toggleButton.addEventListener('click', toggleForm);

function toggleForm() {
    loginForm.classList.toggle('hidden');
    cadastroForm.classList.toggle('hidden');
    toggleButton.textContent = loginForm.classList.contains('hidden') ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Cadastre-se';
    document.getElementById('formTitle').textContent = loginForm.classList.contains('hidden') ? 'Cadastro' : 'Login';
}

loginForm.addEventListener('submit', loginUser);

function loginUser(e) {
    e.preventDefault();
    const email = loginForm.loginEmail.value;
    const senha = loginForm.loginSenha.value;
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
        localStorage.setItem('usuarioAtual', JSON.stringify(usuario));
        window.location.href = 'https://jheynial.github.io/MageSaude/Public/pages/Perfil/perfil.html'; // Redireciona para a página de perfil
    } else {
        showPopup_senha('Email ou senha incorretos!');
    }
}

cadastroForm.addEventListener('submit', cadastrarUsuario);

function cadastrarUsuario(e) {
    e.preventDefault();
    const novoUsuario = {
        nome: cadastroForm.nome.value,
        sobrenome: cadastroForm.sobrenome.value,
        email: cadastroForm.emailCadastro.value,
        senha: cadastroForm.senhaCadastro.value,
        cpf: cadastroForm.cpf.value,
        telefone: cadastroForm.telefone.value,
        sus: cadastroForm.sus.value
    };

    // Verifica se o email já está cadastrado
    const usuarioExistente = usuarios.find(u => u.email === novoUsuario.email);
    if (usuarioExistente) {
        showPopup_senha('Este email já está cadastrado!');
        return;
    }

    // Adiciona o novo usuário ao array de usuários
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Armazena as informações adicionais no localStorage
    localStorage.setItem('dadosUsuario', JSON.stringify({
        nome: novoUsuario.nome,
        sobrenome: novoUsuario.sobrenome,
        cpf: novoUsuario.cpf,
        telefone: novoUsuario.telefone,
        sus: novoUsuario.sus
    }));

    // Mostra mensagem de sucesso
    showPopup('Usuário cadastrado com sucesso!');

    // Opcional: Redireciona para a página de perfil ou outra página desejada
    window.location.href = '/MageSaude/Public/pages/perfil/perfil.html';
}

function showPopup(message) {
    const popup = document.getElementById('feedbackPopup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

function showPopup_senha(message) {
    const popup_senha = document.getElementById('feedbackPopup_senha');
    const popupMessage_senha = document.getElementById('popupMessage_senha');
    popupMessage_senha.textContent = message;
    popup_senha.style.display = 'block';
    setTimeout(() => {
        popup_senha.style.display = 'none';
    }, 3000);
}

function closePopup() {
    const popup = document.getElementById('feedbackPopup');
    popup.style.display = 'none';
}

function closePopup_senha() {
    const popup_senha = document.getElementById('feedbackPopup_senha');
    popup_senha.style.display = 'none';
}

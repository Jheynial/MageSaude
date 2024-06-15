
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
        window.location.href = 'pages/perfil/perfil.html'; // Redireciona para a página de perfil
    } else {
        showPopup_senha('Email ou senha incorretos!');
    }
}

cadastroForm.addEventListener('submit', cadastrarUsuario);

function cadastrarUsuario(e) {
    e.preventDefault();
    // Lógica para cadastrar novo usuário
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

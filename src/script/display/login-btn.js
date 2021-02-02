import login from '../../img/user-white.png';

const nav = document.querySelector('nav');

function getLoginBtn() {
    const loginBtn = document.createRange().createContextualFragment(`
    <button class="nav-btn login-btn">
        <img src="${login}" alt=""><div>Login</div>
    </button>
`);
    nav.appendChild(loginBtn);
}

export { getLoginBtn };
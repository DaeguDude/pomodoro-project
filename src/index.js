import './style/style.css';
// import navbar from './navbar'
import logo from './img/icon-white.png';
import report from './img/graph-white.png';
import setting from './img/config-white.png';
import login from './img/user-white.png';

// load logo image
const brandLogo = document.querySelector('.logo');

function getBrandLogo() {
    const logoBox = document.createRange().createContextualFragment(`
    <a href="/">
        <img src="${logo}" alt="">Pomofocus
    </a>
`);
    brandLogo.appendChild(logoBox);
}

// navbar button config
const nav = document.querySelector('nav');

function getReportBtn() {
    const reportBtn = document.createRange().createContextualFragment(`
    <button class="nav-btn report-btn">
        <img src="${report}" alt=""><div>Report</div>
    </button>
`);
    nav.appendChild(reportBtn);
}

function getSettingBtn() {
    const settingBtn = document.createRange().createContextualFragment(`
    <button class="nav-btn setting-btn">
        <img src="${setting}" alt=""><div>Setting</div>
    </button>
`);
    nav.appendChild(settingBtn);
}

function getLoginBtn() {
    const loginBtn = document.createRange().createContextualFragment(`
    <button class="nav-btn login-btn">
        <img src="${login}" alt=""><div>Login</div>
    </button>
`);
    nav.appendChild(loginBtn);
}

function getProfileBtn() {
    const profileBtn = document.createRange().createContextualFragment(`
    <div class="profile-box">
        <img src="" alt="">
    </div>
`);
    nav.appendChild(profileBtn);
}

function render() {
    getBrandLogo();
    getReportBtn();
    getSettingBtn();
    getLoginBtn();
    // getProfileBtn();
}


// function profileMenu() {
//     const loginBtn = document.querySelector('.login-btn');
//     loginBtn.addEventListener('click', () => {
//         loginBtn.remove();
//         nav.appendChild(profileBox);
//     })

//     nav.appendChild(profileBox);

// };

render();

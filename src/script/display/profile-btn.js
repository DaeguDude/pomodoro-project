import Profile from "../../img/user-black.png";
import Subscription from "../../img/rocket-black.png";
import Logout from "../../img/logout-black.png";
import DeleteAcc from "../../img/delete-black.png";

const nav = document.querySelector('nav');

//render profile button
function getProfileBtn() {
    const profileBtn = document.createRange().createContextualFragment(`
    <div class="profile-box">
        <img src="" alt="">
    </div>
`);
    nav.appendChild(profileBtn);
}

import login from '../../img/user-white.png';
import google from '../../img/google-black.png';

const nav = document.querySelector('nav');

function toggleLoginDropdown() {
    document.querySelector('#login-dropdown').classList.toggle("dropdown-show");
    console.log("click");
}

function getProfileBtn() {
    const profileBtn = document.createRange().createContextualFragment(`
    <div class="profile-area">
        <button class="nav-btn" id="login-btn">
            <img src="${login}" alt="" class="mini-icon"><div>Login</div>
        </button>
        <div class="dropdown-container" id="login-dropdown">
            <div class="dropdown-list" id="google-signin">
                <img src="${google}" alt="" class="dropdown-icon"><div>Login with Google</div>
            </div>
        </div>    
    </div>
`);
    nav.appendChild(loginBtn);
    document.getElementById("login-btn").addEventListener("click", toggleLoginDropdown);
}

// function rmLoginBtn() {
//     const loginBtn = document.querySelector('.profile-area');
//     loginBtn.remove();
// }

export { getProfileBtn };
import profile from "../../img/user-black.png";
import subscription from "../../img/rocket-black.png";
import logout from "../../img/logout-black.png";
import deleteAcc from "../../img/delete-black.png";
import { signOut , googleUserImg } from "../auth"

const nav = document.querySelector('nav');


function toggleProfileDropdown() {
    document.querySelector('#profile-dropdown').classList.toggle("dropdown-show");
    console.log("click");
}

//render profile button
function getProfileBtn() {
    const profileBtn = document.createRange().createContextualFragment(`
    <div class="profile-area">
    <button class="nav-btn" id="profile-btn">
        <img src="${googleUserImg}" alt="" class="mini-profile">
    </button>
    <div class="dropdown-container" id="profile-dropdown">
        <div class="dropdown-list" id="profile-menu">
            <img src="${profile}" alt="" class="dropdown-icon"><div>Profile</div>
        </div>
        <div class="dropdown-list" id="subscription-menu">
            <img src="${subscription}" alt="" class="dropdown-icon"><div>Subscription</div>
        </div>
        <div class="dropdown-list" id="google-logout">
            <img src="${logout}" alt="" class="dropdown-icon"><div>Logout</div>
        </div>
        <div class="dropdown-list" id="delete-account">
            <img src="${deleteAcc}" alt="" class="dropdown-icon"><div>DeleteAccount</div>
        </div>
    </div>    
</div>
`);
    nav.appendChild(profileBtn);
    document.getElementById("profile-btn").addEventListener("click", toggleProfileDropdown);
    document.getElementById("google-logout").addEventListener("click", signOut);
}

export { getProfileBtn };
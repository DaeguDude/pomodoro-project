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

export { getProfileBtn };
// const navBtn = document.createElement('button');
// navBtn.classList.add('nav-btn');

// const userWhite = document.createElement('img');
// userWhite.src = './img/user-white.png';

// navBtn.appendChild(userWhite);

// console.log(navBtn)

// const loginBtn = document.createRange().createContextualFragment(`
//     <button class="nav-btn">
//         <img src="./img/user-white.png" alt="">
//         <div>Login</div>
//     </button>
// `)

const profileBox = document.createRange().createContextualFragment(`
    <div class="profile-box">
        <img src="./img/user-white.png" alt="">
    </div>
`)

const nav = document.querySelector('nav');
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', () => {
    loginBtn.remove();
    nav.appendChild(profileBox);
})

nav.appendChild(profileBox)

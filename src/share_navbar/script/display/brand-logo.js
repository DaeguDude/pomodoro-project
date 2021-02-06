import logo from '../../img/icon-white.png';

const brandLogo = document.querySelector('.logo');

function getBrandLogo() {
    const logoBox = document.createRange().createContextualFragment(`
    <a href="/">
        <img src="${logo}" alt="">Pomofocus
    </a>
`);
    brandLogo.appendChild(logoBox);
}

export { getBrandLogo };
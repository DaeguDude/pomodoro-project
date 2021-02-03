import setting from '../../img/config-white.png';

const nav = document.querySelector('nav');

function getSettingBtn() {
    const settingBtn = document.createRange().createContextualFragment(`
    <button class="nav-btn setting-btn">
        <img src="${setting}" alt="" class="mini-icon"><div>Setting</div>
    </button>
`);
    nav.appendChild(settingBtn);
}

export { getSettingBtn };
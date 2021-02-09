import { getBrandLogo } from './display/brand-logo'
import { getReportBtn } from './display/report-btn'
import { getSettingBtn } from './display/setting-btn'
import { getLoginBtn } from './display/login-btn'
import { getProfileBtn } from './display/profile-btn'

//render all buttons
function renderHeader() {
    getBrandLogo();
    getReportBtn();
    getSettingBtn();
    getLoginBtn();
    // getProfileBtn();
}

function toggleOnNavbar() {
    document.querySelector('.profile-area').remove();
    getProfileBtn();   
}

function toggleOffNavbar() {
    document.querySelector('.profile-area').remove();
    getLoginBtn();     
}

export { renderHeader , toggleOnNavbar , toggleOffNavbar };
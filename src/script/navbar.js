import { getBrandLogo } from './display/brand-logo'
import { getReportBtn } from './display/report-btn'
import { getSettingBtn } from './display/setting-btn'
import { getLoginBtn } from './display/login-btn'
import { getProfileBtn } from './display/profile-btn'
import { isLoggedIn } from './auth'

//render all buttons
function renderHeader() {
    console.log(isLoggedIn);
    getBrandLogo();
    getReportBtn();
    getSettingBtn();
    if (isLoggedIn == true) {
        getProfileBtn();
    } else {
        getLoginBtn();        
    }
    // getLoginBtn();
    // getProfileBtn();
}

function refreshHeader() {
    document.querySelector('header').remove();
    renderHeader();
}

export { renderHeader , refreshHeader };
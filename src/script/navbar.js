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
    // getLoginBtn();
    getProfileBtn();
}


export { renderHeader };
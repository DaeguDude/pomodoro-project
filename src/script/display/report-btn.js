import report from '../../img/graph-white.png';

const nav = document.querySelector('nav');

function getReportBtn() {
    const reportBtn = document.createRange().createContextualFragment(`
    <button class="nav-btn report-btn">
        <img src="${report}" alt=""><div>Report</div>
    </button>
`);
    nav.appendChild(reportBtn);
}

export { getReportBtn };
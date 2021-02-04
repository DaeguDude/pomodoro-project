const modalOpenButton = `<button type="button" id="modal__open-btn">
<img src="../img/config-white.png" alt="config icon" class="btn-img" />
&nbsp;Setting
</button>`;

const modalArticle = `
<div class="modal">
<div class="modal-content" id="modal-content">
  <div class="padding-area" id="padding-area">
    <img
      src="../img/remove-black-sm.png"
      alt="remove icon"
      class="setting__remove-btn btn-img close"
    />
  </div>
</div>`;

const footerArticle = `
<div class="footer">
  <footer>
    <button type="submit" class="footer__submit-btn">OK</button>
  </footer>
</div>`;

function createModalOpenButton() {
  const fragment = document
    .createRange()
    .createContextualFragment(modalOpenButton);
  document.getElementById("body").appendChild(fragment);
}

function createModalArticle() {
  const fragment = document
    .createRange()
    .createContextualFragment(modalArticle);
  document.getElementById("body").appendChild(fragment);
}

function addFooterArticle() {
  const fragment = document
    .createRange()
    .createContextualFragment(footerArticle);
  document.getElementById("modal-content").appendChild(fragment);
}

// const modal = document.querySelector(".modal");
// const modalOpenBtn = document.getElementById("modal__open-btn");
// const modalCloseBtn = document.getElementsByClassName("setting__remove-btn")[0];
// const submitButton = document.getElementsByClassName("footer__submit-btn")[0];

/* modal close 함수 */
function closeModal() {
  document.querySelector(".modal").style.display = "none";
}

/* modal open 함수 */
function openModal() {
  document.querySelector(".modal").style.display = "block";
}

/* modal 활성화 함수 */
function activateModal() {
  document
    .getElementById("modal__open-btn")
    .addEventListener("click", openModal);
  document
    .getElementsByClassName("setting__remove-btn")[0]
    .addEventListener("click", closeModal);
  document
    .getElementsByClassName("footer__submit-btn")[0]
    .addEventListener("click", closeModal);

  //modal 바깥쪽 영역 클릭시 modal close 구현
  window.addEventListener(
    "click",
    (event) => {
      if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
      }
    },
    false
  );
}

export {
  createModalOpenButton,
  createModalArticle,
  addFooterArticle,
  activateModal,
};

/* modal 활성화 함수 */
const modal = document.querySelector(".modal");
const modalOpenBtn = document.getElementById("modal__open-btn");
const modalCloseBtn = document.getElementsByClassName("setting__remove-btn")[0];
const submitButton = document.getElementsByClassName("footer__submit-btn")[0];

function activateModal() {
  modalOpenBtn.addEventListener("click", openModal, false);
  modalCloseBtn.addEventListener("click", closeModal, false);
  submitButton.addEventListener("click", closeModal, false);

  //modal 바깥쪽 영역 클릭시 modal close 구현
  window.addEventListener(
    "click",
    (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    },
    false
  );
}

/* modal close 함수 */
function closeModal() {
  modal.style.display = "none";
}

/* modal open 함수 */
function openModal() {
  modal.style.display = "block";
}

// modal 구현시 activateModal import 후 modal template 참고하여 사용
export { submitButton, activateModal };

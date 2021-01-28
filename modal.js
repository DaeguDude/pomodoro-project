const modal = document.querySelector(".modal");

const btn = document.getElementById("modal__open-btn");

const span = document.getElementsByClassName("setting__remove-btn")[0];

const submitButton = document.getElementsByClassName("footer__submit-btn")[0];

btn.addEventListener("click", openModal, false);

span.addEventListener("click", closeModal, false);

submitButton.addEventListener("click", closeModal, false);

/* setting 관련 */
submitButton.addEventListener("click", getSetting, false);
/* end */

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "block";
}

window.addEventListener(
  "click",
  (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  },
  false
);

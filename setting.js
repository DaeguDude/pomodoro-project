const modal = document.querySelector(".modal");

const btn = document.getElementById("modal__open-btn");

const span = document.getElementsByClassName("setting__remove-btn")[0];

const volume = document.querySelector(".volume__range");

const volumeDisplay = document.querySelector(".volume__display");

const submitButton = document.querySelector(".setting__submit-btn");

const mySetting = [];

class Setting {
  constructor(
    pomodoro,
    shortBreak,
    longBreak,
    didAutoStart,
    volume,
    longBreakInterval
  ) {
    this.pomodoro = pomodoro;
    this.shortBreak = shortBreak;
    this.longBreak = longBreak;
    this.didAutoStart = didAutoStart;
    this.volume = volume;
    this.longBreakInterval = longBreakInterval;
  }
}
btn.addEventListener("click", openModal, false);

span.addEventListener("click", closeModal, false);

window.addEventListener(
  "click",
  (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  },
  false
);

submitButton.addEventListener("click", getSetting, false);
submitButton.addEventListener("click", closeModal, false);

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "block";
}

// 밸류를 다 읽어와야함
function getSetting() {
  const pomodoro = document.querySelector(".time__pomodoro").value;
  const shortBreak = document.querySelector(".time__shortBreak").value;
  const longBreak = document.querySelector(".time__longBreak").value;
  const didAutoStart = document.querySelector("#autoStart__checkBox").checked;
  const volume = document.querySelector(".volume__range").value;
  const longBreakInterval = document.querySelector(".longBreakInterval__number")
    .value;

  return {
    pomodoro,
    shortBreak,
    longBreak,
    didAutoStart,
    volume,
    longBreakInterval,
  };
}

volume.oninput = function () {
  volumeDisplay.innerHTML = this.value;
};

volumeDisplay.innerHTML = volume.value;

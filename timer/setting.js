import { submitButton, activateModal } from "./modal";

function getSetting() {
  const pomodoro = document.querySelector(".time__pomodoro").value;
  const shortBreak = document.querySelector(".time__shortBreak").value;
  const longBreak = document.querySelector(".time__longBreak").value;
  const didAutoStart = document.querySelector("#autoStart__checkBox").checked;
  const volume = document.querySelector(".volume__range").value;
  const longBreakInterval = document.querySelector(".longBreakInterval__number")
    .value;

  // console.log({
  //   pomodoro,
  //   shortBreak,
  //   longBreak,
  //   didAutoStart,
  //   volume,
  //   longBreakInterval,
  // });

  return {
    pomodoro,
    shortBreak,
    longBreak,
    didAutoStart,
    volume,
    longBreakInterval,
  };
}

/* submit Btn 클릭 시 getSetting 함수 호출 */
function sendSettingValue() {
  submitButton.addEventListener("click", getSetting, false);
}

const volumeRange = document.getElementById("vr");
const volumeDisplay = document.getElementById("vd");

/* 반응형 volume input range 구현 */
function responsiveVolumeValue() {
  volumeRange.addEventListener("input", changeVolumeValue, false);
  volumeDisplay.innerText = volumeRange.value;

  function changeVolumeValue() {
    volumeDisplay.innerText = volumeRange.value;
  }
}

class Setting {
  constructor() {}

  start() {
    activateModal();
    sendSettingValue();
    responsiveVolumeValue();
  }
  get() {
    return getSetting();
  }
}

export default Setting;

// const mySetting = [];

// class Setting {
//   constructor(
//     pomodoro,
//     shortBreak,
//     longBreak,
//     didAutoStart,
//     volume,
//     longBreakInterval
//   ) {
//     this.pomodoro = pomodoro;
//     this.shortBreak = shortBreak;
//     this.longBreak = longBreak;
//     this.didAutoStart = didAutoStart;
//     this.volume = volume;
//     this.longBreakInterval = longBreakInterval;
//   }
// }

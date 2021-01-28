const volume = document.querySelector(".volume__range");

const volumeDisplay = document.querySelector(".volume__display");

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

const vr = document.getElementById("vr");

const vd = document.getElementById("vd");

vd.innerText = vr.value;

vr.addEventListener("input", changeVolumeValue, false);

function changeVolumeValue() {
  vd.innerText = vr.value;
}

import { createModalArticle, addFooterArticle, activateModal } from "./modal";

import "../styles/setting.css";

const settingArticle = `<div class="setting">
<header class="setting__header">
  <div>Timer Setting</div>
</header>
<article>
  <div class="setting__items">
    <div class="time__title">
      <span class="title_span">Time (minutes)</span>
    </div>
    <div class="time__items">
      <div class="time__item">
        <div class="time__pomodoro__label">
          <label class="time__label">Pomodoro</label>
        </div>
        <input
          type="number"
          min="0"
          step="1"
          class="time__input time__pomodoro"
          value="1"
        />
      </div>

      <div class="time__item">
        <div class="time__short__label">
          <label class="time__label">Short Break</label>
        </div>
        <input
          type="number"
          min="0"
          step="1"
          class="time__input time__shortBreak"
          value="5"
        />
      </div>

      <div class="time__item">
        <div class="time__long__label">
          <label class="time__label">Long Break</label>
        </div>
        <input
          type="number"
          min="0"
          step="1"
          class="time__input time__longBreak"
          value="15"
        />
      </div>
    </div>
  </div>

  <div class="setting__items">
    <div class="setting__content">
      <div class="autoStart__title">
        <span class="title_span">Auto start next round?</span>
      </div>
      <div>
        <input type="checkBox" id="autoStart__checkBox" name="" />
        <label for="autoStart__checkBox"></label>
      </div>
    </div>
  </div>

  <div class="setting__items">
    <div class="setting__content">
      <div class="volume__title">
        <span class="title_span">Sound Volume</span>
      </div>
      <div class="volume__content">
        <div class="volume__display"><span id="volume__display">50</span></div>
        <input
          type="range"
          min="0"
          max="100"
          class="volume__range"
          id="volume__range"
          value="50"
        />
      </div>
    </div>
  </div>

  <div class="setting__items">
    <div class="setting__content">
      <div class="longBreakInterval__title">
        <span class="title_span">Long Break Interval</span>
      </div>
      <div>
        <input
          type="number"
          min="1"
          step="1"
          width="70"
          class="longBreakInterval__number"
          value="4"
        />
      </div>
    </div>
  </div>
</article>
</div>
</div>
`;

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

/* submit Btn 클릭 시 getSetting 함수 호출 */
function sendSettingValue() {
  document
    .getElementsByClassName("footer__submit-btn")[0]
    .addEventListener("click", getSetting, false);
}

/* 반응형 volume input range 구현 */
function responsiveVolumeValue() {
  document
    .getElementById("volume__range")
    .addEventListener("input", changeVolumeValue, false);
  document.getElementById(
    "volume__display"
  ).innerText = document.getElementById("volume__range").value;

  function changeVolumeValue() {
    document.getElementById(
      "volume__display"
    ).innerText = document.getElementById("volume__range").value;
  }
}

function addSettingArticle() {
  const fragment = document
    .createRange()
    .createContextualFragment(settingArticle);
  document.getElementById("padding-area").appendChild(fragment);
}

class Setting {
  constructor() {
    this.settingValues = {};
  }

  start() {
    createModalArticle();
    addSettingArticle();
    addFooterArticle();
    activateModal();
    sendSettingValue();
    responsiveVolumeValue();
  }

  get() {
    this.settingValues = getSetting();
    console.log(this.settingValues);
  }
}

export default Setting;

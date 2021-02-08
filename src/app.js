import { mode } from './mode.js';
import { timer } from './timer.js';
import './css/timer.css';

// 설정 시작
import Setting from "./setting";
import "./css/modal.css";
import "./css/setting.css";

const pomodoroSetting = new Setting();
pomodoroSetting.start();
// 설정 끝

mode.setDefaultMode();

mode.waitForMode();
timer.waitForTimer();
timer.listenSettings();

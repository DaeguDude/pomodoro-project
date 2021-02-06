import { mode } from './mode.js';
import { timer } from './timer.js';
import './css/style.css';

/*설정*/
import Setting from "./setting";
import "./css/modal.css";
import "./css/setting.css";
/******/


mode.setDefaultMode();

mode.waitForMode();
timer.waitForTimer();
timer.listenSettings();

/*설정*/
const pomodoroSetting = new Setting();
pomodoroSetting.start();
// console.log(pomodoroSetting.get());
/*****/
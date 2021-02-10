import "./styles/reset.css";
import "./styles/style.css";
import "./styles/layout.css";
import "./styles/footer.css";

import { renderHeader, startApp } from "./share_navbar/navbar";
import Setting from "./setting/setting";
import TaskSection from "./taskSection/taskSection";

import { mode } from "./timer/timerSection";
import { timer } from "./timer/timerSection";

const myTaskSection = new TaskSection();
const mySetting = new Setting();
startApp();
renderHeader();
mySetting.start();
mode.setDefaultMode();
mode.waitForMode();
timer.waitForTimer();
timer.listenSettings();

const container = document.querySelector(".container");
container.appendChild(myTaskSection.render());
myTaskSection.start();

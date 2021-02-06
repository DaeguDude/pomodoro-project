import { renderHeader } from './share_navbar/navbar'
import Setting from './setting'
import TaskSection from './taskSection/taskSection';

import { mode } from './timer/timerSection';
import { timer } from './timer/timerSection';

const myTaskSection = new TaskSection();
const mySetting = new Setting();
renderHeader();
mySetting.start();

console.log(mode);
console.log(timer);

mode.setDefaultMode();
mode.waitForMode();
timer.waitForTimer();
timer.listenSettings();

const container = document.querySelector('.container');
console.log(container);
container.appendChild(myTaskSection.render())
myTaskSection.start()

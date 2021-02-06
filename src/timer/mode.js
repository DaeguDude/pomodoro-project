import { timer } from './timer.js';
import { display } from './display.js';

const Mode = () => {
    const setDefaultMode = () => {
        timer.setTime('pomodoroMode');
    }

    const waitForMode = () => {
        const btn = document.getElementById('mode').querySelectorAll('input[type=button]');
        btn.forEach((button) => {
            button.addEventListener('click', () => {
                display.updateMode(button);
                timer.setTime(button.name);

                timer.initPomodoroRunCnt();

                if(timer.isRunningTimer()) {
                    timer.stopTimer();
                    display.updateTimer(timer.btnTimerState());
                }

                if(button.name !== 'pomodoroMode')
                    timer.setSingleTimer(true);
            })
        })
    }

    return {
        setDefaultMode,
        waitForMode
    }
}

const mode = Mode();
export { mode }
import { display } from './display.js';
import endSound from './sounds/alertSound.mp3';
import Setting from "./setting";

const Timer = () => {
    let mode;
    let timerId;
    let runningTimer = false;
    let pomodoroRunCnt = 0;
    let taskCompleteCnt = 0;
    let singleTimer = false;

    //Preference Value
    let autoStartNextRound = false;
    let longBreakInterval = 0;
    let pomodoroMin = 0;
    let pomodoroSec = 0;
    let shortBreakMin = 0;
    let shortBreakSec = 0;
    let longBreakMin = 0;
    let longBreakSec = 0;
    let soundVolume = 0;


    const listenSettings = () => {
        const submitButton = document.getElementsByClassName("footer__submit-btn")[0];
        submitButton.addEventListener("click", importSettings, false);
    }

    const importSettings = () => {
        const setting = new Setting();
        const pomodoroSettings = setting.get();


        pomodoroMin = pomodoroSettings.pomodoro;
        pomodoroSec = 0;
        shortBreakMin = pomodoroSettings.shortBreak;
        shortBreakSec = 0;
        longBreakMin = pomodoroSettings.longBreak;
        longBreakSec = 0;

        autoStartNextRound = pomodoroSettings.didAutoStart;
        longBreakInterval = parseInt(pomodoroSettings.longBreakInterval);
        soundVolume = pomodoroSettings.volume;
        console.log(pomodoroSettings);
        applyTime();
    }

    const debugStatus = () => {
        console.log("autoStartNextRound: " + autoStartNextRound + ", longBreakInterval: " + longBreakInterval);
    }

    const isRunningTimer = () => {
        return runningTimer;
    }

    const setSingleTimer = (state) => {
        singleTimer = state;
    }

    const isSingleTimer = () => {
        return singleTimer;
    }

    const initPomodoroRunCnt = () => {
        pomodoroRunCnt = 0;
    }

    const setTime = (modeState) => {
        mode = modeState;

        if (mode === 'pomodoroMode') {
            setThemeForPomoroMode();
        } else if (mode === 'shortMode') {
            setThemeForShortMode();
        } else if (mode === 'longMode') {
            setThemeForLongMode();
        }

        importSettings();
        applyTime();
    }

    const setThemeForPomoroMode = () => {
        const red = "rgb(219, 82, 77)";
        document.querySelector('.container').style.backgroundColor = red;
        document.getElementById('time').querySelectorAll('input[type=button]')[0].style.color = red;
        document.getElementById('time').querySelectorAll('input[type=button]')[0].style.boxShadow = 'rgb(235 235 235) 0px 6px 0px';
    }

    const setThemeForShortMode = () => {
        const green = "rgb(70, 142, 145)";
        document.querySelector('.container').style.backgroundColor = green;
        document.getElementById('time').querySelectorAll('input[type=button]')[0].style.color = green;
    }

    const setThemeForLongMode = () => {
        const blue = "rgb(67, 126, 168)";
        document.querySelector('.container').style.backgroundColor = blue;
        document.getElementById('time').querySelectorAll('input[type=button]')[0].style.color = blue;
    }

    const numFormat = (num) => {
        if (num < 10)
            num = "0" + num;
        return num;
    }

    const applyTime = () => {
        //debugger;
        if(mode == 'pomodoroMode') {
            const timeString = numFormat(pomodoroMin) + ':' + numFormat(pomodoroSec);
            document.getElementById('time').querySelector('h1').innerText = timeString;
        }
        else if(mode == 'shortMode') {
            const timeString = numFormat(shortBreakMin) + ':' + numFormat(shortBreakSec);
            document.getElementById('time').querySelector('h1').innerText = timeString;
        }
        else if(mode == 'longMode') {
            const timeString = numFormat(longBreakMin) + ':' + numFormat(longBreakSec);
            document.getElementById('time').querySelector('h1').innerText = timeString;
        }
    }

    const waitForTimer = () => {
        const btn = document.getElementById('time').querySelectorAll('input[type=button]');
        btn.forEach((button) => {
            button.addEventListener('click', () => {
                debugStatus();
                display.updateTimer(button);
                Timer(button.value);
            })
        })
    }

    const Timer = (state) => {
        if (state === 'START')
            stopTimer();
        else if (state === 'STOP')
            timerId = setInterval(startTimer, 1000);
    }

    const nextTimer = () => {
        //debugger;
        if (singleTimer) {
            // Pomodoro Mode Start
            mode = 'pomodoroMode';
            setThemeForPomoroMode();
            applyTime();
            display.updateBtnToPomodoroMode(btnModeState());
            stopTimer();
            display.updateTimer(btnTimerState());
            singleTimer = false;
            return;
        }

        if (mode === 'pomodoroMode') {
            pomodoroRunCnt++;
            console.log("pomodoroRunCnt: " + pomodoroRunCnt + "longBreakInterval: " + longBreakInterval);
            if(pomodoroRunCnt === 4)
                debugger;
            if (pomodoroRunCnt === longBreakInterval) {
                debugger;
                // Increase Task Count
                taskCompleteCnt++;
                console.log("taskCompleteCnt: " + taskCompleteCnt);

                // Long Break Start
                mode = 'longMode';
                setThemeForLongMode();
                applyTime();
                display.updateBtnToLongMode(btnModeState());
            } else if (pomodoroRunCnt < longBreakInterval) {
                // Short Break Start
                mode = 'shortMode';
                setThemeForShortMode();
                applyTime();
                display.updateBtnToShortMode(btnModeState());
            }
        } else if (mode === 'shortMode') {
            // Pomodoro Start
            mode = 'pomodoroMode';
            setThemeForPomoroMode();
            applyTime();
            display.updateBtnToPomodoroMode(btnModeState());
        } else if (mode === 'longMode') {
            // Pomodoro Start
            mode = 'pomodoroMode';
            setThemeForPomoroMode();
            applyTime();
            display.updateBtnToPomodoroMode(btnModeState());

            //Initialize pomodoroRunCnt
            pomodoroRunCnt = 0;
        } 
        if(!autoStartNextRound) {
            stopTimer();
            display.updateTimer(btnTimerState());
        }
    }

    const btnModeState = () => {
        const buttonList = document.getElementById('mode').querySelectorAll('input[type=button]');
            for (let i = 0; i < buttonList.length; i++) {
                let hasClassClickedMenu = buttonList[i].classList.contains('clickedBtn');
                if (hasClassClickedMenu)
                    return buttonList[i];
            }
    }

    const btnTimerState = () => {
        return document.getElementById('time').querySelector('input[type=button]');
    }

    const startTimer = () => {
        runningTimer = true;
        let min = 0;
        let sec = 0;
        let timerEnd = false;
        
        if(mode == 'pomodoroMode') {
            min = pomodoroMin;
            sec = pomodoroSec;
        }
        else if(mode == 'shortMode') {
            min = shortBreakMin;
            sec = shortBreakSec;
        }
        else if(mode == 'longMode') {
            min = longBreakMin;
            sec = longBreakSec;
        }

        sec--;
        if (sec === -1) {
            min--;
            sec = 59;
        }
        if (min === 0 && sec === 0) {
            playEndSound();
            nextTimer();
            timerEnd = true;
            importSettings();
        }
        if (min === -1) {
            min = 0;
            sec = 0;
            stopTimer();
        }
        // applyTime();
        if(!timerEnd) {
            if(mode == 'pomodoroMode') {
                pomodoroMin = min;
                pomodoroSec = sec;
            }
            else if(mode == 'shortMode') {
                shortBreakMin = min;
                shortBreakSec = sec;
            }
            else if(mode == 'longMode') {
                longBreakMin = min;
                longBreakSec = sec;
            }

            const timeString = numFormat(min) + ':' + numFormat(sec);
            document.getElementById('time').querySelector('h1').innerText = timeString;
        }
    }

    const stopTimer = () => {
        runningTimer = false;
        clearInterval(timerId);
    }

    const playEndSound = () => {
        const sound = new Audio(endSound);
        sound.volume = soundVolume * 0.01;
        sound.play();
    }

    return {
        listenSettings,
        setSingleTimer,
        isSingleTimer,
        initPomodoroRunCnt,
        isRunningTimer,
        btnTimerState,
        setTime,
        stopTimer,
        waitForTimer
    }
}

const timer = Timer();

export { timer }
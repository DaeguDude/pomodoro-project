// Get the modal
const modal = document.getElementById('settingModal');

// Get the button that opens the modal
const btn = document.getElementById("modalOpenBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("remove_Btn")[0];                                          

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const mySetting = [];

class Setting {
    constructor(pomodoro, shortBreak, longBreak, didAutoStart, volume, longBreakInterval) {
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
    const pomodoro = document.querySelector(".pomodoroMinuteInput").value;
    const shortBreak = document.querySelector(".shortBreakInput").value;
    const longBreak = document.querySelector(".longBreakInput").value;
    const didAutoStart = document.querySelector("#autoStartInput").checked;
    const volume = document.querySelector("#volumeRangeInputId").value;
    const longBreakInterval = document.querySelector(".lbiInput").value;

    return { pomodoro, shortBreak, longBreak, didAutoStart, volume, longBreakInterval };
}
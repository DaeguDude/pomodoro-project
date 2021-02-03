import TaskManager from "./taskManager";
import taskViewController from "./taskViewController";

const createTaskHtmlContent = `
    <article class="task-detail create-task">
    <main>
      <div class="task-detail__title">
        <input
          name="task-detail__title"
          type="text"
          placeholder="What are you working on?"
        />
      </div>
      <div class="task-detail__pomodoro">
        <span class="label">Est Pomodoros</span>
        <div class="task-detail__pomodoro-content">
          <input name="number-pomodoros" type="number" value="1" />
          <button class="pomodoro-updown-btn pomodoro-up" data-action="increment">
            <i class="fas fa-caret-up"></i>
          </button>
          <button class="pomodoro-updown-btn pomodoro-down" data-action="decrement">
            <i class="fas fa-caret-down"></i>
          </button>
        </div>
      </div>
      <div class="task-detail__note">
        <button class="add-note-btn" data-action="addNote">+ Add Note</button>
      </div>
    </main>
    <footer>
      <div>
        <button class="task-detail__cancel-btn" data-action="cancel">Cancel</button>
        <button class="task-detail__save-btn task-detail__save-btn--disabled" data-action="save">Save</button>
      </div>
    </footer>
    </article>
  `;

export default class CreateTask {
  constructor() {
    this.elem = null;
  }

  render() {
    const result = document
      .createRange()
      .createContextualFragment(createTaskHtmlContent);

    result
      .querySelector(".create-task")
      .addEventListener("click", this.onClickHandler.bind(this));

    result
      .querySelector(".task-detail__title")
      .addEventListener("input", this.onInputHandler.bind(this));

    this.elem = result.querySelector(".create-task");
    return result;
  }

  hide() {
    this.elem.remove();
  }

  save() {
    this.getTaskInfo();
    this.hide();
  }

  increment() {
    this.elem.querySelector('input[name="number-pomodoros"]').value++;
  }

  decrement() {
    this.elem.querySelector('input[name="number-pomodoros"]').value--;
  }

  addNote() {
    this.removeAddNoteBtn();
    this.showTextArea(createTextArea());
  }

  removeAddNoteBtn() {
    this.elem.querySelector(".add-note-btn").remove();
  }

  showTextArea(noteTextArea) {
    this.elem.querySelector(".task-detail__note").appendChild(noteTextArea);
  }

  cancel() {
    this.hide();
    taskViewController.addAddTaskBtn();
  }

  onClickHandler(event) {
    let action;
    if (event.target.tagName === "I") {
      const pomodoroUpdownBtn = event.target.closest(".pomodoro-updown-btn");
      action = pomodoroUpdownBtn.dataset.action;
    } else {
      action = event.target.dataset.action;
    }

    if (action) {
      this[action]();
    }
  }

  onInputHandler(event) {
    if (event.target.value) {
      return this.elem
        .querySelector(".task-detail__save-btn")
        .classList.remove("task-detail__save-btn--disabled");
    }

    if (!event.target.value) {
      return this.elem
        .querySelector(".task-detail__save-btn")
        .classList.add("task-detail__save-btn--disabled");
    }
  }

  getTaskInfo() {
    const title = this.elem.querySelector('input[name="task-detail__title"]')
      .value;
    const estimatedPomodoros = this.elem.querySelector(
      'input[name="number-pomodoros"]'
    ).value;
    let note = "";

    if (this.elem.querySelector('textarea[name="note"]')) {
      note = this.elem.querySelector('textarea[name="note"]').value;
    }

    TaskManager.addTask({ title, estimatedPomodoros, note });
  }
}

function createTextArea() {
  return document
    .createRange()
    .createContextualFragment(
      `<textarea name="note" placeholder="Some notes..."></textarea>`
    );
}

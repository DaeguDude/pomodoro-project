import TaskManager from "./taskManager";
import TaskViewController from './taskViewController'

export default class EditTask {
  constructor(task) {
    this.elem = null;
    this.task = task;
    this.htmlContent = `
    <article class="task-detail edit-task">
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
          <input name="number-pomodoros" type="number" value="0" />
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
      <button class="task-detail__delete-btn" data-action="delete">Delete</button>
      <div>
        <button class="task-detail__cancel-btn" data-action="cancel">Cancel</button>
        <button class="task-detail__save-btn" data-action="save">Save</button>
      </div>
    </footer>
    </article>
  `;
  }

  render() {
    const result = document
      .createRange()
      .createContextualFragment(this.htmlContent);

    result
      .querySelector(".edit-task")
      .addEventListener("click", this.onClickHandler.bind(this));

    result
      .querySelector(".task-detail__title")
      .addEventListener("input", this.onInputHandler.bind(this));

    this.insertTaskInfo(result);

    this.elem = result.querySelector(".edit-task");
    return result;
  }

  insertTaskInfo(result) {
    const titleInputElem = result.querySelector(
      'input[name="task-detail__title"]'
    );
    const pomodoroInputElem = result.querySelector(
      'input[name="number-pomodoros"]'
    );
    titleInputElem.value = this.task.title;
    pomodoroInputElem.value = this.task.estimatedPomodoros;

    if (this.task.note != "") {
      const addNoteBtn = result.querySelector(".add-note-btn");
      const textArea = createTextArea(this.task.note);

      addNoteBtn.replaceWith(textArea);
    }
  }

  hide() {
    this.elem.remove();
  }

  save() {
    const modifiedTask = TaskManager.modifyTask(this.task, this.getTaskInfo());
    TaskViewController.replace(this.elem, modifiedTask.render())
  }

  increment() {
    this.elem.querySelector('input[name="number-pomodoros"]').value++;
  }

  decrement() {
    this.elem.querySelector('input[name="number-pomodoros"]').value--;
  }

  delete() {
    // remove from display
    this.task.elem.remove();
    // remove from task Manager
    TaskManager.removeTaskById(this.task.id);
    // close modal
    this.hide();
  }

  addNote() {
    this.removeAddNoteBtn();
    this.showTextArea(createTextArea());

    function createTextArea() {
      return document
        .createRange()
        .createContextualFragment(
          `<textarea name="note" placeholder="Some notes..."></textarea>`
        );
    }
  }

  removeAddNoteBtn() {
    this.elem.querySelector(".add-note-btn").remove();
  }

  showTextArea(noteTextArea) {
    this.elem.querySelector(".task-detail__note").appendChild(noteTextArea);
  }

  cancel() {
    const editTask = this.elem;

    // replace editTask display with task display
    editTask.replaceWith(this.task.elem);
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
      return document
        .querySelector(".task-detail__save-btn")
        .classList.remove("task-detail__save-btn--disabled");
    }

    if (!event.target.value) {
      return document
        .querySelector(".task-detail__save-btn")
        .classList.add("task-detail__save-btn--disabled");
    }
  }

  getTaskInfo() {
    const title = document.querySelector('input[name="task-detail__title"]')
      .value;
    const estimatedPomodoros = Number(
      document.querySelector('input[name="number-pomodoros"]').value
    );
    let note = "";
    if (document.querySelector('textarea[name="note"]')) {
      note = document.querySelector('textarea[name="note"]').value;
    }

    return { title, estimatedPomodoros, note };
  }
}

function createTextArea(note) {
  return document
    .createRange()
    .createContextualFragment(
      `<textarea name="note" placeholder="Some notes...">${note}</textarea>`
    );
}

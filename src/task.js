export default class Task {
  constructor(TaskInfo) {
    const { id, title, note, estimatedPomodoros } = TaskInfo;
    this.elem = null;
    this.id = id;
    this.title = title;
    this.note = note;
    this.estimatedPomodoros = estimatedPomodoros;
    this.completedPomodoros = 0;
    this.isCompleted = false;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
    this.toggleCompletedDisplay();
  }

  toggleCompletedDisplay() {
    const title = this.elem.querySelector(".task__title");
    const checkMarker = this.elem.querySelector(".task__check-marker");
    title.classList.toggle("task__title--completed");
    checkMarker.classList.toggle("task__check-marker--completed");
  }

  openEditTask() {
    console.log("open edit task");
  }

  onClickHandler(event) {
    let action;
    if (event.target.classList.contains("fa-ellipsis-v")) {
      const editBtn = event.target.closest(".edit-btn");
      action = editBtn.dataset.action;
    } else {
      action = event.target.dataset.action;
    }

    if (action) {
      this[action]();
    }
  }

  render() {
    const NO_TAB_FOCUS = -1;
    const taskHtmlContent = `
        <li class="task" tabindex="${NO_TAB_FOCUS}">
        <i class="task__check-marker fas fa-check-circle" data-action="toggleCompleted"></i>
        <span class="task__title">
          ${this.title}
        </span>
        <div class="task__pomodoros">
          <span class="task__completed-pomodoros">${this.completedPomodoros}</span> /
          <span class="task__estimated-pomodoros">${this.estimatedPomodoros}</span>
        </div>
        <button class="edit-btn" data-action="openEditTask">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </li>
    `;

    const result = document
      .createRange()
      .createContextualFragment(taskHtmlContent);

    result
      .querySelector(".task")
      .addEventListener("click", this.onClickHandler.bind(this));

    this.elem = result.querySelector(".task");
    return result;
  }

  hide() {
    this.elem.remove();
  }
}

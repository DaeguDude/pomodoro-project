export default class Task {
  // constructor(TaskInfo) {
  //   const { id, title, note, estPomodoros } = TaskInfo;
  //   this.id = id;
  //   this.title = title;
  //   this.note = note;
  //   this.estPomodoros = estPomodoros;
  //   this.completedPomodoros = 0;
  //   this.isCompleted = false;
  // }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  setNote(note) {
    this.note = note;
  }

  setTitle(title) {
    this.title = title;
  }

  setEstPomodoros(numPomodoros) {
    this.estPomodoros = numPomodoros;
  }

  incrementCompletedPomodoros() {
    this.completedPomodoros++;
  }

  render(title, completedPomodoros, estimatedPomodoros) {
    return document.createRange().createContextualFragment
      (`
        <li class="task">
        <i class="task__check-marker fas fa-check-circle"></i>
        <span class="task__title">
          ${title}
        </span>
        <div class="task__pomodoros">
          <span class="task__completed-pomodoros">${completedPomodoros}</span> /
          <span class="task__estimated-pomodoros">${estimatedPomodoros}</span>
        </div>
        <button class="edit-btn">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </li>
    `);
  }
}

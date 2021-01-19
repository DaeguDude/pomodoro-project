export default class Task {
  constructor(TaskInfo) {
    const { id, title, note, estPomodoros } = TaskInfo;
    this.id = id;
    this.title = title;
    this.note = note;
    this.estPomodoros = estPomodoros;
    this.completedPomodoros = 0;
    this.isCompleted = false;
  }

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
}

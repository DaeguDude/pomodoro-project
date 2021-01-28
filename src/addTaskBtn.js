export default class AddTaskBtn {
  constructor() {}

  render() {
    return document.createRange().createContextualFragment(
      `
      <button class="add-task-btn">
        <i class="fas fa-plus-circle"></i> Add Task
      </button>
      `
    );
  }

  hide() {
    document.querySelector(".add-task-btn").remove();
  }
}

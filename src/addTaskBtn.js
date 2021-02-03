import CreateTask from "./createTask";

export default class AddTaskBtn {
  constructor() {
    this.elem = null;
  }

  render() {
    console.log("dffdsff");
    const htmlContent = `
      <button class="add-task-btn">
        <i class="fas fa-plus-circle"></i> Add Task
      </button>
    `;
    const result = document.createRange().createContextualFragment(htmlContent);
    result
      .querySelector(".add-task-btn")
      .addEventListener("click", this.onClickHandler.bind(this));

    this.elem = result.querySelector(".add-task-btn");
    return result;
  }

  hide() {
    this.elem.remove();
  }

  onClickHandler() {
    this.hide();
    const taskSection = document.querySelector("#task-section");
    taskSection.appendChild(CreateTask.prototype.render());
  }
}

import AddTaskBtn from "./addTaskBtn";

class TaskViewController {
  constructor() {}

  addTask(task) {
    document.querySelector(".task-list").appendChild(task.render());
  }

  addAddTaskBtn() {
    const taskSection = document.querySelector("#task-section");
    const addTaskBtn = new AddTaskBtn();
    taskSection.appendChild(addTaskBtn.render());
  }
}

const taskViewController = new TaskViewController();
export default taskViewController;

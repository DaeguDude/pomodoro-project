import AddTaskBtn from "./addTaskBtn";
import EditTask from "./editTask";

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

  showEditTask() {
    const editTask = new EditTask();
    editTask.render();
  }
}

const taskViewController = new TaskViewController();
export default taskViewController;

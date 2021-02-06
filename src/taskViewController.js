import AddTaskBtn from "./addTaskBtn";

class TaskViewController {
  constructor() {}

  showTask(task) {
    document.querySelector(".task-list").appendChild(task.render());
  }

  showAddTaskBtn() {
    const taskSection = document.querySelector("#task-section");
    const addTaskBtn = new AddTaskBtn();
    taskSection.appendChild(addTaskBtn.render());
  }
  
  replace(oldElem, newElem) {
    oldElem.replaceWith(newElem);
  }
}

const taskViewController = new TaskViewController();
export default taskViewController;

import Task from "./task";
import TaskViewController from "./taskViewController";

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(taskInfo) {
    taskInfo.id = this.getNewTaskId();
    const newTask = new Task(taskInfo);
    this.tasks.push(newTask);

    console.log("current Task: ");
    console.log(this.tasks);

    TaskViewController.addTask(newTask);
    TaskViewController.addAddTaskBtn();
  }

  getNewTaskId() {
    return this.tasks.length + 1;
  }

  removeTaskById(id) {
    this.tasks.splice(id - 1, 1);
    this.updateAllTasksId();
  }

  removeCompletedTasks() {
    this.tasks = this.tasks.filter((task) => task.isCompleted);
  }

  updateAllTasksId() {
    this.tasks.forEach((task, index) => (task.id = index + 1));
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  getAllTasks() {
    return this.tasks;
  }

  renderAllTasks() {
    return this.tasks.map((task) => task.render());
  }

  modifyTask(editTask) {
    const taskInfo = editTask.getTaskInfo();
    const task = editTask.task;
    // Update all Info
    task.title = taskInfo.title;
    task.estimatedPomodoros = taskInfo.estimatedPomodoros;
    task.note = taskInfo.note;

    // By rendering giving it new task elem
    editTask.elem.replaceWith(task.render());
  }
}

const taskManager = new TaskManager();
export default taskManager;

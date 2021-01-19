import Task from "./task";

export default class TaskManager {
  constructor() {
    this.taskList = [];
  }

  addTask(taskInfo) {
    const newTask = new Task(taskInfo);
    this.taskList.push(newTask);
  }

  removeTaskById(id) {
    this.taskList.splice(id - 1, 1);
    this.updateAllTasksId();
  }

  updateAllTasksId() {
    this.taskList.forEach((task, index) => (task.id = index + 1));
  }

  getTaskById(id) {
    return this.taskList.find((task) => task.id === id);
  }

  getAllTasks() {
    return this.taskList;
  }
}

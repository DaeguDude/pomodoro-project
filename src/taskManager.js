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
    // Go through taskList and find the task object that has that id and remove that object
  }

  searchTaskById(id) {
    // // Go through taskList and find the task object that has that id
  }

  getAllTasks() {
    return this.taskList;
  }
}

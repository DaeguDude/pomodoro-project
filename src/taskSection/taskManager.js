import Task from "./task";

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  createTask(taskInfo) {
    taskInfo.id = this.getNewTaskId();
    return new Task(taskInfo);
  }

  addTask(task) {
    this.tasks.push(task);
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

  modifyTask(task, taskInfo) {
    task.title = taskInfo.title;
    task.estimatedPomodoros = taskInfo.estimatedPomodoros;
    task.note = taskInfo.note;

    return task;
  }
}

const taskManager = new TaskManager();
export default taskManager;

// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import Task from "./task";
import TaskManager from "./taskManager";

const myTaskManager = new TaskManager();
const task1 = { id: 1, title: "Task1", estPomodoros: 3 };
const task2 = { id: 2, title: "Task2", estPomodoros: 10 };
const task3 = { id: 3, title: "Task3", estPomodoros: 4 };
const task4 = { id: 4, title: "Task4", estPomodoros: 5 };
const task5 = { id: 5, title: "Task5", estPomodoros: 6 };
myTaskManager.addTask(task1);
myTaskManager.addTask(task2);
myTaskManager.addTask(task3);
myTaskManager.addTask(task4);
myTaskManager.addTask(task5);

myTaskManager.removeTaskById(1);
myTaskManager.removeTaskById(1);
myTaskManager.removeTaskById(1);
myTaskManager.removeTaskById(1);
myTaskManager.removeTaskById(1);
console.log(myTaskManager.getAllTasks());

// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";
import TaskManager from "./taskManager";
import AddTaskBtn from "./addTaskBtn";

const myTaskManager = new TaskManager();

const taskList = document.querySelector(".task-list");

myTaskManager.addTask({ title: "a" });
myTaskManager.addTask({ title: "b" });
myTaskManager.addTask({ title: "c" });
myTaskManager.addTask({ title: "d" });
myTaskManager.addTask({ title: "e" });
myTaskManager.addTask({ title: "f" });

const task1 = myTaskManager.getTaskById(1);
const task3 = myTaskManager.getTaskById(3);
const task5 = myTaskManager.getTaskById(5);

myTaskManager.renderAllTasks().forEach((task) => taskList.appendChild(task));

task1.toggleCompleted();
task3.toggleCompleted();
task5.toggleCompleted();

myTaskManager.removeCompletedTasks();
console.log(myTaskManager);

const taskSection = document.querySelector("#task-section");
taskSection.appendChild(AddTaskBtn.prototype.render());

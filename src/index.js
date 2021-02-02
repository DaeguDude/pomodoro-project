// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";
import TaskManager from "./taskManager";

const myTaskManager = new TaskManager();

const taskList = document.querySelector(".task-list");

myTaskManager.addTask({ title: "a" });
myTaskManager.addTask({ title: "b" });
myTaskManager.addTask({ title: "c" });
myTaskManager.addTask({ title: "d" });
myTaskManager.addTask({ title: "e" });
myTaskManager.addTask({ title: "f" });

const allTasks = myTaskManager
  .renderAllTasks()
  .forEach((task) => taskList.appendChild(task));

// This works
// taskList.appendChild(allTasks[0]);
// taskList.appendChild(allTasks[1]);
// taskList.appendChild(allTasks[2]);

// allTasks.forEach((task) => taskList.appendChild(task));

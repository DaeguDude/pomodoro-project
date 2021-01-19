// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import Task from "./task";
import TaskManager from "./taskManager";

const myTaskManager = new TaskManager();
const taskInfo = { id: 1, title: "shut up dude", estPomodoros: 5 };
myTaskManager.addTask(taskInfo);
console.log(myTaskManager.getAllTasks());

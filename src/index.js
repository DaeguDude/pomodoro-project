// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";
import Task from "./task";
import { CreateTask, EditTask } from "./taskDetail";
import AddTaskBtn from "./addTaskBtn";

const myTask = new Task();
const myAddTaskBtn = new AddTaskBtn();
const myCreateTask = new CreateTask();
const myEditTask = new EditTask();

const taskSection = document.querySelector("#task-section");
const taskList = document.querySelector(".task-list");
taskList.appendChild(myTask.render("아 잠온다", 0, 10));
taskList.appendChild(myTask.render("아 잠온다", 0, 10));
taskList.appendChild(myTask.render("아 잠온다", 0, 10));
taskList.appendChild(myTask.render("아 잠온다", 0, 10));
taskList.appendChild(myTask.render("아 잠온다", 0, 10));
taskList.appendChild(myTask.render("아 잠온다", 0, 10));
taskList.appendChild(myTask.render("아 잠온다", 0, 10));
taskList.appendChild(myTask.render("아 잠온다", 0, 10));

const addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  taskSection.appendChild(myEditTask.render());
});

// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";
import { CreateTask, EditTask } from './taskDetail';
import AddTaskBtn from "./addTaskBtn";


const myAddTaskBtn = new AddTaskBtn();
const myCreateTask = new CreateTask();
const myEditTask = new EditTask();

const taskSection = document.querySelector('#task-section');

const addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  console.log('clicked')
  taskSection.appendChild(myCreateTask.render())
  taskSection.appendChild(myEditTask.render())

});


// const taskDetail = document.querySelector(".task-detail");
// taskDetail.remove();

// taskSection.addEventListener("click", (e) => {
//   if (e.target.className.includes("task__check-marker")) {
//     console.log("check marker");
//   }

//   if (
//     e.target.className.includes("edit-btn") ||
//     e.target.className.includes("fa-ellipsis-v")
//   ) {
//     console.log("edit-btn clicked");
//   }

//   if (e.target.className.includes("add-task-btn")) {
//     console.log("add task btn clicked");
//   }
//   console.log(e.target);
// });

// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";
import AddTaskBtn from "./addTaskBtn.js";
import printMe from "./print";

// const taskList = document.querySelector(".task-list");
const taskSection = document.querySelector("#task-section");

taskSection.appendChild(AddTaskBtn.prototype.render());

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}

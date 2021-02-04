// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";
import AddTaskBtn from "./addTaskBtn.js";

class TaskSection {
  constructor() {}

  start() {
    console.log(
      "Start listening for events. If there is any tasks, display them"
    );
  }

  render() {
    return document.createRange().createContextualFragment(`
      <section id="task-section">
      <header>
        <h3>Tasks</h3>
        <button class="edit-btn">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </header>

      <ul class="task-list"></ul>
      <button class="add-task-btn">
        <i class="fas fa-plus-circle"></i> Add Task
      </button>
    </section>
    `);
  }
}

const container = document.querySelector(".container");
const myTaskSection = new TaskSection();

container.appendChild(myTaskSection.render());

// // const taskList = document.querySelector(".task-list");
// const taskSection = document.querySelector("#task-section");

// taskSection.appendChild(AddTaskBtn.prototype.render());

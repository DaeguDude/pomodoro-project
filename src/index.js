// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";
import CreateTask from "./createTask";

class TaskSection {
  constructor() {}

  start() {
    this.startAddTaskBtn();
  }

  render() {
    const result = document.createRange().createContextualFragment(`
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

    return result;
  }

  startAddTaskBtn() {
    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", () => {
      addTaskBtn.replaceWith(CreateTask.prototype.render());
    });
  }

  onClickHandler() {}
}

const container = document.querySelector(".container");
const myTaskSection = new TaskSection();

container.appendChild(myTaskSection.render());
myTaskSection.start();

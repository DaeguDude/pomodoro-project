// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";
import CreateTask from "./createTask";

class TaskSection {
  constructor() {
    this.addTaskBtn = null;
    this.createTask = new CreateTask();
  }

  start() {
    document
      .querySelector("#task-section")
      .addEventListener("click", this.onClickHandler.bind(this));
  }

  render() {
    const result = document.createRange().createContextualFragment(`
      <section id="task-section">
      <header>
        <h3>Tasks</h3>
        <div>
          <button class="edit-btn feature-btn">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </header>

      <ul class="task-list"></ul>
      <button class="add-task-btn">
        <i class="fas fa-plus-circle"></i> Add Task
      </button>
    </section>
    `);

    // 태스크 리스트들이 있다면 `task-list`에 append해주고 rendering을 해주어야함

    return result;
  }

  onClickHandler(event) {
    if (
      event.target.className === "add-task-btn" ||
      event.target.className === "fas fa-plus-circle"
    ) {
      this.showCreateTask();
    }
  }

  showCreateTask() {
    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.replaceWith(this.createTask.render());
  }
}

const container = document.querySelector(".container");
const myTaskSection = new TaskSection();

container.appendChild(myTaskSection.render());
myTaskSection.start();

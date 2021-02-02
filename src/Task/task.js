class Task {
  constructor(TaskInfo) {
    const { id, title, note, estimatedPomodoros } = TaskInfo;
    this.elem = null;
    this.id = id;
    this.title = title;
    this.note = note;
    this.estimatedPomodoros = estimatedPomodoros;
    this.completedPomodoros = 0;
    this.isCompleted = false;
  }

  toggleCompleted() {
    console.log('toggle Complete')
    console.log(`before: ${this.isCompleted}`)
    this.isCompleted = !this.isCompleted;
    console.log(`after: ${this.isCompleted}`)
    
    function toggleCompletedDisplay() {
  
    }
  }


  openEditTask() {
    console.log("open edit task")
  }

  onClickHandler(event) {
    let action;
    if (event.target.classList.contains('fa-ellipsis-v')) {
      const editBtn = event.target.closest(".edit-btn");
      action = editBtn.dataset.action;
    } else {
      action = event.target.dataset.action;
    }

    if (action) {
      this[action]();
    }
  }

  render() {
    const taskHtmlContent = 
      (`
        <li class="task">
        <i class="task__check-marker fas fa-check-circle" data-action="toggleCompleted"></i>
        <span class="task__title">
          ${this.title}
        </span>
        <div class="task__pomodoros">
          <span class="task__completed-pomodoros">${this.completedPomodoros}</span> /
          <span class="task__estimated-pomodoros">${this.estimatedPomodoros}</span>
        </div>
        <button class="edit-btn" data-action="openEditTask">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </li>
    `);

    const result = document.createRange().createContextualFragment(taskHtmlContent);
    this.elem = result.querySelector('.task');
    result.querySelector(".task").addEventListener("click", this.onClickHandler.bind(this));

    return result;
  }

  hide() {
    this.elem.remove();
  }
}
const myTask = new Task({title: 'Shut up', estimatedPomodoros: 4});
const container = document.querySelector('.container');

console.log(myTask);
container.appendChild(myTask.render());
console.log(myTask);


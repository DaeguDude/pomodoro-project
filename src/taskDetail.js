const editTask = document.createRange().createContextualFragment(`
  <article class="task-detail edit-task">
  <main>
    <div class="task-detail__title">
      <input
        name="task-detail__title"
        type="text"
        placeholder="What are you working on?"
      />
    </div>
    <div class="task-detail__pomodoro">
      <span class="label">Est Pomodoros</span>
      <div class="task-detail__pomodoro-content">
        <input name="number-pomodoros" type="number" value="1" />
        <button class="pomodoro-updown-btn pomodoro-up" >
          <i class="fas fa-caret-up"></i>
        </button>
        <button class="pomodoro-updown-btn pomodoro-down" >
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="task-detail__note">
      <button class="add-note-btn">+ Add Note</button>
    </div>
  </main>
  <footer>
    <button class="task-detail__delete-btn">Delete</button>
    <div>
      <button class="task-detail__cancel-btn">Cancel</button>
      <button class="task-detail__save-btn">Save</button>
    </div>
  </footer>
  </article>
`)

const createTask = document.createRange().createContextualFragment(`
  <article class="task-detail create-task">
  <main>
    <div class="task-detail__title">
      <input
        name="task-detail__title"
        type="text"
        placeholder="What are you working on?"
      />
    </div>
    <div class="task-detail__pomodoro">
      <span class="label">Est Pomodoros</span>
      <div class="task-detail__pomodoro-content">
        <input name="number-pomodoros" type="number" value="1" />
        <button class="pomodoro-updown-btn pomodoro-up" >
          <i class="fas fa-caret-up"></i>
        </button>
        <button class="pomodoro-updown-btn pomodoro-down" >
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="task-detail__note">
      <button class="add-note-btn">+ Add Note</button>
    </div>
  </main>
  <footer>
    <div>
      <button class="task-detail__cancel-btn">Cancel</button>
      <button class="task-detail__save-btn">Save</button>
    </div>
  </footer>
  </article>
`)



class CreateTask {
  constructor() {}

  render() {   
    return createTask;
  }
  

  hide() {
    document.querySelector(".create-task").remove();
  }
}

class EditTask {
  constructor() {}

  render() {
    return editTask;
  }
  

  hide() {
    document.querySelector(".edit-task").remove();
  }
}

export { CreateTask, EditTask }

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  save() {
    alert('saving');
  }

  load() {
    alert('loading');
  }

  search() {
    alert('searching');
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}


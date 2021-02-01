// const editTask = `
//   <article class="task-detail edit-task">
//   <main>
//     <div class="task-detail__title">
//       <input
//         name="task-detail__title"
//         type="text"
//         placeholder="What are you working on?"
//       />
//     </div>
//     <div class="task-detail__pomodoro">
//       <span class="label">Est Pomodoros</span>
//       <div class="task-detail__pomodoro-content">
//         <input name="number-pomodoros" type="number" value="1" />
//         <button class="pomodoro-updown-btn pomodoro-up" >
//           <i class="fas fa-caret-up"></i>
//         </button>
//         <button class="pomodoro-updown-btn pomodoro-down" >
//           <i class="fas fa-caret-down"></i>
//         </button>
//       </div>
//     </div>
//     <div class="task-detail__note">
//       <button class="add-note-btn">+ Add Note</button>
//     </div>
//   </main>
//   <footer>
//     <button class="task-detail__delete-btn">Delete</button>
//     <div>
//       <button class="task-detail__cancel-btn">Cancel</button>
//       <button class="task-detail__save-btn">Save</button>
//     </div>
//   </footer>
//   </article>`;

const editTask = `
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
        <button class="pomodoro-updown-btn pomodoro-up" data-action="increment" >
          <i class="fas fa-caret-up"></i>
        </button>
        <button class="pomodoro-updown-btn pomodoro-down" data-action="decrement" >
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="task-detail__note">
      <button class="add-note-btn" data-action="note">+ Add Note</button>
    </div>
  </main>
  <footer>
    <button class="task-detail__delete-btn" data-action="delete">Delete</button>
    <div>
      <button class="task-detail__cancel-btn" data-action="cancel">Cancel</button>
      <button class="task-detail__save-btn" data-action="save">Save</button>
    </div>
  </footer>
  </article>`;

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
`);

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
    const result = document
      .createRange()
      .createContextualFragment(`${editTask}`);
    result
      .querySelector(".edit-task")
      .addEventListener("click", this.onClickHandler.bind(this));

    return result;
  }

  save() {
    // 만약에 아무것도 없다면, 버튼을 클릭 못하게 한다.
    // Save를 누를 시 모든 값을 불러오고 저장을 함
    // 창을 닫는다
    console.log("save");
  }

  increment() {
    // number input을 하나 증가시킨다
    console.log("incremenet");
  }

  decrement() {
    // number input을 하나 감소시킨다
    console.log("decrement");
  }

  note() {
    // add note 버튼을 없앤다
    // text area를 띄운다
    console.log("note");
  }

  cancel() {
    // 창을 닫는다
    console.log("cancel");
  }

  delete() {
    // 창을 닫는다
    // Task Item을 지운다
    console.log("delete");
  }

  onClickHandler(event) {
    const action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }

  hide() {
    document.querySelector(".edit-task").remove();
  }
}

export { CreateTask, EditTask };

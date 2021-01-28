export default class TaskDetail {
  constructor() {}

  render() {
    return document.createRange().createContextualFragment(
      `
      <article class="task-detail">
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
              <button class="pomodoro-updown-btn" name="pomodoro-up">
                <i class="fas fa-caret-up"></i>
              </button>
              <button class="pomodoro-updown-btn" name="pomodoro-down">
                <i class="fas fa-caret-down"></i>
              </button>
            </div>
          </div>
          <div class="task-detail__note">
            <!-- <button class="add-note-btn">+ Add Note</button> -->
            <textarea name="note" placeholder="Some notes..."></textarea>
          </div>
        </main>
        <footer>
          <button class="task-detail__cancel-btn">Cancel</button>
          <button class="task-detail__save-btn">Save</button>
        </footer>
      </article>
      `
    );
  }

  hide() {
    document.querySelector(".task-detail").remove();
  }
}

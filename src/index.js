// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.
import "./reset.css";
import "./task.css";

import AddTaskBtn from './addTaskBtn';
import EditTask from './EditTask';
import Task from './task'

const myTask = new Task({title: 'my Task', note: 'oh my godd', estimatedPomodoros: 1})
const taskList = document.querySelector(".task-list");

taskList.appendChild(myTask.render())



/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");
// 페이지가 로딩이 되면, Task Section을 화면에 띄우고 클릭 이벤트에 등록을 하는 등 초기 세팅을 하자.



const myTaskManager = new _taskManager__WEBPACK_IMPORTED_MODULE_1__.default();
const task1 = { id: 1, title: "Task1", estPomodoros: 3 };
const task2 = { id: 2, title: "Task2", estPomodoros: 10 };
const task3 = { id: 3, title: "Task3", estPomodoros: 4 };
const task4 = { id: 4, title: "Task4", estPomodoros: 5 };
const task5 = { id: 5, title: "Task5", estPomodoros: 6 };
myTaskManager.addTask(task1);
myTaskManager.addTask(task2);
myTaskManager.addTask(task3);
myTaskManager.addTask(task4);
myTaskManager.addTask(task5);

myTaskManager.removeTaskById(1);
myTaskManager.removeTaskById(1);
myTaskManager.removeTaskById(1);
myTaskManager.removeTaskById(1);
myTaskManager.removeTaskById(1);
console.log(myTaskManager.getAllTasks());


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Task
/* harmony export */ });
class Task {
  constructor(TaskInfo) {
    const { id, title, note, estPomodoros } = TaskInfo;
    this.id = id;
    this.title = title;
    this.note = note;
    this.estPomodoros = estPomodoros;
    this.completedPomodoros = 0;
    this.isCompleted = false;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  setNote(note) {
    this.note = note;
  }

  setTitle(title) {
    this.title = title;
  }

  setEstPomodoros(numPomodoros) {
    this.estPomodoros = numPomodoros;
  }

  incrementCompletedPomodoros() {
    this.completedPomodoros++;
  }
}


/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ TaskManager
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


class TaskManager {
  constructor() {
    this.taskList = [];
  }

  addTask(taskInfo) {
    const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.default(taskInfo);
    this.taskList.push(newTask);
  }

  removeTaskById(id) {
    this.taskList.splice(id - 1, 1);
    this.updateTasksId();
  }

  updateTasksId() {
    this.taskList.forEach((task, index) => (task.id = index + 1));
  }

  getTaskById(id) {
    return this.taskList.find((task) => task.id === id);
  }

  getAllTasks() {
    return this.taskList;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0Ly4vc3JjL3Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9tb2Rvcm8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbW9kb3JvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb21vZG9yby1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEI7QUFDYzs7QUFFeEMsMEJBQTBCLGlEQUFXO0FBQ3JDLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0EsV0FBVyxnQ0FBZ0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUIwQjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBSTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDtjpjsnbTsp4DqsIAg66Gc65Sp7J20IOuQmOuptCwgVGFzayBTZWN0aW9u7J2EIO2ZlOuptOyXkCDrnYTsmrDqs6Ag7YG066atIOydtOuypO2KuOyXkCDrk7HroZ3snYQg7ZWY64qUIOuTsSDstIjquLAg7IS47YyF7J2EIO2VmOyekC5cbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBUYXNrTWFuYWdlciBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5jb25zdCBteVRhc2tNYW5hZ2VyID0gbmV3IFRhc2tNYW5hZ2VyKCk7XG5jb25zdCB0YXNrMSA9IHsgaWQ6IDEsIHRpdGxlOiBcIlRhc2sxXCIsIGVzdFBvbW9kb3JvczogMyB9O1xuY29uc3QgdGFzazIgPSB7IGlkOiAyLCB0aXRsZTogXCJUYXNrMlwiLCBlc3RQb21vZG9yb3M6IDEwIH07XG5jb25zdCB0YXNrMyA9IHsgaWQ6IDMsIHRpdGxlOiBcIlRhc2szXCIsIGVzdFBvbW9kb3JvczogNCB9O1xuY29uc3QgdGFzazQgPSB7IGlkOiA0LCB0aXRsZTogXCJUYXNrNFwiLCBlc3RQb21vZG9yb3M6IDUgfTtcbmNvbnN0IHRhc2s1ID0geyBpZDogNSwgdGl0bGU6IFwiVGFzazVcIiwgZXN0UG9tb2Rvcm9zOiA2IH07XG5teVRhc2tNYW5hZ2VyLmFkZFRhc2sodGFzazEpO1xubXlUYXNrTWFuYWdlci5hZGRUYXNrKHRhc2syKTtcbm15VGFza01hbmFnZXIuYWRkVGFzayh0YXNrMyk7XG5teVRhc2tNYW5hZ2VyLmFkZFRhc2sodGFzazQpO1xubXlUYXNrTWFuYWdlci5hZGRUYXNrKHRhc2s1KTtcblxubXlUYXNrTWFuYWdlci5yZW1vdmVUYXNrQnlJZCgxKTtcbm15VGFza01hbmFnZXIucmVtb3ZlVGFza0J5SWQoMSk7XG5teVRhc2tNYW5hZ2VyLnJlbW92ZVRhc2tCeUlkKDEpO1xubXlUYXNrTWFuYWdlci5yZW1vdmVUYXNrQnlJZCgxKTtcbm15VGFza01hbmFnZXIucmVtb3ZlVGFza0J5SWQoMSk7XG5jb25zb2xlLmxvZyhteVRhc2tNYW5hZ2VyLmdldEFsbFRhc2tzKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKFRhc2tJbmZvKSB7XG4gICAgY29uc3QgeyBpZCwgdGl0bGUsIG5vdGUsIGVzdFBvbW9kb3JvcyB9ID0gVGFza0luZm87XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgIHRoaXMuZXN0UG9tb2Rvcm9zID0gZXN0UG9tb2Rvcm9zO1xuICAgIHRoaXMuY29tcGxldGVkUG9tb2Rvcm9zID0gMDtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9ICF0aGlzLmlzQ29tcGxldGVkO1xuICB9XG5cbiAgc2V0Tm90ZShub3RlKSB7XG4gICAgdGhpcy5ub3RlID0gbm90ZTtcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgc2V0RXN0UG9tb2Rvcm9zKG51bVBvbW9kb3Jvcykge1xuICAgIHRoaXMuZXN0UG9tb2Rvcm9zID0gbnVtUG9tb2Rvcm9zO1xuICB9XG5cbiAgaW5jcmVtZW50Q29tcGxldGVkUG9tb2Rvcm9zKCkge1xuICAgIHRoaXMuY29tcGxldGVkUG9tb2Rvcm9zKys7XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gIH1cblxuICBhZGRUYXNrKHRhc2tJbmZvKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tJbmZvKTtcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gIH1cblxuICByZW1vdmVUYXNrQnlJZChpZCkge1xuICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGlkIC0gMSwgMSk7XG4gICAgdGhpcy51cGRhdGVUYXNrc0lkKCk7XG4gIH1cblxuICB1cGRhdGVUYXNrc0lkKCkge1xuICAgIHRoaXMudGFza0xpc3QuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+ICh0YXNrLmlkID0gaW5kZXggKyAxKSk7XG4gIH1cblxuICBnZXRUYXNrQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tMaXN0LmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgfVxuXG4gIGdldEFsbFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
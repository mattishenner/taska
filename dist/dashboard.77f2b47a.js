const newTaskInput = document.getElementById("new-task-input");
const newTaskBtn = document.getElementById("new-task-btn");
const taskList = document.querySelector(".task-list");
const prioritySlider = document.getElementById("priority-slider");
//To do list
let taskArray = [
    {
        task: "Buy groceries",
        priority: 3,
        done: false,
        completedDate: null
    },
    {
        task: "Do laundry",
        priority: 1,
        done: false,
        completedDate: null
    }
];
//Remove old tasks
function removeOldTasks() {
    const now = new Date();
    taskArray = taskArray.filter((task)=>{
        if (task.done && task.completedDate) {
            const completedDate = new Date(task.completedDate);
            const hoursSinceCompletion = (now - completedDate) / 3600000;
            if (hoursSinceCompletion >= 12) return false;
        }
        return true;
    });
    renderTasks();
}
//Render tasks
function renderTasks() {
    taskList.innerHTML = "";
    taskArray.forEach((task, index)=>{
        const li = document.createElement("li");
        li.innerText = task.task;
        if (task.done) li.classList.add("done");
        if (task.priority === 3) li.classList.add("high-priority");
        else if (task.priority === 2) li.classList.add("medium-priority");
        else if (task.priority === 1) li.classList.add("low-priority");
        //Add event listener to each task
        li.addEventListener("click", ()=>{
            task.done = !task.done;
            if (task.done) task.completedDate = new Date();
            else task.completedDate = null;
            renderTasks();
        });
        taskList.appendChild(li);
    });
}
//Create new task
newTaskBtn?.addEventListener("click", (event)=>{
    event.preventDefault();
    taskArray.push({
        task: newTaskInput.value,
        done: false,
        completedDate: null,
        priority: Number(prioritySlider.value)
    });
    console.log(prioritySlider.value);
    renderTasks();
    newTaskInput.value = "";
});
//Initialize list
function init() {
    removeOldTasks();
    renderTasks();
    setInterval(removeOldTasks, 3600000);
}
init(); // newTaskBtn?.addEventListener('click', (event) => {
 //     event.preventDefault();
 //     const newTask = document.createElement('li');
 //     newTask.innerText = newTaskInput.value;
 //     taskList.appendChild(newTask);
 //     newTaskInput.value = '';
 //     newTask.addEventListener('click', () => {
 //         newTask.classList.toggle('done');
 //     });
 //     newTask.addEventListener('dblclick', () => {
 //         taskList.removeChild(newTask);
 //     });
 // });

//# sourceMappingURL=dashboard.77f2b47a.js.map

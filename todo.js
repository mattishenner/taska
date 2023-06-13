import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc, query, orderBy, writeBatch, update, commit } from "firebase/firestore";
import { db, app, auth } from "./app.js";
import { onAuthStateChanged } from "@firebase/auth";
import Sortable from "sortablejs";
import { hyphenate, hyphenateHTML, hyphenateHTMLSync, hyphenateSync } from "hyphen/en";

//Loading 
const loader = document.querySelector(".load-container");

onAuthStateChanged(auth, (user) => {
    if (user) {
        const newTaskInput = document.getElementById('new-task-input');
        const newTaskBtn = document.getElementById('new-task-btn');
        const taskList = document.querySelector('.task-list');
        const prioritySlider = document.getElementById('priority-slider');
        
        //Get tasks from firestore
        async function getTasks() {
            loader.classList.remove("hidden");
            const taskQuery = query(collection(db, "users", auth.currentUser.uid, "tasks"), orderBy("index"));
            const taskSnapshot = await getDocs(taskQuery);
            taskArray = taskSnapshot.docs.map(doc => {
                let data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    completedDate: data.completedDate ? data.completedDate.toDate() : null
                }
            })
            console.log(taskArray)
            loader.classList.add("hidden");
        }
        
        window.addEventListener("keydown", (event) => {
            console.log(taskArray)
        })
        
        //To do list
        let taskArray = [];
        
        //Remove old tasks
        async function removeOldTasks() {
            const now = new Date();
            const tasksToRemove = [];
        
            for (let task of taskArray){
                if (task.done && task.completedDate){
                    const completedDate = new Date(task.completedDate);
                    const hoursSinceCompletion = (now - completedDate) / (1000 * 60 * 60);
                    if (hoursSinceCompletion >= 12) {
                        tasksToRemove.push(task);
                    }
                }
            }
        
            for (let task of tasksToRemove){
                const taskDoc = doc(db, "users", auth.currentUser.uid, "tasks", task.id);
                await deleteDoc(taskDoc);
        
                const index = taskArray.indexOf(task);
                if (index !== -1) {
                    taskArray.splice(index, 1);
                }
            }
        
            renderTasks();
        };
        
        //Render tasks
        function renderTasks() {
            taskList.innerHTML = "";
            taskArray.forEach((task) => {
                const li = document.createElement('li');
                li.id = task.id;
                const innerText = document.createElement('p');
                const delBtn = document.createElement('h4');
                
                innerText.innerText = task.task;
                if (task.done) {
                    innerText.classList.add('done');
                    li.classList.add('done');
                }
        
                if (task.priority === 3) {
                    li.classList.add('high-priority');
                } else if (task.priority === 2) {
                    li.classList.add('medium-priority');
                } else if (task.priority === 1) {
                    li.classList.add('low-priority');
                }
        
                delBtn.innerText = 'Remove';
                delBtn.classList.add('delete');
        
                //Delete task
                delBtn.addEventListener('click', (event) => {
                    event.stopPropagation();

                    const taskRef = doc(db, "users", auth.currentUser.uid, "tasks", task.id);
                    
                    const index = taskArray.indexOf(task);
                    if (index !== -1) {
                        taskArray.splice(index, 1);
                    }
                    renderTasks();
        
                    deleteDoc(taskRef)
                        .catch((error) => {
                            console.error("Error removing document: ", error);
                        })
                });
        
                //Add event listener to each task
                li.addEventListener('click', async () => {
                    task.done = !task.done;
                    renderTasks();
                    if (task.done) {
                        task.completedDate = new Date();
                        const taskRef = doc(db, "users", auth.currentUser.uid, "tasks", task.id);
                        await updateDoc(taskRef, { done: task.done, completedDate: task.completedDate})
                    } else {
                        task.completedDate = null;
                        const taskRef = doc(db, "users", auth.currentUser.uid, "tasks", task.id);
                        await updateDoc(taskRef, { done: task.done, completedDate: task.completedDate})
                    }
                });
                li.appendChild(innerText);
                li.appendChild(delBtn);
                taskList.appendChild(li);
            });
        }
        
        
        //Create new task
        newTaskBtn?.addEventListener('click', async (event) => {
            event.preventDefault();

            let newTaskText = hyphenateSync(newTaskInput.value);
        
            const newTask = {
                task: newTaskText,
                done: false,
                completedDate: null,
                priority: Number(prioritySlider.value),
                index: taskArray.length
            }
        
            //add new document to firestore
            try {
                const taskCollection = collection(db, "users", auth.currentUser.uid, "tasks");
                const docRef = await addDoc(taskCollection, newTask);
                console.log("Document written with ID: ", docRef.id);
        
                newTask.id = docRef.id;
        
                taskArray.push(newTask);
                renderTasks();
                newTaskInput.value = '';
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        });
        
        
        //Initialize list
        async function init() {
            await getTasks();
            removeOldTasks();
            renderTasks();
            setInterval(removeOldTasks, 1000 * 60 * 30);
        }
        init();
        
        //Open and close input area
        const plusBtn = document.querySelector('.plus-btn');
        const inputArea = document.querySelector('.input-area');
        let inputAreaOpen = false;
        
        plusBtn.addEventListener('click', () => {
            inputAreaOpen = !inputAreaOpen;
            inputArea.classList.toggle('show');
            if (inputAreaOpen === true){
                newTaskInput.focus();
            } else {
                newTaskInput.blur();
            }
            plusBtn.classList.toggle('rotate');
        });

        //Update index of tasks function
        async function updateIndex() {
            const newTaskArray = [];
            const idArray = sortable.toArray();
            console.log("id array", idArray);
            idArray.forEach(id => {
                console.log("task array before find", taskArray);
                const task = taskArray.find(task => task.id === id);
                newTaskArray.push(task);
                console.log("task", task);
            });
            taskArray = newTaskArray;
            console.log("task array", taskArray);


            const batch = writeBatch(db); // initiate batch        
            taskArray.forEach((task, index) => {
                const taskRef = doc(db, "users", auth.currentUser.uid, "tasks", task.id);
                batch.update(taskRef, { index }); // queue updates
            });
            await batch.commit(); // commit all updates in a single request
        }

        //Sortable
        const taskListEl = document.querySelector('.task-list');
        let sortable = Sortable.create(taskListEl, {
            delay: 100,
            animation: 150,
            sort: true,
            dataIdAttr: 'id',
            easing: "cubic-bezier(1, 0, 0, 1)",
            onEnd: updateIndex
        });


        ////END OF if(user)
    }  
});






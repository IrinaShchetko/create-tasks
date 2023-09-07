import { getDataLocalStorage, setDataLocalStorage } from "../storage/index.js"

const allTasks = getDataLocalStorage('tasks')
export function handlerAddTaskToStorage() {
    const title = document.querySelector('.task__form-body-title').value
    const desc = document.querySelector('.task__form-body-description').value
    const inputUser = document.querySelector('.task__form-body-user').value
    const datalistOptions = document.querySelectorAll('.task__form-body-datalist-option')
    const selectedUser = Array.from(datalistOptions).find(option => option.value === inputUser)
    const newTask = {
        title:title ,
        description: desc,
        user: selectedUser.value
    }
    console.log(newTask)
    allTasks.push(newTask)
    setDataLocalStorage('tasks', allTasks)
}
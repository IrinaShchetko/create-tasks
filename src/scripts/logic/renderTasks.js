import { getDataLocalStorage } from '../storage/index.js'
import { createTask } from '../components/index.js'
export function renderTasks() {
    const allTasks = getDataLocalStorage('tasks')
    const bodyBoard = document.querySelector('.boards__item-body')
    allTasks.forEach(item => {
        bodyBoard.append(createTask(item))
    })
}

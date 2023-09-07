import { getDataLocalStorage, setDataLocalStorage } from '../storage/index.js'

export function handlerDeleteCurrentTask(event) {
    const task = event.target.closest('.task__body')
    const bodyBoard = document.querySelector('.boards__item-body')
    
    const taskTitle = task.querySelector('.task__title').textContent
    bodyBoard.removeChild(task)

    const allTasks = getDataLocalStorage('tasks')
    const updatedTasks = allTasks.filter(item => item.title !== taskTitle)
    setDataLocalStorage('tasks', updatedTasks)
}
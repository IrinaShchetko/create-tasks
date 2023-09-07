import { nameBoard } from './components/index.js'
import { handlerOpenModalForAddTask, handlerDeleteCurrentTask } from '../scripts/handlers/index.js'
import { renderTasks } from './logic/index.js'


export function initApp() {
    nameBoard()
    const addTask = document.querySelector('.boards__item-button-add')
    addTask.addEventListener('click', handlerOpenModalForAddTask)
    renderTasks()
    const deleteBtns = document.querySelectorAll('.task__functionality-additional')
    deleteBtns.forEach (item => {
        item.addEventListener('click', handlerDeleteCurrentTask)
    })
    
    // const overlay = document.querySelector('.modal__overlay')
    // overlay.addEventListener('click', handlerCloseModal)
    
}



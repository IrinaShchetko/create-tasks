import { nameBoard } from './components/index.js'
// import { createTask } from './components/index.js'
import { handlerOpenModalForAddTask } from '../scripts/handlers/index.js'


export function initApp() {
    // createTask()
    nameBoard()
    const addTask = document.querySelector('.boards__item-button-add')
    addTask.addEventListener('click', handlerOpenModalForAddTask)

    // const overlay = document.querySelector('.modal__overlay')
    // overlay.addEventListener('click', handlerCloseModal)

    
}



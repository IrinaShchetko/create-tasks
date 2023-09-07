import { nameBoard } from './components/index.js'
// import { createTask } from './components/index.js'
import { handlerOpenModalForAddTask } from '../scripts/handlers/index.js'

export function initApp() {
    // createTask()
    nameBoard()
    const addTask = document.querySelector('.boards__item-button-add')
    addTask.addEventListener('click', handlerOpenModalForAddTask)
    // const closeModal = document.querySelector('.modal__overlay')
    // closeModal.addEventListener('click', handlerCloseModal)
    // const overlay = document.querySelector('.modal-overlay')
    // overlay.addEventListener('click', handlerCloseModal)
}
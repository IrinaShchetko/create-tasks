import { rootElements } from '../constants/index.js'
import { createModalForAddTask } from '../components/index.js'
import { handlerAddTaskToStorage } from './handlerAddTaskToStorage.js'

export function handlerOpenModalForAddTask() {
    const dialog = createModalForAddTask()
    rootElements.wrapper.append(dialog)
    dialog.show()

    const confirm = document.querySelector('.task__form-body')
    confirm.addEventListener('submit', handlerAddTaskToStorage)

}

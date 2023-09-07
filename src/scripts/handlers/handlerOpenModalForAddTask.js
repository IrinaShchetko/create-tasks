import { rootElements } from '../constants/index.js'
import { createModalForAddTask } from '../components/index.js'

export function handlerOpenModalForAddTask() {
    const dialog = createModalForAddTask()
    rootElements.wrapper.append(dialog)
    dialog.showModal()
}

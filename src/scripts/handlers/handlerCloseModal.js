export function handlerCloseModal() {
    const overlay = document.querySelector('.modal__overlay')
    const dialog = overlay.closest('dialog')
    if(dialog) {
        dialog.close()
    }
    // const dialog = document.querySelector('dialog')
    // // const dialog = createModalForAddTask()
    // //     rootElements.wrapper.prepand(dialog)
    // dialog.close()
}



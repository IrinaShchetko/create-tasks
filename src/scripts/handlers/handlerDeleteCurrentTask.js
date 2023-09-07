export function handlerDeleteCurrentTask(event) {
    const task = event.target.closest('.task__body')
    const bodyBoard = document.querySelector('.boards__item-body')
    bodyBoard.removeChild(task)
}
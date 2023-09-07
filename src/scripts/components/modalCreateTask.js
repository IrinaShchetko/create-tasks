const template = document.querySelector('.task__form')

export function createModalForAddTask() {
    const modalAddTask = document.createElement('dialog')
    modalAddTask.className = 'modal__overlay'
    modalAddTask.setAttribute('open', 'true')
    const newTask = template.content.cloneNode(true)
    newTask.querySelector('.task__form-body-title').placeholder = 'Напишите заголовок вашей задачи'
    newTask.querySelector('.task__form-body-description').placeholder = 'Введите текст задачи'
    newTask.querySelector('.task__form-body-reset').textContent = 'CANCEL'
    newTask.querySelector('.task__form-body-submit').textContent = 'CONFIRM'
    modalAddTask.append(newTask)
    return modalAddTask
}
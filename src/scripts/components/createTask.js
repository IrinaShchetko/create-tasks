const template = document.querySelector(".task")
const body = document.querySelector(".boards__item-body-todo")

export function createTask(item) {
    const task = template.content.cloneNode(true)
    task.querySelector(".task__title").textContent = item.title
    task.querySelector(".task__description").textContent = item.description
    task.querySelector(".task__user").textContent = item.user
    task.querySelector(".task__functionality-main").textContent = "EDIT"
    task.querySelector(".task__functionality-additional").textContent = "DELETE"
    task.querySelector(".task__date").textContent = new Date().toLocaleDateString()
    return task
}

export function dragAndDrop() {
    const boards = document.querySelectorAll('.boards__item')
    const tasks = document.querySelectorAll('.task__body')

    const dragstart = function () {
        setTimeout(() => {
            this.classList.add('hidden')
        }, 0)
    }
    const dragEnd = function () {
        setTimeout(() => {
            this.classList.remove('hidden')
        }, 0)
    }
    tasks.forEach(item => {
        item.addEventListener('dragstart', dragstart)
        item.addEventListener('dragend', dragEnd)

    })
    const dragOver = function (event) {
        event.preventDefault()
    }
    const dragEnter = function () {
        this.classList.add('hovered')
    }
    const dragLeave = function () {
        this.classList.remove('hovered')
    }
    const dragDrop = function () {
        this.classList.remove('hovered')
        const draggedTask = document.querySelector('.task__body.dragging')
        if (draggedTask) {
            this.append(draggedTask)
        }
    }
    boards.forEach(item => {
        item.addEventListener('dragover', dragOver)
        item.addEventListener('dragenter', dragEnter)
        item.addEventListener('dragleave', dragLeave)
        item.addEventListener('drop', dragDrop)
    })
    tasks.forEach(item => {
        item.addEventListener('dragstart', function () {
            item.classList.add('dragging')
        })
        item.addEventListener('dragend', function () {
            item.classList.remove('dragging')
        })
    })
}
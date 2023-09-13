export function dragAndDrop() {
    const boards = document.querySelectorAll('.boards__item')
    const tasks = document.querySelectorAll('.task__body')

    function dragStart () {
        setTimeout(() => {
            this.classList.add('hidden')
        }, 0)
    }
    function dragEnd () {
        setTimeout(() => {
            this.classList.remove('hidden')
        }, 0)
    }
    tasks.forEach(item => {
        item.addEventListener('dragstart', dragStart)
        item.addEventListener('dragend', dragEnd)

    })
    function dragOver (event) {
        event.preventDefault()
    }
    function dragEnter () {
        this.classList.add('hovered')
    }
    function dragLeave () {
        this.classList.remove('hovered')
    }
    function dragDrop () {
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
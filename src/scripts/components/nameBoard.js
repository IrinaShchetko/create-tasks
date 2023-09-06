import {titlesOfBoards} from '../constants/index.js'

export function nameBoard () {
    const allTitles = document.querySelectorAll('.boards__item-header-title')
    allTitles.forEach((title, index) => {
        if (titlesOfBoards[index]) {
            title.textContent = titlesOfBoards[index]
        }
    })

}
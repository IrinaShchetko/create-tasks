export function currentTime() {
    const date = new Date()
    const formattedDate = formatDate(date)
    document.querySelector('.header__main-clock').innerText = formattedDate

    setTimeout(currentTime, 1000)
}

function formatDate(date) {
    const day = addLeadingZero(date.getDate());
    const month = addLeadingZero(date.getMonth() + 1)
    const year = date.getFullYear()
    const hour = addLeadingZero(date.getHours())
    const min = addLeadingZero(date.getMinutes())
    const sec = addLeadingZero(date.getSeconds())
    const midday = (hour >= 12) ? "PM" : "AM"

    return `${hour}:${min}:${sec} ${midday} ${day}.${month}.${year}`
}

function addLeadingZero(number) {
    return (number < 10) ? `0${number}` : `${number}`
}

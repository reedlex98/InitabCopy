function getHours(date) {
    let hour = ''
    if (date.getHours() < 10)
        hour = `0${date.getHours()}`
    else if (date.getHours() <= 12)
        hour = date.getHours()
    else
        hour = (date.getHours() - 12) < 10 ? `0${(date.getHours() - 12)}` : date.getHours() - 12
    console.log(hour, 'here')
    return hour
}
function getMinutes(date) {
    return date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
}
function getDaytime(date) {
    return date.getHours() < 12 ? 'AM' : 'PM'
}
function getMonthName(date) {
    return Array.from(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Jun', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'])[date.getMonth()]
}
function initClock(date) {
    return {
        hour: getHours(date),
        minutes: getMinutes(date),
        daytime: getDaytime(date),
        month: getMonthName(date),
        day: date.getDate(),
        year: date.getFullYear()
    }
}

$(function (e) {
    setInterval(() => {
        let clock = initClock(new Date)
        $('.hour-minute').text(`${clock.hour}:${clock.minutes}`)
        $('.daytime').text(`${clock.daytime}`)
        $('.date').text(`${clock.day} ${clock.month}, ${clock.year}`)
    }, 1000)
})


// This line isn't related with jsClock
$('.hide').click(e => $('.custom-link-info').fadeOut())
function elementGen(tag, content, colorClass, typeClass) {
    return $(tag).addClass(`${colorClass} ${typeClass}`).append(content)
}
function postDateGen(title, time) {
    return $('<p>').addClass('post-history-container').append(elementGen('<span>', title, 'dark-blue-text', 'post-history'), elementGen('<span>', time, 'post-date'))
}
$.getJSON("./bd/jshistory.json", function (data) {
    for (let d of data)
        $('.javascript-history').append(postDateGen(d['title'], d['time']))
}
);
function mainTextGen(content) {
    return $('<p>').addClass('main-text').append(content)
}
function postedByGen(content) {
    return $('<span>').addClass('blue-text').html(`Posted by: <span class='yellow-text'>${content}</span>`)
}
function redditScoreGen(content) {
    return $('<span>').addClass('dark-blue-text').append(`Reddit score: ${content}`)
}
function linkCommentsGen(hasComments) {
    return $('<span>').addClass('pink-text underscore-link').append('link to comments')
}
function advertisorGen(content) {
    return $('<span>').addClass('pink-text').append(content)
}
function repoTextGen(content) {
    return $('<span>').addClass('dark-blue-text').append(content)
}
function issueTextGen(content) {
    return $('<span>').addClass('yellow-text').append(content)
}


function detailTextGen(type, postedBy, redditScore, hasComments, advertisor, repo, issue) {
    let detailText = $('<p>').addClass('detail-text')
    if (type === 'userPost') {
        detailText.append(postedByGen(postedBy), '<br>')
        detailText.append(redditScoreGen(redditScore), '<br>')
        if (hasComments) detailText.append(linkCommentsGen(hasComments))
    }
    else if (type === 'advertising')
        detailText.append(advertisorGen(advertisor))
    else {
        detailText.append(repoTextGen(repo), '<br>')
        detailText.append(issueTextGen(issue))
    }
    return detailText
}
function postCardGen(mainText, detailText) {
    return $('<div>').addClass('post-card').append(mainText, detailText)
}
$.getJSON("./bd/jsreddit.json", function (data) {
    for (let d of data) {
        if (d['type'] === 'userPost') {
            $('.javascript-reddit')
                .append(postCardGen(mainTextGen(d['maintext']), detailTextGen(d['type'], d['postedby'], d['redditscore'], d['hascomments'])))
        } else if (d['type'] === 'advertising') {
            $('.javascript-reddit')
                .append(postCardGen(mainTextGen(d['maintext']), detailTextGen(d['type'], null, null, null, d['advertisor'])))
        }
    }
}
)
$.getJSON("./bd/gitissues.json", function (data) {
    for (let d of data) {
        $('.github-issues')
            .append(postCardGen(mainTextGen(d['main-text']), detailTextGen(d['type'], null, null, null, null, d['repo'], d['issue'])))
    }
}
)
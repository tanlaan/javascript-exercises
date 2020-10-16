const getTheTitles = function(titles) {
    // Took me a while to realize I wanted map no reduce
    return titles.map(book => book['title'])
}

module.exports = getTheTitles;

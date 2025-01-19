const getTheTitles = function(library) {
    let titles = [];
    library.forEach((book) => {
        titles.push(book.title);
    })
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;

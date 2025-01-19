const findTheOldest = function(people) {
    return people.reduce((oldest, currPerson) => {
        let oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        let currAge = (currPerson.yearOfDeath || new Date().getFullYear()) - currPerson.yearOfBirth;
        return oldestAge > currAge ? oldest : currPerson;
    })
}

// Do not edit below this line
module.exports = findTheOldest;

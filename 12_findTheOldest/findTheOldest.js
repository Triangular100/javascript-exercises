const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let oldAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = calculateAge(current.yearOfBirth, current.yearOfDeath);
        if (currentAge > oldAge) {
            return current;
        }
        return oldest;
    });
};

const calculateAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;

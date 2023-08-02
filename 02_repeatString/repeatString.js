const repeatString = function(string, numRepetitions) {
    if (numRepetitions < 0) {
        return "ERROR";
    }

    let result = "";
    for (let i = 0; i < numRepetitions; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

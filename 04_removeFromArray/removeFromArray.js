const removeFromArray = function(array, ...targets) {
    return array.filter(value => !targets.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;

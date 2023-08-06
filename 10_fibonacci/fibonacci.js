const fibonacci = function(count) {
    if (count < 0) {
        return "OOPS";
    }
    if (count === 0) {
        return 0;
    }

    let temp;
    let prev = 1;
    let next = 1;
    for (let i = 2; i < count; i++) {
        temp = next;
        next += prev;
        prev = temp;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;

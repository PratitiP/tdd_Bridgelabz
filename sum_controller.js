/**
 * Sum two numbers 
 * @param {number} a 
 * @param {number} b
 * @return {number} sum
 */
function sum(a, b) {
    //case 1 : check function for empty string or undefined or null or NaN
    if (a === "" || b === "" ||
        typeof (a) == 'undefined' || typeof (b) == 'undefined' ||
        isNaN(a) || isNaN(b) || a === null || b === null)
        return 0;

    //case 4 : sum the arguments
    return a + b;
}

module.exports = sum;
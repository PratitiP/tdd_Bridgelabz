function sum(a, b) {
    //case 1 : check function for no arguments
    if (a == "" || b == "")
        return 0;

    //case 2 : check function for partial arguments
    if (typeof (a) == 'undefined' || typeof (b) == 'undefined')
        return 0;

    //case 3 : check for invalid integer arguments
    if (isNaN(a) || isNaN(b))
        return 0;

    //case 4 : check function for valid arguments
    let c = a + b;
    return c;

}

module.exports = sum;
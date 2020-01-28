

exports.unitConversion = function (length, lUnit, cUnit) {
    //case 1 - null check
    if (length == undefined)
        return 0;

    //case 2 - type check
    if (isNaN(length))
        return 0;
    //case 3 - check negative arguments
    if (length < 0)
        return 0;

    let res = 0;
    //refactor to follow dry and solid principal 
    if (lUnit == 'ft' && cUnit == 'in')
        res = length * 12;

    if (lUnit == 'ft' && cUnit == 'yd')
        res = length / 3;

    if (lUnit == 'in' && cUnit == 'ft')
        res = length / 12;

    if (lUnit == 'in' && cUnit == 'yd')
        res = length / 36;

    if (lUnit == 'yd' && cUnit == 'ft')
        res = length * 3;

    if (lUnit == 'yd' && cUnit == 'in')
        res = length * 36;

    return res;
}




exports.feetToInchConversion=function(feet){
    //case 1 - null check
    if(feet==undefined)
        return 0;

    //case 2 - type check
    if(isNaN(feet))
        return 0;
    //case 3 - check negative arguments
    if(feet<0)
        return 0;

    let inch=feet*12;
    return inch;
}

exports.inchToFeetConversion=function(inch){
    //case 1 - null check
    if(inch==undefined)
        return 0;

    //case 2 - type check
    if(isNaN(inch))
        return 0;
    //case 3 - check negative arguments
    if(inch<0)
        return 0;

    let feet=inch/12;
    return feet;
}
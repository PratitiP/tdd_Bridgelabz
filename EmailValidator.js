/**
 * Validate email n throw particular error
 * @param {string} email
 * 
 */
function validateEmail(email) {
    let pattern = /^(?!\.)(?!.*\.@)(?!.*?\.\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z][a-zA-Z](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // console.log(pattern.test(email));

    // check for error 
    //case 1 - must contain @
    if (email.indexOf('@') === -1)
        throw Error("must contain @")

    //case 2 - tld can not start with .
    let emailArr = email.split('@');
    let e = emailArr[0];
    let tld = emailArr[1];
    if (tld.indexOf('.') === 0)
        throw Error('tld can not start with dot');

    //case 3 - last tld must contains at least two characters
    let tldArr = tld.split('.');
    if (tldArr[tldArr.length - 1].length < 2)
        throw Error('last tld must contains at least two characters');

    //case 4 - email’s 1st character can not start with dot
    if (e.indexOf('.') === 0)
        throw Error('email’s 1st character can not start with dot');

    //case 5 - email only allow character, digit, underscore and dash
    let pat = /^[A-Za-z0-9\-_.+]+$/;
    if (!pat.test(e))
        throw Error('email only allow character, digit, underscore and dash');

    //case 6 - tld only allow character and digit
    pat = /^[A-Za-z0-9.]+$/;
    if (!pat.test(tld))
        throw Error('tld only allow character and digit');

    //case 7 - email’s last character can not end with dot
    if (e[e.length - 1] === '.')
        throw Error('email’s last character can not end with dot');

    //case 8 - double dots are not allow
    pat = /^\w+([/+.-]?\w+)*$/
    if (!pat.test(e))
        throw Error('double dots are not allow');

    //case 9 - double “@” is not allow
    if (emailArr.length > 2)
        throw Error('double “@” is not allow');

    //case 10 - email’s tld which has two characters can not contains digit
    pat = /^[A-Za-z]+$/;
    for (let i = 0; i < tldArr.length; i++) {
        if (tldArr[i].length === 2 && !pat.test(tldArr[i])) {
            throw Error('email’s tld which has two characters can not contains digit');
        }
    }

    //case 11 - can not have multiple email’s tld
    if (tldArr.length > 3)
        throw Error('can not have multiple email’s tld');

    // return true for valid email
    if (pattern.test(email))
        return true;
}

module.exports = validateEmail;
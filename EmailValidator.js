function validateEmail(email){
    let pattern=/^(?!\.)(?!.*\.@)(?!.*?\.\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z][a-zA-Z](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // console.log(pattern.test(email));
    return pattern.test(email);
    
}

module.exports = validateEmail;
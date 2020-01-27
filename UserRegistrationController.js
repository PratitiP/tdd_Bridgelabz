class UserRegistrationController{

    isValidName(name){
        let regexName=RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
        return regexName.test(name);
    }

    isValidPin(pin){
        let regexPin=RegExp('^[0-9]{6}$');
        return regexPin.test(pin);
    }
}

module.exports = UserRegistrationController;

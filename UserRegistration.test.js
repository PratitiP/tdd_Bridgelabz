const UserRegController=require('./UserRegistrationController');
const assert=require('assert');

let userRegController=new UserRegController();

describe('User Registration',function(){
    describe('Test for User name validation',function(){
        it('should return true if valid username',function(){
            let isValid=userRegController.isValidName('pratiti');
            assert.equal(isValid,true);
        });
        it('should return false for invalid username',function(){
            let isValid=userRegController.isValidName('pratiti123');
            assert.equal(isValid,false);
        });
        it('should return false for invalid username',function(){
            let isValid=userRegController.isValidName('pratiti@12');
            assert.equal(isValid,false);
        });
    });
    
    describe('Test for pin code validation',function(){
        it('should return true if valid pin code',function(){
            let isValid=userRegController.isValidPin('415002');
            assert.equal(isValid,true);
        });
        it('should return true if valid pin code',function(){
            let isValid=userRegController.isValidPin('021625');
            assert.equal(isValid,true);
        });
        it('should return false for invalid pin code',function(){
            let isValid=userRegController.isValidPin('5412326');
            assert.equal(isValid,false);
        });
        it('should return false for invalid pin code',function(){
            let isValid=userRegController.isValidPin('04125');
            assert.equal(isValid,false);
        });
    });
});

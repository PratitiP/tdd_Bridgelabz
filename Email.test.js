const assert = require('assert');
const validateEmail=require('./EmailValidator');

describe('Email Validation',function(){
    describe('Tests for invalid Email',function(){
        it('must contains “@” symbol',function(){
            let isValid=validateEmail('abc');
            assert.equal(isValid,'must contain @');
        });
    
        it('tld can not start with dot “.”',function(){
            let isValid=validateEmail('abc@.com.my');
            assert.equal(isValid,'tld can not start with dot');
        });
    
        it('last tld must contains at least two characters',function(){
            let isValid=validateEmail('abc123@gmail.a');
            assert.equal(isValid,'last tld must contains at least two characters');
        });
    
        it('tld can not start with dot “.”',function(){
            let isValid=validateEmail('abc123@.com');
            assert.equal(isValid,'tld can not start with dot');
        });
    
        it('tld can not start with dot “.”',function(){
            let isValid=validateEmail('abc123@.com.com');
            assert.equal(isValid,'tld can not start with dot');
        });
    
        it('email’s 1st character can not start with “.”',function(){
            let isValid=validateEmail('.abc@abc.com');
            assert.equal(isValid,'email’s 1st character can not start with dot');
        });
    
        it('email’s is only allow character, digit, underscore and dash',function(){
            let isValid=validateEmail('abc()*@gmail.com');
            assert.equal(isValid,'email only allow character, digit, underscore and dash');
        });
    
        it('email’s tld only allow character and digit',function(){
            let isValid=validateEmail('abc@%*.com');
            assert.equal(isValid,'tld only allow character and digit');
        });
    
        it('double dots “.” are not allow',function(){
            let isValid=validateEmail('abc..2002@gmail.com');
            assert.equal(isValid,'double dots are not allow');
        });
    
        it('email’s last character can not end with dot “.”',function(){
            let isValid=validateEmail('abc.@gmail.com');
            assert.equal(isValid,'email’s last character can not end with dot');
        });
    
        it('double “@” is not allow',function(){
            let isValid=validateEmail('abc@abc@gmail.com');
            assert.equal(isValid,'double “@” is not allow');
        });
    
        it('email’s tld which has two characters can not contains digit',function(){
            let isValid=validateEmail('abc@gmail.com.1a');
            assert.equal(isValid,'email’s tld which has two characters can not contains digit');
        });
    
        it('can not have multiple email’s tld',function(){
            let isValid=validateEmail('abc@gmail.com.aa.au');
            assert.equal(isValid,'can not have multiple email’s tld');
        });
    });
    
    describe('Tests for valid email',function(){
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc@yahoo.com');
            assert.equal(isValid,true);
        });
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc-100@yahoo.com');
            assert.equal(isValid,true);
        });
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc.100@yahoo.com');
            assert.equal(isValid,true);
        });
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc111@abc.com');
            assert.equal(isValid,true);
        });
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc-100@abc.net');
            assert.equal(isValid,true);
        });
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc.100@abc.com.au');
            assert.equal(isValid,true);
        });
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc@1.com');
            assert.equal(isValid,true);
        });
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc@gmail.com.com');
            assert.equal(isValid,true);
        });
        it('should return true for valid email',function(){
            let isValid=validateEmail('abc+100@gmail.com');
            assert.equal(isValid,true);
        });
    });
})

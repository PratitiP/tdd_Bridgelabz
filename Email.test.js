const assert = require('chai').assert;
const expect = require('chai').expect;
const validateEmail = require('./EmailValidator');

describe('Email Validation', function () {
    describe('Tests for invalid Email', function () {
        it('must contains “@” symbol', function () {
            // let isValid = validateEmail('abc');
            assert.throws(()=>validateEmail('abc'), Error, "must contain @");
        });

        it('tld can not start with dot “.”', function () {
            assert.throw(()=>validateEmail('abc@.com.my'),Error,'tld can not start with dot');
        });

        it('last tld must contains at least two characters', function () {
            assert.throw(()=>validateEmail('abc123@gmail.a'),Error,'last tld must contains at least two characters');
        });

        it('tld can not start with dot “.”', function () {
            assert.throw(()=>validateEmail('abc123@.com'),Error,'tld can not start with dot');
        });

        it('tld can not start with dot “.”', function () {
            assert.throw(()=>validateEmail('abc123@.com.com'),Error,'tld can not start with dot');
        });

        it('email’s 1st character can not start with “.”', function () {
            assert.throw(()=>validateEmail('.abc@abc.com'),Error,'email’s 1st character can not start with dot');
        });

        it('email’s is only allow character, digit, underscore and dash', function () {
            assert.throw(()=>validateEmail('abc()*@gmail.com'),Error,'email only allow character, digit, underscore and dash');
        });

        it('email’s tld only allow character and digit', function () {
            assert.throw(()=>validateEmail('abc@%*.com'),Error,'tld only allow character and digit');
        });

        it('double dots “.” are not allow', function () {
            assert.throw(()=>validateEmail('abc..2002@gmail.com'),Error,'double dots are not allow');
        });

        it('email’s last character can not end with dot “.”', function () {
            assert.throw(()=>validateEmail('abc.@gmail.com'),Error,'email’s last character can not end with dot');
        });

        it('double “@” is not allow', function () {
            assert.throw(()=>validateEmail('abc@abc@gmail.com'),Error,'double “@” is not allow');
        });

        it('email’s tld which has two characters can not contains digit', function () {
            assert.throw(()=>validateEmail('abc@gmail.com.1a'),Error,'email’s tld which has two characters can not contains digit');
        });

        it('can not have multiple email’s tld', function () {
            assert.throw(()=>validateEmail('abc@gmail.com.aa.au'),Error,'can not have multiple email’s tld');
        });
    });

    describe('Tests for valid email', function () {
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc@yahoo.com');
            assert.equal(isValid, true);
        });
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc-100@yahoo.com');
            assert.equal(isValid, true);
        });
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc.100@yahoo.com');
            assert.equal(isValid, true);
        });
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc111@abc.com');
            assert.equal(isValid, true);
        });
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc-100@abc.net');
            assert.equal(isValid, true);
        });
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc.100@abc.com.au');
            assert.equal(isValid, true);
        });
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc@1.com');
            assert.equal(isValid, true);
        });
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc@gmail.com.com');
            assert.equal(isValid, true);
        });
        it('should return true for valid email', function () {
            let isValid = validateEmail('abc+100@gmail.com');
            assert.equal(isValid, true);
        });
    });
})

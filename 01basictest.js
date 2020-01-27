const assert=require('assert');

describe('Basic mocha string test',function(){
        it('should return number of characters in a string',function(){
            assert.equal("Hello".length,4);
        });
        it('should return first character of string',function(){
            assert.equal("Hello".charAt(0),"H");
        });
});
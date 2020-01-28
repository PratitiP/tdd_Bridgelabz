const sum=require('./sum_controller');
const assert=require('assert');

describe('Test for sum of two numbers',function(){
    it('check function for no arguments',function(){
        let res=sum();
        assert.equal(res,0);
    });
    it('check function for partial arguments',function(){
        let res=sum(2);
        assert.equal(res,0);
    });
    it('check function for string arguments',function(){
        let res=sum('hi',5);
        assert.equal(res,0);
    });
    it('check function for empty string arguments',function(){
        let res=sum('',2);;
        assert.equal(res,0);
    });
    it('check function for valid arguments',function(){
        let res=sum(2,5);
        assert.equal(res,7);
    });
    it('check function for negative arguments',function(){
        let res=sum(-2,5);
        assert.equal(res,3);
    });
    it('check function for float arguments',function(){
        let res=sum(2,5.6);
        assert.equal(res,7.6);
    });
    it('check function null argument',function(){
        let res=sum(null, 6);
        assert.equal(res,0);
    });
});


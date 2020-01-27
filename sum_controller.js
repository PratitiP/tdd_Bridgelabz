const sum=require('./sum');
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
    it('check function for invalid number arguments',function(){
        let res=sum('hi',5);
        assert.equal(res,0);
    });
    it('check function for invalid number arguments',function(){
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
});


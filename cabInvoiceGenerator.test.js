const assert=require('assert');
const cabInvoiceGen=require('./CabInvoiceGenerator');

describe('Tests for userID', function(){
    it('check function for is no arguments',function(){
        let res=cabInvoiceGen.getRides("");
        assert.equal(res,0);
    });

    it('check function for is undefined arguments',function(){
        let res=cabInvoiceGen.getRides();
        assert.equal(res,0);
    });

    it('check function for non number arguments',function(){
        let res=cabInvoiceGen.getRides('user1');
        assert.equal(res,0);
    });

    it('check function for negative arguments',function(){
        let res=cabInvoiceGen.getRides('-5');
        assert.equal(res,0);
    });

    it('check function for user to return rides from repo',function(){
        let res=cabInvoiceGen.getRides(1);
        assert.notEqual(res,0);
    });

    it('check function for user does not exists in repo',function(){
        let res=cabInvoiceGen.getRides('02145');
        assert.equal(res,0);
    });
});

// describe('Tests for rides')

// describe('Tests for calFare - distance, time, category')
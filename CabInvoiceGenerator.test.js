const assert=require('chai').assert;
const expect=require('chai').expect;
const cabInvoiceGen=require('./CabInvoiceGenerator');

describe('Tests for function getRides with userID', function(){
    it('check function for no arguments',function(){
        let res=cabInvoiceGen.getRides("");
        assert.equal(res,0);
    });

    it('check function for undefined arguments',function(){
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

    it('check function for valid userID to return rides from repo',function(){
        let res=cabInvoiceGen.getRides(1);
        // expect(typeof(res)).equals("object");
        assert.typeOf(res,'array','rides is an array of objects');
        // assert.equal(typeof(res),'object');
    });

    it('check function for userID which does not exists in repo',function(){
        let res=cabInvoiceGen.getRides('02145');
        assert.equal(res,0);
    });
});

describe('Tests for function cabInvoiceGenerator function with rides',function(){
describe('Tests for function calAggregateFare with rides',function(){
    it('check function for no arguments',function(){
        let res = cabInvoiceGen.calAggregateFare();
        assert.equal(res,0);
    });
    it('check function for type of arguments',function(){
        let res = cabInvoiceGen.calAggregateFare('ride1');
        assert.equal(res,0);
    });
    it('check function for zero length arguments',function(){
        let rides=[];
        let res = cabInvoiceGen.calAggregateFare(rides);
        assert.equal(res,0);
    });
    it('check function for valid rides arguments',function(){
        let rides = [
            { distance: 5, time: 8, cat: 'normal' },
            { distance: 15, time: 20, cat: 'premium' },
            { distance: 30, time: 40, cat: 'normal' }];

        let res = cabInvoiceGen.calAggregateFare(rides);
        assert.notEqual(res,0);
    });

});
});

describe('Tests for function calFare - distance, time, category',function (){
    it('check function for no arguments',function(){
        let res = cabInvoiceGen.calculateFare();
        assert.equal(res,0);
    });

    it('check function for partial argumants',function(){
        let res = cabInvoiceGen.calculateFare(5);
        assert.equal(res,0);
    });

    it('check function for non number arguments',function(){
        let res = cabInvoiceGen.calculateFare('disance','t');
        assert.equal(res,0);
    });

    it('check function for negative arguments',function(){
        let res = cabInvoiceGen.calculateFare(-5,10);
        assert.equal(res,0);
    });

    it('check function for undefined category',function(){
        let res = cabInvoiceGen.calculateFare(30,50);
        assert.equal(res,355);
    });

    it('check function for category other than normal or premium',function(){
        let res = cabInvoiceGen.calculateFare();
        assert.equal(res,0);
    });

    it('check function for valid arguments',function(){
        let res = cabInvoiceGen.calculateFare(30,50,'normal');
        assert.equal(res,355);
    });    
});

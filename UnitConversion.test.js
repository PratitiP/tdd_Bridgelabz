const assert=require('assert');
const unitConvertor=require('./UnitConversionController');

describe('Tests for function feetToInch with feet number',function(){
    it('check function for null argument',function(){
        let res=unitConvertor.unitConversion();
        assert.equal(res,0);
    });

    it('check function for 0 feet argument',function(){
        let res=unitConvertor.unitConversion(0);
        assert.equal(res,0);
    });

    it('check function for NaN argument - type check',function(){
        let res=unitConvertor.unitConversion('s');
        assert.equal(res,0);
    });

    it('check function for negative argument',function(){
        let res=unitConvertor.unitConversion(-5);
        assert.equal(res,0);
    });

    it('check function - value check for quality',function(){
        let res=unitConvertor.unitConversion(12,'in','ft');
        assert.equal(res,1);
    });

    it('check function - value check for quality',function(){
        let res=unitConvertor.unitConversion(1,'ft','in');
        assert.equal(res,12);
    });

    it('check function for undefined units',function(){
        let res=unitConvertor.unitConversion(1);
        assert.equal(res,0);
    });
});


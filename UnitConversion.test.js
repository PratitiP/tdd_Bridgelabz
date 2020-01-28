const assert=require('assert');
const unitConvertor=require('./UnitConversionController');

describe('Tests for function feetToInch with feet number',function(){
    it('check function for null argument',function(){
        let res=unitConvertor.feetToInchConversion();
        assert.equal(res,0);
    });

    it('check function for 0 feet argument',function(){
        let res=unitConvertor.feetToInchConversion(0);
        assert.equal(res,0);
    });

    it('check function for NaN argument - type check',function(){
        let res=unitConvertor.feetToInchConversion('s');
        assert.equal(res,0);
    });

});

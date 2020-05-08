var assert = require('assert');
var javascriptFunctions = require('../javascriptFunctions');
var OctaConverter = require('../OctalConverter');

describe('givenTwoIntergersWhenSumThenSucess()', function () {
    it('sum(1,2) = 3', function () {

        //Given
        var a = 1;
        var b = 2;
        var expectedResult = 3;

        //When
        var actualResult  = javascriptFunctions.sum(a,b);
        
        //Then
        assert.equal(expectedResult, actualResult);

    });
});

describe('givenDecimalToTranformToOcta()', function () {
    it('Oct(1) = 1', function () {

        var decimal = 1;
        var expectedResult = [1];
        
        //se guarda el array
        var actualResult  = OctaConverter.Oct(decimal);
    
        //Then
        assert.deepEqual(expectedResult, actualResult);
    });
    
    it('Oct(2) = 2', function () {

        var decimal = 2
        var expectedResult = [2];
        
        //se guarda el array
        var actualResult  = OctaConverter.Oct(decimal);
        
        //Then
        assert.deepEqual(expectedResult, actualResult);
    });

    it('Oct(8) = 10', function () {

        var decimal = 8;
        var expectedResult = [1, 0];
        
        //se guarda el array
        var actualResult  = OctaConverter.Oct(decimal);
        
        //Then
        assert.deepEqual(expectedResult, actualResult);
    });

    it('Oct(95) = 137', function () {

        var decimal = 95;
        var expectedResult = [1, 3, 7];
        
        //se guarda el array
        var actualResult  = OctaConverter.Oct(decimal);
        
        //Then
        assert.deepEqual(expectedResult, actualResult);
    });

    it('Oct(2048) = 4000', function () {

        var decimal = 2048;
        var expectedResult = [4, 0, 0, 0];
        
        //se guarda el array
        var actualResult  = OctaConverter.Oct(decimal);
        
        //Then
        assert.deepEqual(expectedResult, actualResult);
    });

});

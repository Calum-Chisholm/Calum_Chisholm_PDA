var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

 it('adds 1 and 4 to get 5', function(){
   let total = 1;
   total = calculator.add(4);
   return total;
   assert.equal(total, 5);
 });

 it('subtracts 4 from 7 to get 3', function(){
   let total = 7;
   total = calculator.subtract(4);
   return total;
   assert.equal(total, 3);
 });

 it('multiplies 3 and 5 to get 15', function(){
   let total = 3;
   total = calculator.multiply(5);
   return total;
   assert.equal(total, 15);
 });

 it('divides 21 by 7 to get 3', function(){
   let total = 21;
   total = calculator.divide(7);
   return total;
   assert.equal(total, 3);
 });

 it('concatenate multiple number button clicks', function(){
   let total = calculator.numberClick(5);
   calculator.numberClick(4);
   return total;
   assert.equal(total, 54);
 });

 it('chain multiple operations together', function(){
   let total = calculator.numberClick(5);
   calculator.operatorClick('+');
   calculator.numberClick(1);
   calculator.operatorClick('-');
   calculator.numberClick(4);
   return total;
   assert.equal(total, 2);
 })

 it('clear the running total without affecting the calculation', function(){
   let total = calculator.numberClick(5);
   calculator.operatorClick('+');
   calculator.numberClick(1);
   calculator.clearClick();
   calculator.numberClick(5);
   return total;
   assert.equal(total, 10);
 })

});

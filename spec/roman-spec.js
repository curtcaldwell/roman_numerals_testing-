import { Roman } from './../src/roman.js';
describe('Roman', function() {

  it('should test whether a number is > 0 and < 4000', function() {
    var roman = new Roman(4000);
    expect(roman.checkNumber()).toEqual("Please enter number between 1-3999");
  });
  it('should return M if inputed value = 1000', function() {
    var roman = new Roman(1000);
    expect(roman.checkForM()).toEqual('M');
  });
});

export function Roman(number){
  this.number = number;
}
Roman.prototype.checkNumber = function() {
  if (this.number > 3999 || this.number < 1) {
    return "Please enter number between 1-3999";
  }
};
Roman.prototype.checkForM = function() {
  if (this.number === 1000) {
    return "M";
  }
};

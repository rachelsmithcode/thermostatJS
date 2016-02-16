var ScriptBuzz = function(){};

ScriptBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

ScriptBuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

ScriptBuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

ScriptBuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

ScriptBuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)){
    return "ScriptBuzz";
  }
  if (this.isDivisibleByFive(number)){
    return "Buzz";
  }
  if (this.isDivisibleByThree(number)){
    return "Script";
  }
};

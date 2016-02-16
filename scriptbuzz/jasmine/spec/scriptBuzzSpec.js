describe('scriptBuzz', function() {
  var scriptBuzz;

  beforeEach(function(){
    scriptBuzz = new ScriptBuzz();
  });

  describe('should return true if the number is', function() {
    it('divisble by 15', function(){
      expect(scriptBuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('should return false if the number is NOT', function() {
    it('divisible by 15', function(){
      expect(scriptBuzz.isDivisibleByFifteen(3)).toBe(false);
    });
  });

  describe('should return true if the number is', function() {
    it('divisble by 5', function(){
      expect(scriptBuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('should return false if the number is NOT', function() {
    it('divisible by 5', function(){
      expect(scriptBuzz.isDivisibleByFive(3)).toBe(false);
    });
  });

  describe('should return true if the number is', function() {
    it('divisble by 3', function(){
      expect(scriptBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('should return false if the number is NOT', function() {
    it('divisible by 3', function(){
      expect(scriptBuzz.isDivisibleByThree(5)).toBe(false);
    });
  });

  describe('when playing, says', function(){
    it('"ScriptBuzz" when a number is divisible by 15', function(){
      expect(scriptBuzz.says(15)).toEqual("ScriptBuzz");
    });
  });
  describe('when playing, says', function(){
    it('"Buzz" when a number is divisible by 5', function(){
      expect(scriptBuzz.says(5)).toEqual("Buzz");
    });
  });
  describe('when playing, says', function(){
    it('"Script" when a number is divisible by 3', function(){
      expect(scriptBuzz.says(3)).toEqual("Script");
    });
  });
});

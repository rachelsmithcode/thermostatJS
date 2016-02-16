describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });


  it('should initialize at 20 degrees celcius', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should increase the temperature when the up button is pressed', function() {
    thermostat.up();
    expect(thermostat.temperature).toBeGreaterThan(20);
  });

  it('should decrease the temperature when the down button is pressed', function() {
    thermostat.down();
    expect(thermostat.temperature).toBeLessThan(20);
  });

  it('it throws an error if an attempt is made to lower the temperature to below 10 degrees', function(){
    for (var i = 0;  i < (thermostat.minTemperature + 1); i++ ) {
      thermostat.down();
    }
    expect( function(){thermostat.down();} ).toThrow(new Error("Brrr, are you crazy?! Temperature cannot go below 10 degrees!"))
  });

  it('it throws an error if an attempt is made to raise the temperature to above the maximum temperature', function(){
    for (var i = 20;  i < (thermostat.maxTemperature + 1); i++ ) {
      thermostat.up();
    }
    expect( function(){thermostat.up();} ).toThrow(new Error("Phew, are you trying to roast us?! Temperature can't go that high!"))
  });

  it('starts with powersaving mode on', function() {
    expect(thermostat.powersaving).toBe(true);
  });

  it('allows powersaving mode to be turned off', function() {
    thermostat.powersavingOff();
    expect(thermostat.powersaving).toBe(false);
  });

  it('allows powersaving mode to be turned on again', function() {
    thermostat.powersavingOff();
    thermostat.powersavingOn();
    expect(thermostat.powersaving).toBe(true);
  });

  it('sets max temperature to 25 if powersaving mode is turned on', function() {
    expect(thermostat.maxTemperature).toBe(25);
  });

  it('sets max temperature to 32 if powersaving mode is turned off', function() {
    thermostat.powersavingOff();
    expect(thermostat.maxTemperature).toBe(32);
  });

  it('resets the temperature to 20 if rest is clicked', function() {
    thermostat.up();
    thermostat.resetTemp();
    expect(thermostat.temperature).toBe(20);
  });

  it('starts with the colour set to yellow', function() {
    expect(thermostat.colour).toEqual('yellow');
  });

  it('sets the colour to green when the temperature is under 18', function() {
    for (var i = 0;  i < 4 ; i++ ) {
      thermostat.down();
    }
    expect(thermostat.colour).toEqual('green');
  });

  it('sets the colour to red when the temperature is over 25', function() {
    for (var i = 0;  i < 6 ; i++ ) {
      thermostat.up();
    }
    expect(thermostat.colour).toEqual('red');
  });

  it('resets the colour to yellow when the temperature is between 18 and 25 degrees', function() {
    for (var i = 0;  i < 4 ; i++ ) {
      thermostat.down();
    }
    thermostat.resetTemp();
    expect(thermostat.colour).toEqual('yellow');
  });


});

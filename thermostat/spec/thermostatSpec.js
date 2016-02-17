describe('Thermostat', function (){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat ();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature when the up button is pressed', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases the temperature when the down button is pressed', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('returns an error when the temperature reaches the minimum', function(){
    for (var i = 0; i < 11; i++ ) {
      thermostat.down();
    }
    expect( function() {thermostat.down();} ).toThrow(new Error("Man, I could squeeze a lemon on my nipples it's that cold!"))
  });
  it('has a power saving mode which can be turned on', function(){
    thermostat.powerSavingModeOff();
    thermostat.powerSavingModeOn();
    expect(thermostat.powerSavingMode).toEqual(true);
  });
  it('has a power saving mode which can be turned off', function(){
    thermostat.powerSavingModeOff();
    expect(thermostat.powerSavingMode).toEqual(false);
  });
  it('has a maximum temperature of 25 in power saving mode', function(){
    thermostat.powerSavingModeOff();
    thermostat.powerSavingModeOn();
    expect(thermostat.maxTemperature).toEqual(25);
  });
  it('cannot have a temperature above 25 when in power saving mode', function(){
    thermostat.powerSavingModeOff();
    thermostat.powerSavingModeOn();
    thermostat.temperature = 25;
    expect( function() {thermostat.up();} ).toThrow(new Error("Jeez Louise, I feel like a turkey at Thanksgiving it's that hot"))
  });
  it('has a maximum temperature of 32 when power saving mode is off', function(){
    thermostat.powerSavingModeOff();
    expect(thermostat.maxTemperature).toEqual(32);
  });
  it('cannot have a temperature above 32 when power saving mode is off', function(){
    thermostat.powerSavingModeOff();
    thermostat.temperature = 32;
    expect( function() {thermostat.up();} ).toThrow(new Error("HOLY MOLY IS IT NOT HOT ENOUGH FOR YOU IN HERE!!!"))
  });
  it('has power saving mode on by default', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('can be reset to 20 degrees using the reset button', function(){
    thermostat.up()
    thermostat.resetButton();
    expect(thermostat.temperature).toEqual(20);
  });

  it('colours the display as green for temperatures under 18', function(){
    for (var i = 0; i <= 3; i++) {
      thermostat.down();
    }
    expect(thermostat.displayColour).toEqual("Green");
  });

  it('colours the display as yellow for temperatures under 25 but greater than 18', function(){
    expect(thermostat.displayColour).toEqual("Yellow");
  });

  it('colours the display as red for temperatures over 25', function(){
    thermostat.powerSavingModeOff();
    for (var i = 0; i <= 5; i++) {
      thermostat.up()
    }
    expect(thermostat.displayColour).toEqual("Red");
  });

});

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature when the up button is pressed', function(){
    thermostat.up();
    expect(thermostat.temperature).toBeGreaterThan(20);
  });

  it('decreases the temperature when the down button is pressed', function(){
    thermostat.down();
    expect(thermostat.temperature).toBeLessThan(20);
  });

  it('returns an error when the temperature reaches the minimum', function(){
    for (var i = 0; i < 11; i++ ) {
      thermostat.down();
    }
    expect( function() {thermostat.down();} ).toThrow(new Error("Man, I could squeeze a lemon on my nipples it's that cold!"))
  });
});

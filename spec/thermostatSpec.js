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

});

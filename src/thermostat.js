var _START_TEMPERATURE = 20;

function Thermostat() {
  this.temperature = _START_TEMPERATURE;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

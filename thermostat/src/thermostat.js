'use strict';

var _START_TEMPERATURE = 20;
var _MIN_TEMPERATURE = 10;

function Thermostat(){
  this.temperature = _START_TEMPERATURE;
};

Thermostat.prototype.up = function(){
 this.temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this.temperature < _MIN_TEMPERATURE) {
    throw new Error("Man, I could squeeze a lemon on my nipples it's that cold!")
  } else {
    this.temperature -= 1
  };
};

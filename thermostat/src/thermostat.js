'use strict';

var _START_TEMPERATURE = 20;
var _MIN_TEMPERATURE = 10;
var _MAX_TEMPERATURE_OFF = 32;
var _MAX_TEMPERATURE_ON = 25;

function Thermostat(){
  this.temperature = _START_TEMPERATURE;
  this.powerSavingMode = true;
  this.maxTemperature = _MAX_TEMPERATURE_ON;
  this.displayColour = "Yellow";
  this.changeColour();
};

Thermostat.prototype.up = function(){
  if (this.temperature === this.maxTemperature) {
    if (this.powerSavingMode === true) {
      throw new Error("Jeez Louise, I feel like a turkey at Thanksgiving it's that hot")
    } else {
      throw new Error("HOLY MOLY IS IT NOT HOT ENOUGH FOR YOU IN HERE!!!")
    }
  }
 this.temperature += 1;
 this.changeColour();
};

Thermostat.prototype.down = function(){
  if (this.temperature === _MIN_TEMPERATURE) {
    throw new Error("Man, I could squeeze a lemon on my nipples it's that cold!")
  }
  this.temperature -= 1;
  this.changeColour();
};

Thermostat.prototype.powerSavingModeOn = function(){
  this.powerSavingMode = true;
  this.maxTemperature = _MAX_TEMPERATURE_ON;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSavingMode = false;
  this.maxTemperature = _MAX_TEMPERATURE_OFF;
};

Thermostat.prototype.resetButton = function () {
  this.temperature = 20
};

Thermostat.prototype.changeColour = function () {
  if (this.temperature < 18) {
    this.displayColour = "Green";
    document.body.style.backgroundColor = "green";

  } else if (this.temperature >= 18 && this.temperature < 25) {
    this.displayColour = "Yellow";
    document.body.style.backgroundColor = "yellow";

  } else {
    this.displayColour = "Red";
    document.body.style.backgroundColor = "red";

  };

};

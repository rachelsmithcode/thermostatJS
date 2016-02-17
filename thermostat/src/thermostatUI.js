$( document ).ready(function() {

  var thermostat = new Thermostat;

  $('#temp').text(thermostat.temperature);

  $('#increase-temp').click(function(){
    thermostat.up();
    $('#temp').text(thermostat.temperature);
  });

  $('#decrease-temp').click(function(){
    thermostat.down();
    $('#temp').text(thermostat.temperature);
  });

  $('#psm-on').click(function(){
    thermostat.powerSavingModeOn();
    $('#psm').text("On");
  });

  $('#psm-off').click(function(){
    thermostat.powerSavingModeOff();
    $('#psm').text("Off");
  });

  $('#reset-temp').click(function(){
    thermostat.resetButton();
    $('#temp').text(thermostat.temperature);
  });


});

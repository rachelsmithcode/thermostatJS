$( document ).ready(function() {

  var thermostat = new Thermostat;

  $pscolour = function() {
    if (thermostat.displayColour === 'Yellow') {
    color = 'yellow';
    } else if (thermostat.displayColour === 'Green') {
    color =  'green';
    } else {
    color =  'red';
    }
    $('body').css({
      backgroundColor: color
    });
  }
  
  $pscolour();

  $('#temp').text(thermostat.temperature);

  $('#increase-temp').click(function(){
    thermostat.up();
    $pscolour();
    $('#temp').text(thermostat.temperature);
  });

  $('#decrease-temp').click(function(){
    thermostat.down();
    $pscolour();
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

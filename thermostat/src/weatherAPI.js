$( document ).ready(function() {

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var chooseCity = $('#user-input').val();

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + chooseCity + '&appid=b09cb4823fc8dc79315bbb8fc48b9980&units=metric', function(report) {
      $('#city').text(report.name);
      $('#city-temperature').text(report.temp);
      $('#city-weather').text(report.weather[0].description);
    });

  });

});

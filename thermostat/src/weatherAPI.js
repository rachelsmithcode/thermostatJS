$( document ).ready(function() {

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var chooseCity = $('#user-input').val();
    // or could do var chooseCity = $.this.serialize will give anything in the form as a string. If you have
    // multiple text feilds you get an array that you can itterate through.

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + chooseCity + '&appid=b09cb4823fc8dc79315bbb8fc48b9980&units=metric', function(report) {
      $('#city').text(report.name);
      $('#city-temperature').text(report.main.temp);
      $('#city-weather').text(report.weather[0].description);
      console.log(report)
      console.log(report.temp)
      console.log(report.weather[0])
    });

  });

});

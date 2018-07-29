// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init Weather object
const weather = new Weather(weatherLocation.city);
// Init UI 
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  // Change Location
  weather.changeLocation(city);

  // Set Location in local storage
  storage.setLocationData(city);


  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});



function getWeather() {
  weather.getWeather()
      .then(results => {
          ui.paint(results);
          // console.log(results);
      })
      .catch(err => console.log(err));
}
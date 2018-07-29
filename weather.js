class Weather {
  constructor (city, country) {
    this.apiKey = 'fd2f869b75e93e976ac6b0752879a94a';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather () {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

    const responsData = await response.json();

    return responsData
    console.log(responseData);
  }

  // Change weather Location
  changeLocation(city, country) {
    this.city = city;
  }
}
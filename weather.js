class Weather {
  constructor(city, state) {
    this.apiKey = '91c52c8ac11203f488de0959012db7da';
    this.city =city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);



    const responseData = await response.json();

    return responseData;
 
  } 

  //Change weather location
  changeLocation(city,state) {
    this.city = city;
    this.state = state;
  }
}
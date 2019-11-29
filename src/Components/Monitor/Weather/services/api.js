const apiUrl = 'http://api.openweathermap.org/data/2.5/';

const Api = {
  get5daysForecast(city, country, apiKey) {
    return fetch(apiUrl + 'forecast?q=' + city + ',' + country + '&units=metric&appid=' + apiKey)
      .then((response) => {
        return response.json();
      });
  }
}

export default Api;

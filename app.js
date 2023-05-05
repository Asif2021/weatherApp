const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

const getWeather = async (city) => {
  if (search.value == "") {
    weather.innerHTML = `<h1> Please type city name </h1>`;
  } else {
    weather.innerHTML = `<h1> Loading ... </h1>`;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  console.log(data.name);
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City not found </h2>`;
    return;
  } else {
    weather.innerHTML = `<div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
        <h2> ${data.name} </h2>
        <h2> ${data.main.temp} ©</h2>
        <h4> ${data.weather[0].main} </h4>
        </div>`;
  }
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  getWeather(search.value);
  search.value = "";
});

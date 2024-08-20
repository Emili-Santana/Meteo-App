// changing H1
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

// time and date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

//Current Temperature
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let description = response.data.condition.description;
  let icon = response.data.condition.icon_url;
  let humidity = Math.round(response.data.temperature.humidity);
  let wind = Math.round(response.data.wind.speed);
  let city = response.data.city;

  let valueElement = document.querySelector("#value");
  valueElement.innerHTML = `${temperature}`;
  console.log(valueElement);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${description}`;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}km/h`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value.trim();

  let apiKey = "co1932ee5cba3475f06de51eb085140t";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

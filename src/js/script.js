import "../scss/main.scss"
import cloudyIcon from "../assets/svg_icons/cloudy.svg";
import rainIcon from '../assets/svg_icons/raindrop.svg';
import thunderIcon from "../assets/svg_icons/thunderstorms.svg";
import drizzleIcon from "../assets/svg_icons/drizzle.svg";
import snowIcon from "../assets/svg_icons/snow.svg";
import clearDayIcon from "../assets/svg_icons/clear-day.svg";
// selectors
const weatherList = document.querySelector("#weatherList");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const weeklyWeatherList = document.querySelector("#weatherList");
const weatherTemplate = document.querySelector("#weatherTemplate").content;
// global variables
const API = "https://api.openweathermap.org/data/2.5/weather";
const weatherData = [
 {"cod":"200","message":0,"cnt":40,"list":[{"dt":1670101200,"main":{"temp":-0.64,"feels_like":-3.07,"temp_min":-0.64,"temp_max":0.14,"pressure":1029,"sea_level":1029,"grnd_level":978,"humidity":70,"temp_kf":-0.78},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.9,"deg":325,"gust":2.16},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-12-03 21:00:00"},{"dt":1670112000,"main":{"temp":-0.46,"feels_like":-0.46,"temp_min":-0.46,"temp_max":-0.18,"pressure":1030,"sea_level":1030,"grnd_level":978,"humidity":56,"temp_kf":-0.28},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.3,"deg":309,"gust":1.4},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2022-12-04 00:00:00"},{"dt":1670122800,"main":{"temp":-0.39,"feels_like":-0.39,"temp_min":-0.39,"temp_max":-0.39,"pressure":1032,"sea_level":1032,"grnd_level":978,"humidity":41,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":1.19,"deg":274,"gust":1.42},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-12-04 03:00:00"},{"dt":1670133600,"main":{"temp":1.16,"feels_like":-0.59,"temp_min":1.16,"temp_max":1.16,"pressure":1032,"sea_level":1032,"grnd_level":979,"humidity":36,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":1.61,"deg":269,"gust":1.39},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-12-04 06:00:00"},{"dt":1670144400,"main":{"temp":2.02,"feels_like":0.56,"temp_min":2.02,"temp_max":2.02,"pressure":1031,"sea_level":1031,"grnd_level":978,"humidity":34,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":1.49,"deg":257,"gust":1.17},"visibility":10000,"pop":0.27,"sys":{"pod":"d"},"dt_txt":"2022-12-04 09:00:00"},{"dt":1670155200,"main":{"temp":1.08,"feels_like":-1.15,"temp_min":1.08,"temp_max":1.08,"pressure":1031,"sea_level":1031,"grnd_level":978,"humidity":46,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.96,"deg":214,"gust":2.03},"visibility":9853,"pop":0.34,"snow":{"3h":0.27},"sys":{"pod":"n"},"dt_txt":"2022-12-04 12:00:00"},{"dt":1670166000,"main":{"temp":0.22,"feels_like":-2.01,"temp_min":0.22,"temp_max":0.22,"pressure":1032,"sea_level":1032,"grnd_level":978,"humidity":50,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.85,"deg":233,"gust":2.37},"visibility":10000,"pop":0.33,"sys":{"pod":"n"},"dt_txt":"2022-12-04 15:00:00"},{"dt":1670176800,"main":{"temp":-0.1,"feels_like":-1.85,"temp_min":-0.1,"temp_max":-0.1,"pressure":1032,"sea_level":1032,"grnd_level":979,"humidity":49,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.49,"deg":240,"gust":1.88},"visibility":10000,"pop":0.33,"sys":{"pod":"n"},"dt_txt":"2022-12-04 18:00:00"},{"dt":1670187600,"main":{"temp":-0.64,"feels_like":-0.64,"temp_min":-0.64,"temp_max":-0.64,"pressure":1032,"sea_level":1032,"grnd_level":979,"humidity":57,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.09,"deg":224,"gust":1.42},"visibility":10000,"pop":0.61,"snow":{"3h":0.11},"sys":{"pod":"n"},"dt_txt":"2022-12-04 21:00:00"},{"dt":1670198400,"main":{"temp":-2.4,"feels_like":-4.88,"temp_min":-2.4,"temp_max":-2.4,"pressure":1033,"sea_level":1033,"grnd_level":979,"humidity":88,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.74,"deg":276,"gust":1.71},"visibility":334,"pop":0.74,"snow":{"3h":0.65},"sys":{"pod":"n"},"dt_txt":"2022-12-05 00:00:00"},{"dt":1670209200,"main":{"temp":-2.8,"feels_like":-5.81,"temp_min":-2.8,"temp_max":-2.8,"pressure":1034,"sea_level":1034,"grnd_level":980,"humidity":93,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":2.07,"deg":301,"gust":2.28},"visibility":189,"pop":0.9,"snow":{"3h":2.34},"sys":{"pod":"d"},"dt_txt":"2022-12-05 03:00:00"},{"dt":1670220000,"main":{"temp":-2.62,"feels_like":-5.53,"temp_min":-2.62,"temp_max":-2.62,"pressure":1035,"sea_level":1035,"grnd_level":981,"humidity":93,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":2.02,"deg":291,"gust":1.86},"visibility":185,"pop":0.94,"snow":{"3h":2.28},"sys":{"pod":"d"},"dt_txt":"2022-12-05 06:00:00"},{"dt":1670230800,"main":{"temp":-2.24,"feels_like":-4.93,"temp_min":-2.24,"temp_max":-2.24,"pressure":1035,"sea_level":1035,"grnd_level":981,"humidity":94,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.9,"deg":310,"gust":1.82},"visibility":212,"pop":0.94,"snow":{"3h":1.84},"sys":{"pod":"d"},"dt_txt":"2022-12-05 09:00:00"},{"dt":1670241600,"main":{"temp":-2.29,"feels_like":-4.21,"temp_min":-2.29,"temp_max":-2.29,"pressure":1035,"sea_level":1035,"grnd_level":981,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.41,"deg":315,"gust":1.58},"visibility":358,"pop":0.86,"snow":{"3h":1.3},"sys":{"pod":"n"},"dt_txt":"2022-12-05 12:00:00"},{"dt":1670252400,"main":{"temp":-2.55,"feels_like":-2.55,"temp_min":-2.55,"temp_max":-2.55,"pressure":1035,"sea_level":1035,"grnd_level":981,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":99},"wind":{"speed":0.91,"deg":324,"gust":0.91},"visibility":1571,"pop":0.61,"snow":{"3h":0.56},"sys":{"pod":"n"},"dt_txt":"2022-12-05 15:00:00"},{"dt":1670263200,"main":{"temp":-2.9,"feels_like":-2.9,"temp_min":-2.9,"temp_max":-2.9,"pressure":1034,"sea_level":1034,"grnd_level":980,"humidity":95,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":99},"wind":{"speed":1.15,"deg":348,"gust":1.39},"visibility":3084,"pop":0.5,"snow":{"3h":0.21},"sys":{"pod":"n"},"dt_txt":"2022-12-05 18:00:00"},{"dt":1670274000,"main":{"temp":-2.42,"feels_like":-2.42,"temp_min":-2.42,"temp_max":-2.42,"pressure":1033,"sea_level":1033,"grnd_level":979,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.14,"deg":357,"gust":1.27},"visibility":1238,"pop":0.57,"snow":{"3h":0.25},"sys":{"pod":"n"},"dt_txt":"2022-12-05 21:00:00"},{"dt":1670284800,"main":{"temp":-2.08,"feels_like":-2.08,"temp_min":-2.08,"temp_max":-2.08,"pressure":1032,"sea_level":1032,"grnd_level":978,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.11,"deg":321,"gust":1.31},"visibility":578,"pop":0.65,"snow":{"3h":1.24},"sys":{"pod":"n"},"dt_txt":"2022-12-06 00:00:00"},{"dt":1670295600,"main":{"temp":-2.08,"feels_like":-2.08,"temp_min":-2.08,"temp_max":-2.08,"pressure":1032,"sea_level":1032,"grnd_level":979,"humidity":97,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":0.96,"deg":285,"gust":1.05},"visibility":195,"pop":0.77,"snow":{"3h":1.65},"sys":{"pod":"d"},"dt_txt":"2022-12-06 03:00:00"},{"dt":1670306400,"main":{"temp":-1.27,"feels_like":-1.27,"temp_min":-1.27,"temp_max":-1.27,"pressure":1033,"sea_level":1033,"grnd_level":979,"humidity":98,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.2,"deg":248,"gust":1.12},"visibility":182,"pop":0.86,"snow":{"3h":1.35},"sys":{"pod":"d"},"dt_txt":"2022-12-06 06:00:00"},{"dt":1670317200,"main":{"temp":-0.64,"feels_like":-0.64,"temp_min":-0.64,"temp_max":-0.64,"pressure":1032,"sea_level":1032,"grnd_level":978,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":0.95,"deg":273,"gust":0.75},"visibility":167,"pop":0.86,"snow":{"3h":1.06},"sys":{"pod":"d"},"dt_txt":"2022-12-06 09:00:00"},{"dt":1670328000,"main":{"temp":-0.61,"feels_like":-0.61,"temp_min":-0.61,"temp_max":-0.61,"pressure":1032,"sea_level":1032,"grnd_level":979,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":0.75,"deg":308,"gust":0.77},"visibility":293,"pop":0.86,"snow":{"3h":1.18},"sys":{"pod":"n"},"dt_txt":"2022-12-06 12:00:00"},{"dt":1670338800,"main":{"temp":-0.96,"feels_like":-0.96,"temp_min":-0.96,"temp_max":-0.96,"pressure":1033,"sea_level":1033,"grnd_level":979,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":0.53,"deg":343,"gust":0.48},"visibility":1437,"pop":0.53,"snow":{"3h":0.59},"sys":{"pod":"n"},"dt_txt":"2022-12-06 15:00:00"},{"dt":1670349600,"main":{"temp":-2.01,"feels_like":-2.01,"temp_min":-2.01,"temp_max":-2.01,"pressure":1032,"sea_level":1032,"grnd_level":978,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":0.59,"deg":344,"gust":0.63},"visibility":10000,"pop":0.34,"snow":{"3h":0.11},"sys":{"pod":"n"},"dt_txt":"2022-12-06 18:00:00"},{"dt":1670360400,"main":{"temp":-1.83,"feels_like":-1.83,"temp_min":-1.83,"temp_max":-1.83,"pressure":1031,"sea_level":1031,"grnd_level":978,"humidity":98,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":0.64,"deg":13,"gust":0.64},"visibility":3516,"pop":0.04,"sys":{"pod":"n"},"dt_txt":"2022-12-06 21:00:00"},{"dt":1670371200,"main":{"temp":-0.96,"feels_like":-0.96,"temp_min":-0.96,"temp_max":-0.96,"pressure":1031,"sea_level":1031,"grnd_level":977,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":0.44,"deg":293,"gust":0.74},"visibility":457,"pop":0.28,"snow":{"3h":0.25},"sys":{"pod":"n"},"dt_txt":"2022-12-07 00:00:00"},{"dt":1670382000,"main":{"temp":-0.49,"feels_like":-0.49,"temp_min":-0.49,"temp_max":-0.49,"pressure":1031,"sea_level":1031,"grnd_level":978,"humidity":98,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.15,"deg":326,"gust":1.62},"visibility":1009,"pop":0.49,"snow":{"3h":0.59},"sys":{"pod":"d"},"dt_txt":"2022-12-07 03:00:00"},{"dt":1670392800,"main":{"temp":0.04,"feels_like":0.04,"temp_min":0.04,"temp_max":0.04,"pressure":1032,"sea_level":1032,"grnd_level":978,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.27,"deg":352,"gust":1.64},"visibility":55,"pop":0.96,"snow":{"3h":1.29},"sys":{"pod":"d"},"dt_txt":"2022-12-07 06:00:00"},{"dt":1670403600,"main":{"temp":0.16,"feels_like":-1.79,"temp_min":0.16,"temp_max":0.16,"pressure":1031,"sea_level":1031,"grnd_level":977,"humidity":100,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.64,"deg":339,"gust":2.38},"visibility":30,"pop":1,"snow":{"3h":2.51},"sys":{"pod":"d"},"dt_txt":"2022-12-07 09:00:00"},{"dt":1670414400,"main":{"temp":0.13,"feels_like":0.13,"temp_min":0.13,"temp_max":0.13,"pressure":1031,"sea_level":1031,"grnd_level":978,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.33,"deg":352,"gust":2.26},"visibility":26,"pop":1,"snow":{"3h":1.42},"sys":{"pod":"n"},"dt_txt":"2022-12-07 12:00:00"},{"dt":1670425200,"main":{"temp":0.16,"feels_like":-1.44,"temp_min":0.16,"temp_max":0.16,"pressure":1031,"sea_level":1031,"grnd_level":978,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.42,"deg":348,"gust":2.2},"visibility":29,"pop":0.95,"snow":{"3h":0.86},"sys":{"pod":"n"},"dt_txt":"2022-12-07 15:00:00"},{"dt":1670436000,"main":{"temp":-0.07,"feels_like":-2.02,"temp_min":-0.07,"temp_max":-0.07,"pressure":1031,"sea_level":1031,"grnd_level":977,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.62,"deg":318,"gust":2.02},"visibility":808,"pop":0.81,"snow":{"3h":0.17},"sys":{"pod":"n"},"dt_txt":"2022-12-07 18:00:00"},{"dt":1670446800,"main":{"temp":-0.3,"feels_like":-1.86,"temp_min":-0.3,"temp_max":-0.3,"pressure":1030,"sea_level":1030,"grnd_level":977,"humidity":99,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.36,"deg":342,"gust":1.85},"visibility":3448,"pop":0.3,"sys":{"pod":"n"},"dt_txt":"2022-12-07 21:00:00"},{"dt":1670457600,"main":{"temp":-0.72,"feels_like":-2.59,"temp_min":-0.72,"temp_max":-0.72,"pressure":1031,"sea_level":1031,"grnd_level":977,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.51,"deg":317,"gust":2.1},"visibility":3473,"pop":0.27,"snow":{"3h":0.16},"sys":{"pod":"n"},"dt_txt":"2022-12-08 00:00:00"},{"dt":1670468400,"main":{"temp":-0.35,"feels_like":-0.35,"temp_min":-0.35,"temp_max":-0.35,"pressure":1031,"sea_level":1031,"grnd_level":978,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.24,"deg":326,"gust":1.7},"visibility":1680,"pop":0.31,"snow":{"3h":0.11},"sys":{"pod":"d"},"dt_txt":"2022-12-08 03:00:00"},{"dt":1670479200,"main":{"temp":0.22,"feels_like":-1.24,"temp_min":0.22,"temp_max":0.22,"pressure":1032,"sea_level":1032,"grnd_level":979,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.34,"deg":309,"gust":1.65},"visibility":1124,"pop":0.27,"snow":{"3h":0.16},"sys":{"pod":"d"},"dt_txt":"2022-12-08 06:00:00"},{"dt":1670490000,"main":{"temp":0.27,"feels_like":-1.66,"temp_min":0.27,"temp_max":0.27,"pressure":1031,"sea_level":1031,"grnd_level":978,"humidity":100,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.64,"deg":306,"gust":2.18},"visibility":267,"pop":0.69,"snow":{"3h":0.66},"sys":{"pod":"d"},"dt_txt":"2022-12-08 09:00:00"},{"dt":1670500800,"main":{"temp":-0.44,"feels_like":-3.2,"temp_min":-0.44,"temp_max":-0.44,"pressure":1032,"sea_level":1032,"grnd_level":978,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":2.19,"deg":310,"gust":3.14},"visibility":77,"pop":0.73,"snow":{"3h":1.1},"sys":{"pod":"n"},"dt_txt":"2022-12-08 12:00:00"},{"dt":1670511600,"main":{"temp":-0.98,"feels_like":-3.4,"temp_min":-0.98,"temp_max":-0.98,"pressure":1032,"sea_level":1032,"grnd_level":979,"humidity":98,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":1.85,"deg":303,"gust":2.45},"visibility":113,"pop":0.9,"snow":{"3h":1.4},"sys":{"pod":"n"},"dt_txt":"2022-12-08 15:00:00"},{"dt":1670522400,"main":{"temp":-1.52,"feels_like":-4.44,"temp_min":-1.52,"temp_max":-1.52,"pressure":1032,"sea_level":1032,"grnd_level":978,"humidity":98,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":2.17,"deg":297,"gust":2.81},"visibility":149,"pop":0.94,"snow":{"3h":1.05},"sys":{"pod":"n"},"dt_txt":"2022-12-08 18:00:00"}],"city":{"id":1512569,"name":"Tashkent","coord":{"lat":41.2646,"lon":69.2163},"country":"UZ","population":1978028,"timezone":18000,"sunrise":1670034674,"sunset":1670068485}}
];
async function makeRequest(url, params = {}) {
  try {
    const queryString = Object.entries(params).map(param => {
      return `${param[0]}=${param[1]}&appid=2300d429630058871993058db910a620`;
    }).join("&");
    const res = await fetch(`${url}?${queryString}`);
    return await res.json()
  } catch (error) {
    return error;
  }
}

async function getWeatherInfo(location = "tashkent") {
  const weatherInfo = await makeRequest(API, { q: location, units: "metric" });

  setDailyWeather(weatherInfo);
}

function setDailyWeather(dailyWeather) {
  // DOM Elements
  const dailyWeatherImg = document.querySelector("#dailyWeatherImg");
  const dailyWeatherType = document.querySelector("#dailyWeatherType");
  const dailyWeatherLocation = document.querySelector("#dailyWeatherLocation");
  const dailyWeatherLevel = document.querySelector("#dailyWeatherLevel");
  const dailyHumidity = document.querySelector("#dailyHumidity");
  const dailyAirPressure = document.querySelector("#dailyAirPressure");
  const dailyChanceOfRain = document.querySelector("#dailyChanceOfRain");

  // destructuring the weather data
  const { main, name, clouds, id, dt, wind, weather } = dailyWeather;
  const { temp, pressure, humidity } = main;
  const { speed } = wind;
  const weatherType = weather[0].description;
  dailyWeatherLevel.textContent = `${Math.round(temp)} C`;
  dailyWeatherType.textContent = weatherType;
  dailyWeatherLocation.textContent = name;
  dailyHumidity.textContent = `${humidity}%`;
  dailyAirPressure.textContent = `${pressure} PS`;

  dailyWeatherImg.src = getWeatherImage(id);
}

function getWeatherImage(weatherId) {
  if(weatherId >= 200 && weatherId <= 232) return thunderIcon;
  if(weatherId >= 300 && weatherId <= 321) return drizzleIcon;
  if(weatherId >= 500 && weatherId <= 531) return rainIcon;
  if(weatherId >= 600 && weatherId <= 631) return snowIcon;
  if(weatherId >= 700 && weatherId <= 781) return cloudyIcon;
  if(weatherId === 800) return clearDayIcon;
  return cloudyIcon;
}

function renderWeeklyWeather(weeklyWeather,weeklyWeatherList){
  const newFragment = new DocumentFragment();
  weeklyWeatherList.innerHTML = "";
  weeklyWeather.forEach(weatherItem => {
    const {dt,dt_txt,main,weather,wind} = weatherItem;
    const {speed} = wind;
    const {temp} = main;
    const weatherMain = weather[0].main;
    const weatherDescription = weather[0].description;
    const weatherTemplateClone = weatherTemplate.cloneNode(true).children[0];
    weatherTemplateClone.querySelector("#weatherTime").textContent = returnTime(dt_txt);
    weatherTemplateClone.querySelector("#weatherDay").textContent = getDay(dt_txt);
    weatherTemplateClone.querySelector("#weatherListLevel").textContent = `${Math.round(temp)} C`;
    weatherTemplateClone.querySelector("#weatherDescription").textContent = weatherDescription;
    weatherTemplateClone.dataset.date = dt_txt;
    newFragment.appendChild(weatherTemplateClone);
  });
  weeklyWeatherList.appendChild(newFragment);
}

async function getWeeklyWeather(location = "tashkent"){
  const weeklyWeather = await makeRequest("http://api.openweathermap.org/data/2.5/forecast",{
    q:location,
    units:"metric"
  });
  renderWeeklyWeather(weeklyWeather.list,weeklyWeatherList);
}

function getDay(date) {
  const weekdays = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",   
    4:"Thursday",
    5:"Friday",
    6:"Saturday" 
  }
  const currentDayNumber = new Date(date).getDay();
  return weekdays[currentDayNumber];
}

function returnTime(date){
  return date.split(" ")[1];
}

// events
searchForm.addEventListener("submit", e => {
  e.preventDefault();
  const searchInputValue = searchInput.value;
  getWeatherInfo(searchInputValue);
  getWeeklyWeather(searchInputValue);
});

getWeatherInfo();
renderWeeklyWeather(weatherData[0].list,weeklyWeatherList);
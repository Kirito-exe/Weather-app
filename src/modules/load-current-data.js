export default function loadData(data) {
  console.log(data);
  let info = document.querySelector("#current .info");
  let temp = info.querySelector("h2");
  let max = info.querySelector(".max");
  let min = info.querySelector(".min");
  let feels = info.querySelector(".feels");
  let perci = info.querySelector(".perci");
  let address = info.querySelector(".address");
  let descri = info.querySelector(".description");
  temp.textContent = `${data.currentConditions.temp}°C`;
  max.textContent = `Maximum temperature: ${data["days"]["0"]["tempmax"]}°C`;
  min.textContent = `Maximum temperature: ${data["days"]["0"]["tempmin"]}°C`;
  feels.textContent = `Feels like: ${data.currentConditions.feelslike}°C`;
  address.textContent = data["address"].toUpperCase();
  perci.textContent = `Percipitation chance: ${data.currentConditions.precipprob}`;
  descri.textContent = data.description;
}

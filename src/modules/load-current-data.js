export function loadData(data, tempUnit) {
  console.log(data);
  console.log(data.currentConditions.icon);
  let body = document.querySelector("body");
  let info = document.querySelector("#current .info");
  let temp = info.querySelector("h2");
  let max = info.querySelector(".max");
  let min = info.querySelector(".min");
  let feels = info.querySelector(".feels");
  let perci = info.querySelector(".perci");
  let address = info.querySelector(".address");
  let descri = info.querySelector(".description");
  temp.textContent = `${data.currentConditions.temp}°${tempUnit}`;
  max.textContent = `Maximum temperature: ${data["days"]["0"]["tempmax"]}°${tempUnit}`;
  min.textContent = `Maximum temperature: ${data["days"]["0"]["tempmin"]}°${tempUnit}`;
  feels.textContent = `Feels like: ${data.currentConditions.feelslike}°${tempUnit}`;
  address.textContent = data["address"].toUpperCase();
  perci.textContent = `Percipitation chance: ${data.currentConditions.precipprob} %`;
  descri.textContent = data.description;
  let img = document.querySelector("#current .image");
  import(`../assests/${data.currentConditions.icon}.png`)
    .then((result) => {
      img.style.backgroundImage = `url(${result.default})`;
    })
    .catch((error) => {
      console.log(error);
    });
  import(`../assests/${data.currentConditions.icon}-background.jpg`)
    .then((result) => {
      body.style.backgroundImage = `url(${result.default})`;
    })
    .catch((error) => {
      console.log(error);
    });
}
export function loadingControl() {
  let loading = document.querySelector("dialog");
  function showLoading() {
    loading.showModal();
  }
  function closeLoading() {
    loading.close();
  }
  return { showLoading, closeLoading };
}

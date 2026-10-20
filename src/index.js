import "./reset.css";
import "./style.css";
import weatherApi from "./modules/fetch-data.js";
import loadData from "./modules/load-current-data.js";

weatherApi("mumbai", "metric").then((result) => loadData(result));
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  let search = form.querySelector("input");
  weatherApi(search.value, "metric").then((result) => loadData(result));
  event.preventDefault();
});

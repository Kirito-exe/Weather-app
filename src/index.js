import "./reset.css";
import "./style.css";
import weatherApi from "./modules/fetch-data.js";
import { loadData } from "./modules/load-current-data.js";
import nextDays from "./modules/next-days.js";
import { populateStorage } from "./modules/webStorage.js";

(function () {
  let format = {
    temp: "C",
    unitGrp: "metric",
  };
  function screenControl(search) {
    weatherApi(search, format.unitGrp)
      .then((result) => {
        loadData(result, format.temp);
        return result;
      })
      .then((result) => {
        nextDays(result, format.temp);
      })
      .catch((error) => console.log(error));
  }
  screenControl("");
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let search = form.querySelector("input");
    populateStorage(search.value);
    screenControl(search.value);
    event.preventDefault();
  });
  let toggle = document.querySelector("#toggle");
  toggle.addEventListener("click", () => {
    if (format.temp === "C") {
      format.temp = "F";
      format.unitGrp = "us";
    } else {
      format.temp = "C";
      format.unitGrp = "metric";
    }
    screenControl("");
  });
})();

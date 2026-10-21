import { fetchStorage } from "./webStorage.js";
import { loadingControl } from "./load-current-data.js";
export default async function weatherApi(
  location = "Delhi",
  metric = "metric",
) {
  try {
    location = fetchStorage();
    let lc = loadingControl();
    lc.showLoading();
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${metric}&key=VETUQF9KQ43GREWQZ6EDY4FUP&contentType=json`,
    );
    const json = await response.json();
    lc.closeLoading();
    return json;
  } catch (error) {
    console.log("fetch error occured", error);
  }
}

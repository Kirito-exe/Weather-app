export default async function weatherApi(
  location = "Delhi",
  metric = "metric",
) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${metric}&key=VETUQF9KQ43GREWQZ6EDY4FUP&contentType=json`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("fetch error occured", error);
  }
}

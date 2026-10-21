import { format } from "date-fns";

export default function (data, tempUnit) {
  let container = document.querySelector(".prev-days");
  container.textContent = "";
  for (let i = 0; i < 5; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    const image = document.createElement("div");
    image.className = "image";
    const condition = document.createElement("div");
    condition.className = "condition";
    const date = document.createElement("div");
    date.className = "date";
    const temp = document.createElement("h2");
    let day = data.days[i];
    import(`../assests/${day.icon}.png`)
      .then((result) => {
        image.style.backgroundImage = `url(${result.default})`;
      })
      .catch((error) => console.log(error));
    temp.textContent = `${day.temp}°${tempUnit}`;
    condition.textContent = day.conditions;
    date.textContent = format(new Date(day.datetime), "do MMM yyyy");
    dayDiv.appendChild(image);
    dayDiv.appendChild(temp);
    dayDiv.appendChild(condition);
    dayDiv.appendChild(date);
    container.appendChild(dayDiv);
  }
}

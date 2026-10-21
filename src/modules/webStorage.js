function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function populateStorage(data) {
  if (storageAvailable("localStorage")) {
    localStorage.setItem("lastSearch", data);
  } else {
    console.log("local storage unavailable");
  }
}
export function fetchStorage() {
  if (localStorage.length === 0) {
    return "delhi";
  } else {
    return localStorage.getItem("lastSearch");
  }
}

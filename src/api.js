const url = "https://www.wecasa.fr/api/techtest/universe"

export const getUniverse = () => {
  return fetch(url)
  .then(function (response) {
    return response.json();
  })
  .catch(function () {
    console.log("error");
  });
}

export const sendBookingRequest = (payload) => {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function () {
      console.log("error");
    });
}
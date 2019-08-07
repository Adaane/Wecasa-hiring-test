const API_URL = "https://www.wecasa.fr/api/techtest/universe"
const API_MAP_KEY = "AIzaSyBVB4oxTZoBpcvt3NbYIHQVLqhAmfuaioE"

export const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_MAP_KEY}&libraries=places`

const opt = (payload) => ({
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})


export const getUniverse = () => {
  return fetch(API_URL)
  .then(function (response) {
    return response.json();
  })
    .catch(function (rej) {
      console.log("rej", rej);
    throw new Error('Something went wrong on api server!');
  });
}

export const sendBookingRequest = (payload) => {
  return fetch(API_URL, opt(payload))
    .then(response => {
      return response.json()
    })
    .catch(function (rej) {
      console.log('rej', rej)
      throw new Error('Something went wrong on api server!');
    });
}
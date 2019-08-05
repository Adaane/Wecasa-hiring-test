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
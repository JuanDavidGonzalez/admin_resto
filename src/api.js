const LOCAL_URL = "http://localhost:3000";
// const EXTERNAL_URL = "https://kqxty15mpg.execute-api.us-east-1.amazonaws.com";

function getProducts() {
  return fetch(`${LOCAL_URL}/products`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getBuyers() {
  return fetch(`${LOCAL_URL}/buyers`)
    .then((res) => res.json())
    .then((res) => res);
}

function loadBuyers(date) {
  return fetch(`${LOCAL_URL}/load/buyers?date=${date}`)
    .then((res) => res.json())
    .then((res) => res);
}

export default {
  getProducts,
  getBuyers,
  loadBuyers,
};

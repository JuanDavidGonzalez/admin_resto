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
    .then((res) => res.data);
}

function getBuyerDetail(id) {
  return fetch(`${LOCAL_URL}/buyer?id=${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function loadData(date, type) {
  return fetch(`${LOCAL_URL}/load_data?date=${date}&type=${type}`)
    .then((res) => res.json())
    .then((res) => res);
}

function getProduct(id) {
  return fetch(`${LOCAL_URL}/product?id=${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getOtherBuyer(id) {
  return fetch(`${LOCAL_URL}/other_buyer?ip=${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getProducts,
  getBuyers,
  loadData,
  getBuyerDetail,
  getProduct,
  getOtherBuyer,
};

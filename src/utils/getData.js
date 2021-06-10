function getData(API) {
  return fetch(API)
    .then(res => res.json())
    .then(data => data);
}

export default getData;

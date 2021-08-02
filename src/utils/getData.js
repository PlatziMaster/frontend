const getData = API =>
  fetch(API)
    .then(res => res.json())
    .then(data => data);
export default getData;

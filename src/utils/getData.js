
function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export default getData;

function getData(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(error => error);
}

export default getData;

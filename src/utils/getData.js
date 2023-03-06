function getData(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => data);
}

export default getData;

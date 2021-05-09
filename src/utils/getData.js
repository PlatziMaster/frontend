function getData(uri) {
  return fetch(uri)
    .then(res => res.json());
};

export default getData;

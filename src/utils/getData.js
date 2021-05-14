const getData = async api => {
  // this function receives as parameter the URL and call to the API with fecth and promises and return the data
  return fetch(api)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
};

export default getData;

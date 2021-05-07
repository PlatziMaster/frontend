const getData = (API) => {
  return fetch(API)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};

export default getData;

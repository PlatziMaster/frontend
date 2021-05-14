const getData = async (api) => {
  return fetch(api)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
};

export default getData;

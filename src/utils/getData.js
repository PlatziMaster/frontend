const getData = (api) => {
  return fetch(api)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
};

export default getData;

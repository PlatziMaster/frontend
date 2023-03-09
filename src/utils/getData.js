const getData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch((err) => {
      console.log('Error: ', err.message);
      throw (err);
    });
};

export default getData;

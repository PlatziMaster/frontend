const getData = () => {
  return fetch('http://localhost:3000/data')
    .then(response => response.json())
    .catch((err) => {
      console.log('Error: ', err.message);
      throw (err);
    });
};

export default getData;

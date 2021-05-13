
const initialData = 'http://localhost:8080/data.json';

const getData = () => {
  return fetch(initialData)
    .then(
      res => res.json(),
    )
    .catch(err => console.log(err));
};

export default getData;

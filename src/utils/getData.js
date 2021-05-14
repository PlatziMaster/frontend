
const getData = (URL) => {
  return fetch(URL)
    .then(res => res.json());
};

export default getData;

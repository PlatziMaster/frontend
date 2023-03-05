
const getData = (url = '/data.json') => {
  return fetch(url).then(res => res.json());
};

export default getData;

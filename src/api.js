import 'babel-polyfill';

async function getData(options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const url = 'http://localhost:3000/data';
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
}
const api = {
  items: {
    list() {
      return getData();
    },
  },
};

export default api;

import axios from 'axios';

export function getData(URL) {
  return fetch(URL);
}

export function getData2(URL) {
  return axios
    .get(URL)
    .then(({ data }) => {
      return data;
    })
    .catch(error => console.error(error));
}

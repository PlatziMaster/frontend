export default function getData(URL) {
  return fetch(URL)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
}
/* function getData using fetch()to get the data */

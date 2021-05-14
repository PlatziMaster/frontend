export default function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
}

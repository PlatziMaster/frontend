export default function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
}

export default function getData(url) {
  return fetch(url).then(res => res.json());
}

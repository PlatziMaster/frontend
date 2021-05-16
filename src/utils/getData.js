// Created just as a reference
export default function getData(url) {
  return (
    fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error)
  );
}

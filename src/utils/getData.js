export default function getData(URL) {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then(req => req.json())
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
}

const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(req => req.json())
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export default getData;


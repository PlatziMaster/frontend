const getData = (url) => {
  return new Promise((resolve, reject) => fetch(url)
    .then(resp => resp.json())
    .then((dtos) => {
      resolve(dtos);
    }).catch((error) => {
      reject(error);
    }));
};

export default getData;

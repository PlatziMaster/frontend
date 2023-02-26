const getData = (url) => {
  try {
    return fetch(url)
      .then(response => response.json())
      .then(data => data);
  } catch (error) {
    return {};
  }
};

export default getData;

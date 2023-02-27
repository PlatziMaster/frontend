const getData = (url) => {
  try {
    return fetch(url,
      {
        crossDomain: true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(data => data);
  } catch (error) {
    return {};
  }
};

export default getData;

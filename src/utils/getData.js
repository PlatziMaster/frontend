const API_URL = 'http://localhost:3000';

// eslint-disable-next-line arrow-parens
const getData = async url => {
  const fetchUrl = url || `${API_URL}/data`;
  const result = await fetch(fetchUrl, {
    method: 'GET',
  });
  return result.json();
};

export default getData;

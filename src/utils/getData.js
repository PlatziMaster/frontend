const API_URL = 'http://localhost:3000';

const getData = async () => {
  const result = await fetch(`${API_URL}/data`, {
    method: 'GET',
  });
  return result.json();
};

export default getData;

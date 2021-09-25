
const base_url = 'http://localhost:3000/data';

async function getData(endpoint) {
  const url = base_url + endpoint;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export default getData;


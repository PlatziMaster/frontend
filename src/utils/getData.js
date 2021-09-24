
const base_url = 'http://localhost:3000/data';

async function  getData (endpoint) {
    const url = base_url+endpoint;
    let response = await fetch(url)
    let data =  response.json()
    return data
  }

export default getData;


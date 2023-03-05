const DB_URL = 'http://localhost:3000/data/';

export default async function getData(url = DB_URL) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

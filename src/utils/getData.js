import regeneratorRuntime from 'regenerator-runtime';

const BASE_URL = 'http://localhost:3000'; // API URL for data

async function getData() {
  const a = regeneratorRuntime;
  console.log(a);
  try {
    const response = await fetch(`${BASE_URL}/data`);
    const data = await response.json(); // Trasnform the data to JSON format
    return data;
  } catch (error) {
    throw new Error(error);
  };
};

export default getData;

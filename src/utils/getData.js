const db = 'http://localhost:3000/data/';
const getData = async (url = db) => {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getData;

import 'regenerator-runtime/runtime';

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (e) {

    return e;
  }
};

export default getData;

/* eslint-disable no-useless-catch */
import 'regenerator-runtime/runtime';

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export default getData;

import 'regenerator-runtime/runtime';

export const Data = async (url) => {

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }

};

export default Data;

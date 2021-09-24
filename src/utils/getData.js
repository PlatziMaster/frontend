/* eslint-disable arrow-parens */
const getData = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
    return {};
  }
};

export default getData;

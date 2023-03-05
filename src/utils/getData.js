const getData = async (url) => {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getData;

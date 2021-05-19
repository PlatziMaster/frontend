async function getData(url) {
  try {
    const { data } = await (await fetch(url)).json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default getData;

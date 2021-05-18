async function getData(url) {
  try {
    const { data } = await (await fetch(url)).json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export default getData;

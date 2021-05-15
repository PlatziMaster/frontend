const getData = async (url) => {
  console.log('Gracias por la oportunidad :P espero les guste!!');

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getData;

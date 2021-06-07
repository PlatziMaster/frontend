
const getData = async (url) => {
  const response = await fetch(url);
  const result = response.JSON();
  return result;
};

export default getData;

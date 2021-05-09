async function getData(data) {
  const response = await fetch(data);
  return response;
}

export default getData;

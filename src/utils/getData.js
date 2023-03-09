// eslint-disable-next-line import/prefer-default-export
export const getData = async () => {
  const response = await fetch('http://localhost:3000/data');
  const jsonData = await response.json();
  return jsonData;
};

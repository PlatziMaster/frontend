async function getData(url) {
  try {
    const ans = await fetch(url);
    const result = await ans.json();
    return result;
  } catch (error) {
    return error;
  }
}
export default getData;

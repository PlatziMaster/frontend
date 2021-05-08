import 'babel-polyfill';
/**General function to fetch the data from @data .json 
 * @const data is the full info
 * @url may change, depends of your server configuration
*/
async function getData(options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const url = 'http://localhost:3000/data';
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
const api = {
  items: {
    list() {
      /**Data sent back to the invocation instance required. The function reference is @getData function */
      return getData();
    },
  },
};

export default api;

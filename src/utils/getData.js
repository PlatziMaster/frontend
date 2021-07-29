import '@babel/polyfill';

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;

  } catch (err) {
    console.error('Error in get data', err);
  }

}

export default getData;


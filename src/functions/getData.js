
/*
  Function to GET data from API
*/

export default function getData(uri) {
    return fetch(uri)
        .then(
          res => res.json()
        );
};
  
  
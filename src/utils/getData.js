const getData = API => fetch(API)
  .then(response => response.json())
  .then(data => data);

export default getData;

// import { useState, useEffect } from 'react';

// const getData = (API) => {
//   const [information, setInformation] = useState({});

//   useEffect(() => {
//     fetch(API)
//       .then(response => response.json())
//       .then(data => setInformation(data));
//   }, []);
//   return information;
// };

// export default getData;

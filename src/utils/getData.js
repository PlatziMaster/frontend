const getData = async URL => fetch(URL).then(response => response.json());

export default getData;

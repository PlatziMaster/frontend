
const base_url = 'http://localhost:3000/';

let  getData = (endpoint="") =>{
    const url = base_url+endpoint
    fetch(url)
      .then( response =>{ return response.json()
        .then(data =>{ 
              return data})
      })
    
  }

export default getData;


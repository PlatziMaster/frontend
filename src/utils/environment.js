const isInProduction = true; 

// Development environment settings
let port = 8080;
let url = "http://localhost";

console.log(window.location.origin)

// Production environment settings
if(isInProduction){
    port = 8080;
    url = "http://localhost";
}

//let API_URL = `${url}:${port}`;
let API_URL = window.location.origin;

export default API_URL;
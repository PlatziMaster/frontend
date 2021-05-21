import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
import '../styles/App.styl';
import Header from '../components/Header';


const App = () => {
  const api = 'http://localhost:3000/data'
  const [data, setData] = useState([])

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => console.error(error))
  },[])

  console.log(data)

  return (
    <>
    <Header />
    </>
  )
};

export default App;

// import React from 'react'
// import FetchData from './FetchData'
// import Home from './Home'
// import Navbar from './Navbar'

// const App = () => {
//   return (
//     <div>
//       {/* <FetchData/> */}
//       <Navbar/>
//       <Home/>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FetchData from './FetchData';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://rental-platforms.onrender.com/magicbrix')
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <Navbar />
      <FetchData data={data} />
      <Home />
    </div>
  )
}

export default App;

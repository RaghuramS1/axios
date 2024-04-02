// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function MyComponent() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://rental-platforms.onrender.com/magicbrix')
//       .then(response => setData(response.data))
//       .catch(error => console.log(error))
//   }, []);

//   return (
//     <div>
//       <table>
//         <th>ID</th>
//         <th>Furnishing</th>
//         <th>Rent</th>
//         <tbody>
//             {data.map((r,i) => (
//                 <tr key={i}>
//                     <td>{r.id}</td>
//                     <td>{r.furnishing}</td>
//                     <td>{r.rent}</td>
//                 </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MyComponent;


import React from 'react';

const FetchData = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Furnishing</th>
            <th>Rent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r.id}</td>
              <td>{r.furnishing}</td>
              <td>{r.rent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;

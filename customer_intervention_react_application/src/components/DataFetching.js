// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function DataFetching() {
//     const [interventions, setInterventions] = useState([]);

//     useEffect(() => {
//         axios
//             .get("https://rocketelevatorsrestapigs.herokuapp.com/api/Interventions/Pending")
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     });
//     return (
//         <div>
//             <ul>
//                 {interventions.map((post) => (
//                     <li key={post.is}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default DataFetching;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//-----CODE SERVICE----

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Services() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3004/services")
//       .then((res) => setServices(res.data));
//   }, []);

//   return (
//     <section className="page-section" id="services">
//       <div className="container px-4 px-lg-5">
//         <h2 className="text-center mt-0">At Your Service</h2>
//         <hr className="divider" />
//         <div className="row gx-4 gx-lg-5">
//           <div className="col-lg-3 col-md-6 text-center">
//             <div className="mt-5">
//               <div className="mb-2">
//                 <i className="bi-gem fs-1 text-primary" />
//               </div>
//               <h3 className="h4 mb-2">Sturdy Themes</h3>
//               <p className="text-muted mb-0">
//                 Our themes are updated regularly to keep them bug free!
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 text-center">
//             <div className="mt-5">
//               <div className="mb-2">
//                 <i className="bi-laptop fs-1 text-primary" />
//               </div>
//               <h3 className="h4 mb-2">Up to Date</h3>
//               <p className="text-muted mb-0">
//                 All dependencies are kept current to keep things fresh.
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 text-center">
//             <div className="mt-5">
//               <div className="mb-2">
//                 <i className="bi-globe fs-1 text-primary" />
//               </div>
//               <h3 className="h4 mb-2">Ready to Publish</h3>
//               <p className="text-muted mb-0">
//                 You can use this design as is, or you can make changes!
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 text-center">
//             <div className="mt-5">
//               <div className="mb-2">
//                 <i className="bi-heart fs-1 text-primary" />
//               </div>
//               <h3 className="h4 mb-2">Made with Love</h3>
//               <p className="text-muted mb-0">
//                 Is it really open source if it's not made with love?
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

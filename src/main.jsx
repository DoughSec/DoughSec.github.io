import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


  // "devDependencies": {
  //   "@tailwindcss/postcss": "^4.1.13",
  //   "@vitejs/plugin-react": "^4.7.0",
  //   "autoprefixer": "^10.4.21",
  //   "postcss": "^8.5.6",
  //   "tailwindcss": "^3.4.17",
  //   "vite": "^5.4.19"
  // }
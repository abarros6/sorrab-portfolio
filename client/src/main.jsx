import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("Navbar").style.top = "0";
//   } else {
//     document.getElementById("Navbar").style.top = "-4rem";
//   }
//   prevScrollpos = currentScrollPos;
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

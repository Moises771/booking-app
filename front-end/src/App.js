import Navbar from "./Navbar";
import Rules from "./pages/Rules"
import Courts from "./pages/Courts";
import Login from "./pages/Login"
import Home from "./pages/Home"
import AdminProduct from "./pages/Admin-product";
import Register from "./pages/Register";
import {Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Navbar />  
    <div className="container">
    <Routes>
      <Route path="/booking-app/front-end/src/pages/Home.js" element={<Home />} />
      <Route path="/booking-app/front-end/src/pages/Courts.js" element={<Courts />} />
      <Route path="/booking-app/front-end/src/pages/AdminProduct.js" element={<AdminProduct/>} />
      <Route path="/booking-app/front-end/src/pages/Rules.js" element={<Rules/>} />
      <Route path="/booking-app/front-end/src/pages/Login.js" element={<Login/>} />
      <Route path="/booking-app/front-end/src/pages/Register.js" element={<Register/>} />
    </Routes>
    </div>
    
    </>
  )
  
  
 
}

export default App;

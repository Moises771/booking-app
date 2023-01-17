import Navbar from "./Navbar";
import Rules from "./pages/Rules"
import Courts from "./pages/Courts";
import Login from "./pages/Login"
import Home from "./pages/Home"
import AdminProduct from "./pages/AdminProduct";
import Register from "./pages/Register";
import {Route, Routes} from 'react-router-dom'
import AddCourt from "./pages/AddCourt";
import DeleteCourt from "./pages/DeleteCourt";

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
      <Route path="/booking-app/front-end/src/pages/AddCourt.js" element={<AddCourt/>} />
      <Route path="/booking-app/front-end/src/pages/DeleteCourt.js" element={<DeleteCourt/>} />
    </Routes>
    </div>
    
    </>
  )
  
  
 
}

export default App;

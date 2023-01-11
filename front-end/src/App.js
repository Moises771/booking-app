import Navbar from "./Navbar";
import Rules from "./pages/Rules"
import Courts from "./pages/Courts"
import Login from "./pages/Login"
import {Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Navbar />  
    <div className="container">
    <Routes>
      <Route path="/booking-app/front-end/src/pages/Login.js" element={<Login/>} />
      <Route path="/booking-app/front-end/src/pages/Courts.js" element={<Courts />} />
      <Route path="/booking-app/front-end/src/pages/Rules.js" element={<Rules/>} />

    </Routes>
    </div>
    
    </>
  )
  
  
 
}

export default App;

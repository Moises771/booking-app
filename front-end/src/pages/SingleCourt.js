import React from "react";
import { Link, useParams } from "react-router-dom";


export default function SingleCourt() {
    
  
    
    


    
//single court with param

  const { id } = useParams();  

  return (
    <div>
      <h1> Court {id} </h1>
    
      <Link to="/booking-app/front-end/src/pages/Admin.js">back to products</Link>

      
    </div>
  );
}

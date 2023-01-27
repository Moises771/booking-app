import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCourt() {
  const [court, setCourt] = useState({});
  const { id } = useParams();

  const canchas = () => {
    fetch("http://localhost:8080/booking-app/pages/courtsReact.php")
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        setCourt(dataResponse.find((item) => item.id === id));
      });
  };

  useEffect(() => {
    canchas();
  }, []);

  return (

    
    <div>
      <div className="singlecourt">
        <button className="booknow">BOOK NOW</button>
        <h3>{court.name}</h3> 
        <h3><b>SEK</b> {court.price} per hour</h3> 
        <img className='courtimg' src={`http://localhost:8080/${court.img_url}`} width="200px" height="200px" alt="court"/>
        <h5>{court.description}</h5>       
       <div>
       </div>
      </div>
      <Link to="/booking-app/front-end/src/pages/Courts.js">
        back to venues
      </Link>
    </div>
  );
}

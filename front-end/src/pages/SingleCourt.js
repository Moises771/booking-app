import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCourt() {
  const [data, setData] = useState([]);

  const canchas = () => {
    fetch("http://localhost:8080/booking-app/pages/courtsReact.php")
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        setData(dataResponse);
      });
  };

  useEffect(() => {
    canchas();
  }, []);

  //single court with param

  const { id } = useParams();
  // const product = data.find((item) => item.id === id);
  //
  // const product = data.find((item) => (item.id === id));
  //
  //  const {description} = product

  // const product = data.find((item) => item.id === id);
  // product.array();
  // console.log(product);

  return (
    <div>
      <button onClick={canchas}>get</button>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {" "}
              <p>User: {item.name}</p>
              <p>Role: {item.price}</p>
            </li>
          ))}
        </ul>
       <div>
       </div>
      </div>
      <Link to="/booking-app/front-end/src/pages/Courts.js">
        back to products
      </Link>
    </div>
  );
}

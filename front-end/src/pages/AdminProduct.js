import React from "react";
import {Link } from 'react-router-dom'

class AdminProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      courts: [],
    };
  }

  DeleteCourt = (id) => {
      console.log(id);

    fetch("http://localhost:8080/booking-app/pages/courtsReact.php/?delete=" +id, {

    method: "POST",
    mode: "no-cors",
    
})

       .then((response) => response.json())
      .then((dataResponse) => {


          console.log(dataResponse);
          this.loadData();
          
        
      })
      .catch(console.log);
  }


  loadData() {
    fetch("http://localhost:8080/booking-app/pages/courtsReact.php")
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        this.setState({ dataLoaded: true, courts: dataResponse });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { dataLoaded, courts } = this.state;

    if (!dataLoaded) {
      return <div>loading</div>;
    } else {
      return (
        <div className="card">
          <div classname="card-header">
            <Link className="btn btn-success" to={"/booking-app/front-end/src/pages/AddCourt.js"}>Create Court</Link>
          </div>
          <div classname="card-body">
            <h1>Courts</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Photo</th>
                  {/* <th>Options</th> */}
                </tr>
              </thead>
              <tbody>
                {courts.map((court) => (

                  <Link to={'http://localhost:3000/booking-app/front-end/src/pages/SingleCourt.js'}>
                  <tr key={court.id}>
                    <td>{court.id}</td>
                    <td>{court.name}</td>
                    <td>{court.price}</td>
                    
                    <td>
                      <img
                        src={`http://localhost:8080/${court.img_url}`}
                        width="100px"
                        alt="court"
                      />
                    </td>
                  
                  </tr></Link>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      );
    }
  }
}

export default AdminProduct;

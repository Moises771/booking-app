import React from "react";
import {Link } from 'react-router-dom'

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      canchas: [],
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
        this.setState({ dataLoaded: true, canchas: dataResponse });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { dataLoaded, canchas } = this.state;

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
                  <th>Name</th>                  
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>


                {canchas.map((cancha) => (
                    <Link to="/booking-app/front-end/src/pages/DeleteCourt.js" key={cancha.id}> 
                    {cancha.name}
                     
                      <img
                        src={`http://localhost:8080/${cancha.img_url}`}
                        width="100px"
                        alt="court"
                      />
                    
                    
                  </Link>
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

export default Admin;

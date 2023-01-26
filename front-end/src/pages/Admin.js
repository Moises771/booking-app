import React from "react";
import {Link } from 'react-router-dom'

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      canchas: [],
    };

    this.state = {
      userInfo: false,
      users: [],
    };
  }

  userData() {
    fetch("http://localhost:8080/booking-app/pages/usersReact.php")
      .then((response) => response.json())
      .then((userResponse) => {
        console.log(userResponse);
        this.setState({ userInfo: true, users: userResponse });
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
    this.userData();
  }


  render() {
    const { dataLoaded, canchas } = this.state;
    const {  users } = this.state;

    if (!dataLoaded) {
      return <div>loading</div>;
    } else {
      return (
        <div className="card">
          <div classname="card-header">
            <Link className="btn btn-success" to={"/booking-app/front-end/src/pages/AddCourt.js"}>Create Court</Link>
          </div>
          <div classname="card-body">
            <table className="table">
              
              <tbody>

                <hr></hr><h1>Courts available for rent</h1><hr></hr>
                {canchas.map((cancha) => (
                    <Link to="/booking-app/front-end/src/pages/DeleteCourt.js" key={cancha.id}> 
                    {cancha.name}
                     
                      <img
                        src={`http://localhost:8080/${cancha.img_url}`}
                        width="100px"
                        alt="court"
                      />                                     
                  </Link>
                  
                ))}<hr></hr>
                  <h1>Current Users</h1><hr></hr>
                  {users.map((user) => (
                    <div className="users">
                      <tr><p>User: {user.username}</p><p>Role: {user.role}</p></tr>                     
                      
                    </div>
                  
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

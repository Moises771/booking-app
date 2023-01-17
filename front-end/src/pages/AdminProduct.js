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
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {courts.map((court) => (
                  <tr>
                    {/* Add link to the court so that the entire thing redirects to delete/edit page or use single edit delete buttons */}

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
                    <td>
                      <div className="btn-group" role="group" aria-label="">
                        <button type="button" className="btn btn-warning">
                          Edit
                        </button>
                        <button type="button" className="btn btn-warning">
                        <Link className="btn btn-danger" to={"/booking-app/front-end/src/pages/DeleteCourt.js"}>Delete</Link>                          
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      );
    }
  }
}

export default AdminProduct;

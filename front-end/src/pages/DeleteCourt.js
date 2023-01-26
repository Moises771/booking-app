import React from "react";

class DeleteCourt extends React.Component {
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
    const { courts } = this.state;
    return (
      <div className="edit">
        <h1>Delete/Edit</h1>

        {courts.map((court) => (
          <form
            className="editform"
            action="http://localhost:8080/booking-app/admin-scripts\react-post-delete-product.php"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={court.name}
            />
            <input type="text" name="id" value={court.id}/>
            <input className="delete" type="submit" value="Delete court" />
          </form>
        ))}
      </div>
    );
  }
}

export default DeleteCourt;

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
      <div>
        <h1>Hello</h1>

        {courts.map((court) => (
          <form
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
            <input type="submit" value="Delete product" />
          </form>
        ))}
      </div>
    );
  }
}

export default DeleteCourt;

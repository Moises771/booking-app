import  React  from "react";

class Template extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    this.userData();
  }


  render() {
    const { users } = this.state;

    return (
      <div>
        {users.map((user) => (
          <div>
            <tr>{user.username}</tr> <br></br>
            <tr>{user.role}</tr> <br></br>
            <hr></hr>
          </div>
        ))}
      </div>
    );
  }
}

export default Template;

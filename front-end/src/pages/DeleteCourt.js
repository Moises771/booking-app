import React from "react";

class DeleteCourt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: ""
    }
  }

  changeValue = (e) => {
    const state=this.state;
    state[e.target.name]=e.target.value;
    this.setState({state});
  }

  sendData = (e) => {
    e.preventDefault();
    console.log("formulario enviado");
   



    fetch("http://localhost:8080/booking-app/admin-scripts/react-post-create-product.php/", {

        method: "POST",
        
    })
        .then(response=>response.json())
        .then((dataResponse)=>{
            
            console.log(dataResponse)
        
        })
        .catch(console.log)


  }

  render() { 


    return (  
      <div className="card">
        <div className="card-header">
          Courts
        </div>
        <div className="card-body">
            <form action="http://localhost:8080/booking-app/admin-scripts/react-post-create-product.php" method="post" encType="multipart/form-data">
                <input type="text" name="name" placeholder="Name"/> <br/>
                <textarea name="description" placeholder="Description"></textarea> <br/>
                <input type="number" name="price" placeholder="Price"/> <br/>
                <input type="file" name="image" accept="image/*"/> <br/>
                <input type="submit" value="Save"/>
            </form>
        </div>
        <div className="card-footer text-muted">
        </div>
      </div>
    );
  }
}
 
export default DeleteCourt;


import React from "react";

class AddCourt extends React.Component {
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
    const{name, description, price}=this.state

    console.log(name);
    console.log(description);
    console.log(price);

    var dataSent= {name: name, description: description, price: price}



    fetch("http://localhost:8080/booking-app/admin-scripts/react-post-create-product.php/", {

        method: "POST",
        body:dataSent,
    })
        .then(response=>response.json())
        .then((dataResponse)=>{
            
            console.log(dataResponse)
        
        })
        .catch(console.log)


  }

  render() { 

    const{name, description, price}=this.state

    return (  
      <div className="card">
        <div className="card-header">
          Courts
        </div>
        <div className="card-body">
          <form onSubmit={this.sendData}>
         
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={this.changeValue} value={name} id="name" className="form-control" placeholder="Name of venue" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Enter name of the court</small>
          </div>
          <div className="form-group">
            <label htmlFor="">Description</label>
            <input type="text" name="description" onChange={this.changeValue} value={description} id="description" className="form-control" placeholder="" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Enter description</small>
          </div>
          <div className="form-group">
            <label htmlFor="">Price</label>
            <input type="text" name="price" onChange={this.changeValue} value={price} id="price" className="form-control" placeholder="" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Enter price per hour</small>
          </div>
          <div className="btn-group" role="group" aria-label="">
            <button type="submit" className="btn btn-success">Add new court</button>
            
          </div>
            
          </form>
        </div>
        <div className="card-footer text-muted">
        </div>
      </div>
    );
  }
}
 
export default AddCourt;



import React from "react";
import { useParams } from "react-router-dom";

export default function SingleCourt() {

  
  const { id } = useParams();  

  return (
    <div>
      <h1>Single Court {id} </h1>
      <form>
        <input type="text" name="name" placeholder="Name" value={courts.name}/><br></br>
       
    </form>
      
    </div>
  );
}
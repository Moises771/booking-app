import React from 'react';
import { Link } from 'react-router-dom';

class Courts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            courts: []
        }
    }

    loadData() {

        fetch("http://localhost:8080/booking-app/pages/courtsReact.php")
        .then(response=>response.json())
        .then((dataResponse)=>{
            
            console.log(dataResponse)
            this.setState({dataLoaded:true, courts:dataResponse})
        
        })
        .catch(console.log)
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const {dataLoaded, courts}=this.state

        if(!dataLoaded){return (<div>loading</div>);}
        else{

        return ( <table className='table'>
            <thead>
                <tr>
                    <th><h2>PHOTO</h2></th>
                    <th><h2>VENUE</h2></th>
                    <th><h2>PRICE</h2></th>                   
                </tr>
            </thead>
            <tbody>
                {courts.map(
                    (court)=>(
                 <tr key={court.id}>                    
                    <td><img className='courtimg' src={`http://localhost:8080/${court.img_url}`} width="200px" height="200px" alt="court"/></td>
                    <td><h3><b>{court.name}</b><br></br></h3>{court.description}</td>
                    <td><b>SEK</b> {court.price}  PER HOUR</td>
                   <Link to={`/singlecourts/${court.id}`}><td>More info</td></Link>
                </tr>
                    )

                )

                }
               
            </tbody>



        </table>);
        }
    }




}

export default Courts;
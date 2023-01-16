import React from 'react';

class Courts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
            courts: []
        }
    }

    loadData() {

        fetch("http://localhost:8080/booking-app/pages/testing.php")
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
                    <th>Name</th>
                    <th>Price</th>
                    <th>Photo</th>

                </tr>
            </thead>
            <tbody>
                {courts.map(
                    (court)=>(
                         <tr>
                    <td>{court.name}</td>
                    <td>{court.price}</td>
                    <td><img src={`http://localhost:8080/${court.img_url}`} width="100px" alt="court"/></td>
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
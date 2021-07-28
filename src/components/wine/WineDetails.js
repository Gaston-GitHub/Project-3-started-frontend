import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import EditWine from './EditWine';
 
class WineDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleWine: [],
    };

  }
 
  componentDidMount(){
      this.getSingleWine();
  }
 
  getSingleWine = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/wine/${params.id}`, { withCredentials: true })
      .then( responseFromApi => {
          console.log('API data', responseFromApi.data)
          const singleWine = responseFromApi.data.found;
          this.setState(singleWine);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  deleteWine = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/wine/${params.id}`, { withCredentials: true })
    .then( () =>{
        this.props.history.push('/wine'); 
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  render(){
    return(
      <div className="min-h-screen flex flex-col justify-center md:py-12 bg-bgPages md:bg-fixed bg-auto">
        <h1>Name:{this.state.name}</h1>
        <p>Type:{this.state.type}</p>
        <p>Grape:{this.state.grape}</p>
        <p>Year:{this.state.year}</p>
        <p>COuntry:{this.state.country}</p>
        <p>Price:{this.state.price}</p>
        <p>Review:{this.state.review}</p>
        <p>Image:{this.state.images}</p> 
        <br></br>
        <button onClick={() => this.deleteWine()}>Delete Wine</button>
        <br></br>
        <br></br>
        <Link to='/wine/edit/:id'>Edit your wine!</Link>
        <br></br>
        <br></br>
        <Link to='/wine'>Back to Wines</Link>
      </div>
    )
  }
}
 
export default WineDetails;
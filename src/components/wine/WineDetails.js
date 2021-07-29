import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import EditWine from './EditWine'
 
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

  renderEditForm = () => {
    if(!this.state.name) {
      this.getSingleWine();
    } else {
      return <EditWine wine={this.state} getSingleWine={this.getSingleWine} {...this.props} />
    }
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
      <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-bgPages sm:bg-fixed bg-auto">
        <p className=' py-4 text-center'>Your wine detail!</p>
        <br></br>
        <h1>Name:{this.state.name}</h1>
        <p>Type:{this.state.type}</p>
        <p>Grape:{this.state.grape}</p>
        <p>Year:{this.state.year}</p>
        <p>COuntry:{this.state.country}</p>
        <p>Price:{this.state.price}</p>
        <p>Review:{this.state.review}</p>
        <p>Image:{this.state.images}</p> 
        <br></br>
        <button onClick={() => this.deleteWine()}>Delete</button>
        <br></br>
        <div>{this.renderEditForm()}</div>
      </div>
    )
  }
}
 
export default WineDetails;
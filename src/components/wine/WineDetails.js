import React, { Component } from 'react';
import axios from 'axios';
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
    axios.delete(`https://wine-saver.herokuapp.com/wine/${params.id}`, { withCredentials: true })
    .then( () =>{
        this.props.history.push('/wine'); 
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  render(){
    return(
      <div className="px-10 max-h-full flex flex-col justify-center text-white bg-black">
        <p className='text-center text-white'>Wine Information</p>
        <h1 className="text-semibold">Name:{this.state.name}</h1>
        <p>Type:{this.state.type}</p>
        <p>Grape:{this.state.grape}</p>
        <p>Year:{this.state.year}</p>
        <p>Country:{this.state.country}</p>
        <p>Price:{this.state.price}</p>
        <p>Review:{this.state.review}</p>
        <button onClick={() => this.deleteWine()}>Delete ☑️</button>
        <div>{this.renderEditForm()}</div>
      </div>
    )
  }
}
 
export default WineDetails;
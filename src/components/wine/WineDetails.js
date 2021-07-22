import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditWine from './EditWine';
 
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

// EDIT WINE
  renderEditWine = () => {
    if(!this.state.name){
      this.getSingleWine();
    } else {
            return <EditWine wine={this.state} getWine={this.getSingleWine} {...this.props} />
    }
  }
 
// DELETE WINE:
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
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.type}</p>
        <p>{this.state.grape}</p>
        <p>{this.state.year}</p>
        <p>{this.state.country}</p>
        <p>{this.state.price}</p>
        <p>{this.state.review}</p>
        <p>{this.state.images}</p>
        <div>{this.renderEditWine()}</div>
        <button onClick={() => this.deleteWine()}>Delete Wine</button> {/* <== !!! */}

        <Link to={'/wine'}>Back to Wines</Link>
      </div>
    )
  }
}
 
export default WineDetails;
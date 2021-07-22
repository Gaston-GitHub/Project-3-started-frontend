// components/wine/WinetList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import AddWine from '../wine/AddWine'; // <== !!!

class WineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineList: [],
      status: 'loading'
    }
  }
    
  getAllWines = () =>{
    axios.get(`http://localhost:5000/wine`, { withCredentials: true })
    .then(responseFromApi => {
      console.log('API data', responseFromApi.data)
      this.setState({
        wineList: responseFromApi.data.found,
        status: 'loaded'
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.getAllWines();
  }

  render() {
    return (
      <div>
        {this.state.status === 'loading' && <p>loading...</p>}
        {this.state.status === 'loaded' &&
         this.state.wineList.map(wine => {
            return (
              <div key={wine._id}>
                <Link to={`/wine/${wine._id}`}>
                  <h3>{wine.name}</h3>
                </Link>
                {/* <p>{wine.type} </p> */}
              </div>
            )})
          }
        
        <div>
            {/* <AddWine getData={() => this.getAllWines()}/> <== !!! */}
        </div>
      </div>
    )
  }
}

export default WineList;

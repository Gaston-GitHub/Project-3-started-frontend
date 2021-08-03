
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class WineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineList: [],
      status: 'loading'
    }
  }
    
  getAllWines = () =>{
    axios.get(`https://wine-saver.herokuapp.com/wine`, { withCredentials: true })
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
      <div className="min-h-screen py-6 flex flex-col justify-center text-center text-white sm:py-6 bg-black">
        <p className="text-xl">This is your wine list</p>
        <br></br>
        {this.state.status === 'loading' && <p>loading...</p>}
        {this.state.status === 'loaded' &&
         this.state.wineList.map(wine => {
            return (
              <div key={wine._id}>
                <Link to={`/wine/details/${wine._id}`}>
                  <h3>{wine.name}</h3>
                </Link>
              </div>
            )})
          }
          <Link to="/wine/create"><p className="text-white text-center py-10">Save a new wine ☑️ </p></Link>
          <Link to="/private"><p className="text-white text-center">Go back ↩️</p></Link>
      </div>
    )
  }
}

export default WineList;

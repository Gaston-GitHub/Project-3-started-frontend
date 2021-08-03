import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class AddWine extends Component {
  state = { 
    name: "", 
    type: "",
    grape: "",
    year: "",
    country: "",
    price: "",
    review: "",
    image: "",
     }

   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const type = this.state.type;
    const grape = this.state.grape;
    const year = this.state.year;
    const country = this.state.country;
    const price = this.state.price;
    const review = this.state.review;
    const images = this.state.images;


    axios.post("https://wine-saver.herokuapp.com/wine",
    { name, type, grape, year, country, price, review, images },
    { withCredentials:true })
    .then( () => {
        this.setState({
        name: "", 
        type: "", 
        grape: "", 
        year: "", 
        country:"", 
        price: "", 
        review: "", 
        images:""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="p-10 min-h-screen py-6 flex flex-col items-center justify-center bg-black ">
        <form onSubmit={this.handleFormSubmit}>
            <h1 className="text-white text-center">Save your favorite wine</h1>
          
            <label className="text-sm text-white">Name:</label>
            <input className="w-full h-6 text-sm text-gray-700 border-b-2 focus:outline-none" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          
    
            <label className="text-sm text-white">Type:</label>
            <input className="w-full h-6 py-2 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="type" value={this.state.type} onChange={ e => this.handleChange(e)} />
          
          
            <label className="text-sm text-white">Grape:</label>
            <input className="w-full h-6 py-2 text-sm text-gray-700 border-b-2 focus:outline-none" type='text' name="grape" value={this.state.grape} onChange={ e => this.handleChange(e)} />
          
          
            <label className="text-sm text-white">Year:</label>
            <input className="w-full h-6 py-2 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="year" value={this.state.year} onChange={ e => this.handleChange(e)} />
          
          
           <label className="text-sm text-white">Country:</label>
           <input className="w-full h-6 py-2 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="country" value={this.state.country} onChange={ e => this.handleChange(e)} />
          
          
            <label className="text-sm text-white">Price:</label>
            <input className="w-full h-6 py-2 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="price" value={this.state.price} onChange={ e => this.handleChange(e)} />
          
          
            <label className="text-sm text-white">Review:</label>
            <input className="w-full h-6 py-2 text-sm text-gray-700 border-b-2 focus:outline-none" name="review" value={this.state.review} onChange={ e => this.handleChange(e)} />
          
          <br></br>
          <br></br>
          <div className=" flex items-center">
          <button onClick={this.handleFormSubmit} className="bg-gray-50 text-black px-2 py-1 text-sm">Save it</button>
          </div>
        </form>
        <br></br>
        <Link to="/wine"><p className="text-center text-white">Go to wine list ↩️</p></Link>
      </div>
      


    )
  }
}

export default AddWine;

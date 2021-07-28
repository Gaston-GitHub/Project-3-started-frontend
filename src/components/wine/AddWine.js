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


    axios.post("http://localhost:5000/wine",
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
      <div className="min-h-screen py-6 flex flex-col items-center justify-center sm:py-12 bg-bgPages md:bg-fixed">
        <form onSubmit={this.handleFormSubmit}>
          <div className="">
            <label className="text-sm">Name:</label>
            <input className="w-full h-8 px-2 text-sm text-gray-700 placeholder--600 border rounded-lg focus:shadow-outline" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          </div>
          <div>
            <label className="text-sm">Type:</label>
            <input className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="type" value={this.state.type} onChange={ e => this.handleChange(e)} />
          </div>
          <div>
            <label className="text-sm">Grape:</label>
            <input className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type='text' name="grape" value={this.state.grape} onChange={ e => this.handleChange(e)} />
          </div>
          <div>
            <label className="text-sm">Year:</label>
            <input className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="year" value={this.state.year} onChange={ e => this.handleChange(e)} />
          </div>
          <div>
           <label className="text-sm">Country:</label>
           <input className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="country" value={this.state.country} onChange={ e => this.handleChange(e)} />
          </div>
          <div>
            <label className="text-sm">Price:</label>
            <input className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" name="price" value={this.state.price} onChange={ e => this.handleChange(e)} />
          </div>
          <div>
            <label className="text-sm">Review</label>
            <input className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" name="review" value={this.state.review} onChange={ e => this.handleChange(e)} />
          </div>
          <div>
            <label className="text-sm">Image:</label>
            <input className="bg-transparent" type="text" name="image" value={this.state.image} onChange={ e => this.handleChange(e)} />
          </div>
          <br></br>
          <div className=" flex items-center">
          <button onClick={this.handleFormSubmit}>Save!</button>
          </div>
        </form>
        <br></br>
        <Link to="/wine"><p className="text-center">Go to wine list!</p></Link>
      </div>
      


    )
  }
}

export default AddWine;

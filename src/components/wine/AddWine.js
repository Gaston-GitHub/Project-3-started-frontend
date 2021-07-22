import React, { Component } from 'react';
import axios from 'axios';

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
        // this.props.getData();
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
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Type:</label>
          <input type="text" name="type" value={this.state.type} onChange={ e => this.handleChange(e)} />
          <label>Grape:</label>
          <input type='text' name="grape" value={this.state.grape} onChange={ e => this.handleChange(e)} />
          <label>Year:</label>
          <input type="text" name="year" value={this.state.year} onChange={ e => this.handleChange(e)} />
          <label>Country:</label>
          <input type="text" name="country" value={this.state.country} onChange={ e => this.handleChange(e)} />
          <label>Price:</label>
          <input type="text" name="price" value={this.state.price} onChange={ e => this.handleChange(e)} />
          <label>Review</label>
          <textarea name="review" value={this.state.review} onChange={ e => this.handleChange(e)} />
          <label>Image:</label>
          <input type="text" name="image" value={this.state.image} onChange={ e => this.handleChange(e)} />
          
          {/* <input type="submit" value="Submit" /> */}
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddWine;

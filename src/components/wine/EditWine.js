
import React, { Component } from 'react';
import axios from 'axios';



class EditWine extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: "",
    type: "",
    grape: "",
    year: "",
    country: "",
    price: "",
    review: "",
    image: "",
  }
}
  
  handleFormSubmit = (event) => {
   
    const name = this.state.name;
    const type = this.state.type;
    const grape = this.state.grape;
    const year = this.state.year;
    const country = this.state.country;
    const price = this.state.price;
    const review = this.state.review;
    const images = this.state.images;

     event.preventDefault();

    axios.put(`http://localhost:5000/wine/${this.props.wine._id}`,
    { name, type, grape, year, country, price, review, images },
    { withCredentials: true })
    .then( () => {
        this.props.getWine();
        // after submitting the form, redirect to '/wines'
        this.props.history.push('/wine');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeName = (event) => {  
    this.setState({
      name:event.target.value
    })
  }

  handleChangeType = (event) => {  
    this.setState({
      type:event.target.value
    })
  }

  handleChangeGrape = (event) => { 
    this.setState({
      grape:event.target.value
    })
  }

  handleChangeYear = (event) => { 
    this.setState({
      year:event.target.value
    })
  }

  handleChangeCountry = (event) => {
    this.setState({
      country:event.target.value
    })
  }

  handleChangePrice = (event) => {
    this.setState({
      price:event.target.value
    })
  }

  handleChangeReview = (event) => {
    this.setState({
      review:event.target.value
    })
  }

  handleChangeImages = (event) => {
    this.setState({
      images:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChangeName(e)}/>
          <label>Type:</label>
          <input name="type" value={this.state.type} onChange={e => this.handleChangeType(e)} />
          <label>Grape:</label>
          <input name="grape" value={this.state.grape} onChange={ e => this.handleChangeGrape(e)} />
          <label>Year:</label>
          <input name="year" value={this.state.year} onChange={ e => this.handleChangeYear(e)} />
          <label>Country:</label>
          <input name="country" value={this.state.country} onChange={ e => this.handleChangeCountry(e)} />
          <label>Price:</label>
          <input name="price" value={this.state.price} onChange={ e => this.handleChangePrice(e)} />
          <label>Review:</label>
          <input name="review" value={this.state.review} onChange={ e => this.handleChangeReview(e)} />
          <label>Images:</label>
          <input name="images" value={this.state.images} onChange={ e => this.handleChangeImages(e)} />
          <button onClick={this.handleFormSubmit}>Edit Wine</button>
        </form>
      </div>
    )
  }
}

export default EditWine;

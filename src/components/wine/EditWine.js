
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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

    axios.put(`https://wine-saver.herokuapp.com/wine/${this.props.wine._id}`,
    { name, type, grape, year, country, price, review, images },
    { withCredentials: true })
    .then( () => {
        this.props.getSingleWine();
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

  render(){
    return (

    <div className="flex-col justify-center text-white bg-black" >
      <p className="text-center">Here you can edit your wine</p>
       <div className=""> 
        <form onSubmit={this.handleFormSubmit}>
        <div className="">
          <label className="text-sm">Name:</label>
          <input className="w-full h-5 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="name" value={this.state.name} onChange={e => this.handleChangeName(e)}/>
        </div>
          <label className="text-sm">Type:</label>
          <input className="w-full h-5 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="type" value={this.state.type} onChange={e => this.handleChangeType(e)} />
        <div>
          <label className="text-sm">Grape:</label>
          <input className="w-full h-5 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="grape" value={this.state.grape} onChange={ e => this.handleChangeGrape(e)} />
        </div>
        <div>
          <label className="text-sm" >Year:</label>
          <input className="w-full h-5 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="year" value={this.state.year} onChange={ e => this.handleChangeYear(e)} />
        </div>
        <div>
          <label className="text-sm">Country:</label>
          <input className="w-full h-5 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="country" value={this.state.country} onChange={ e => this.handleChangeCountry(e)}></input>
        </div>
        <div>
          <label className="text-sm">Price:</label>
          <input className="w-full h-5 focus:text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="price" value={this.state.price} onChange={ e => this.handleChangePrice(e)} />
        </div>
        <div>
          <label className="text-sm">Review:</label>
          <input className="w-full h-5 text-sm text-gray-700 border-b-2 focus:outline-none" type="text" name="review" value={this.state.review} onChange={ e => this.handleChangeReview(e)} />
        </div>
        <br></br>
         <button onClick={this.handleFormSubmit} className="bg-gray-50 text-black px-2 py-1 text-sm">Submit</button>
        </form>
        <Link to='/wine'><p className="text-center py-4">Back to Wine list ↩️</p></Link>
      </div>
      
    </div>
    )
  }
}

export default EditWine;

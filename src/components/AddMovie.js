import React, { Component } from 'react';
import listOfMovies from '../Listeofmovies'
import Nav from './nav'
class AddMovie extends Component {

  addNewMovie(e) {
    e.preventDefault();
    var movie = {
      title: this.title.value,
      releaseYear: this.year.value,
      description: this.description.value,
      rating: this.poster.value,
      img: this.image.value,
      decription: this.description.value  /*= this.description.value.replace("C:\\fakepath\\", "/home/oussama/Desktop/Shopping-Card/img")*/,
      id : listOfMovies.length + 1 ,
    };
    this.props.addMovie(movie);
  }
  render() {
    return (
      <>
      <Nav/>

      <form className="movie-form" onSubmit={(e) => this.addNewMovie(e)}>
        <h3>Add a Movie</h3>
       <label> TItre </label>  
       <p><input ref={(input) => this.title = input} type="text" placeholder="Title"  name="title"  required/> </p>
       <label> Anee </label>  
       <p> <input ref={(input) => this.year = input} type="date" placeholder="Year" required /></p>
       <label> Reviw</label>  
       <p><input ref={(input) => this.poster = input} type="number" placeholder="Poster"  min ="0" max="5" required/></p> 
       <label> Image </label>  
       <p><input ref={(input) => this.image = input} type="text" placeholder="image"  required/></p> 
       <label> Description </label>  
        <p><textarea ref={(input) => this.description = input} placeholder="Description"> </textarea></p>
       
       <p className="submit"> <button type="submit" >Add Movie</button></p>
        
      </form>
      </>
    );
  }

}

export default AddMovie;


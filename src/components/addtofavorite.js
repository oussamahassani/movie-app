import React, { Component } from "react";
import  { myFavoriteMovies } from "./Movies";
import Mapfavoritemovie from './mapfavoritemovie'
import  listOfMovies from '../Listeofmovies'
import Nav from './nav'
import '../csscomponent.css'
class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.listmovie=listOfMovies
    
  }

  componentDidMount() {
    console.log("bonjour")
    if(myFavoriteMovies)
    {
    let letmovie =  myFavoriteMovies
    console.log(letmovie)
    
    if (letmovie.length > 0) {
      let movieRows = []
      for (var i = letmovie.length-1; i >= 0; i--) {
    const movieRow = <> 
     <Mapfavoritemovie name={listOfMovies[letmovie[i] -1].title} year={listOfMovies[letmovie[i]-1].releaseYear} img = {listOfMovies[letmovie[i] -1].img}  rating={listOfMovies[letmovie[i] -1].rating} identite={i} key={letmovie[i]}> </Mapfavoritemovie>
     </>
        //const movieRow =   <Movies  name={this.state.title} year={this.state.releaseYear} id={i}></Movies>
             console.log(movieRow)
        movieRows.push(movieRow)
              }
           
            this.setState({ rows: movieRows });
            
    }
          };
      
        }
  

  render() {
    return (
     
       <div className="Favorite"> 
        <Nav/>
        <div className="flexfavorite">
          {  this.state.rows ?this.state.rows  :   <h1>  "You can view your favorite movies here."  </h1>   }
            
           
            </div>
         
        
      </div>
    );
  }
}

export default Favorite;

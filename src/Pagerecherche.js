
import React, { Component } from 'react';
import './csscomponent.css'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import listOfMovies from './Listeofmovies'
import Movies   from './components/Movies'
import Favorite  from './components/addtofavorite'
import AddMovie from  './components/AddMovie'
import Nav from'./components/nav'
import Rating from './components/rating'
export default class Recherche extends Component {
    
  
  constructor(props) {
    super(props)
    this.state = {
        movies: listOfMovies,
        contenudestate : " ",
        startchekd : 3
    };
     }
      
     handleKeyPress = event => {
      if (event.key =='Enter') {

          this.setState({
          movies: this.filterByText(this.state.contenudestate, listOfMovies)})
         console.log("click" +" "+ this.state.contenudestate)
      }
      };
        onSearchChange = (e) => {
          let contenu = e.target.value;
          this.setState({
          contenudestate: contenu
          });
                    
                  
                }

         filterByText(text, array) {
         return array.filter((elem) => (elem.title.toLowerCase().indexOf(text.toLowerCase()) !== -1  |    elem.releaseYear === text  | elem.rating === Number(text) ));
             }
             onClickFn =(i) => {
               console.log("click" + this.state.startchekd)
               this.setState({startchekd : i} )
             }

            filtrerating = (num,arr) => {
              console.log(this.state.movies)
            return arr.filter((elem) => (elem.rating === Number(num)))
             }

             filterbycher = event => {
           
                  this.setState({
                  movies: this.filtrerating(this.state.startchekd, listOfMovies)})
                 console.log("click" +" "+ this.state.contenudestate)
              };

             
             

   render() {

  return (
    <div className="App">
                 <Nav/>

      <header> <button onClick={this.filterbycher} >filter</button>
      <div style={{float:'right',marginRight:'50px'}}> <Rating onClickFn= {({ i }) => this.onClickFn(i)} indexChecked={this.state.startchekd}  ></Rating></div>
        <h1>Movie Data</h1>
      
      </header>
      <main>
        <div style={{ border:" 2px solid #dd0025,"}}>
        <Search handleInput={this.onSearchChange } search={this.handleKeyPress} />
        </div>

        {/* <Results results={this.state.movies} openPopup={"hallo"} />

       {(typeof state.selected.Title != "undefined") ? <Popup selected={"state.selected"} closePopup={"closePopup"} /> : false}*/}
        <div className="container">
      <div className="flex">
          {this.state.movies.map((movie, index) => <Movies name={movie.title} year={movie.releaseYear} rating={movie.rating} img ={movie.img} decription={movie.decription} identite={index + 1} key={index}>
             </Movies>)}
         
      </div>
        </div>
      </main>

   
       </div>
  );
}
}


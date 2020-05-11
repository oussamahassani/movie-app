import React, { Component } from 'react'
import PropTypes from 'prop-types'
import listOfMovies from '../Listeofmovies'
import AddMovie from  './AddMovie'
export default class Addmoviepage extends Component {
    
    constructor(){
        super()
        this.state = {
            movies: listOfMovies
        };
    }
    
    addMovieToGallery( movie ) {
     
     
        console.log(movie)
        //let newMovies = Object.assign( currentMovies, movie );
        listOfMovies.push(movie)
           if( movie != null )
            {
            this.setState({ movies: listOfMovies });
            console.log(this.state.movies)
            alert("votre donner a eté bien enregister")
             } 

            }

    render() {
        return (
            <div>
                      <AddMovie addMovie={this.addMovieToGallery.bind(this)}/>   
            </div>
        )
    }
}


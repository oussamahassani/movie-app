import React, { Component } from 'react'
import listOfMovies from '../Listeofmovies'
import { ids } from './Movies'
import Nav from './nav'
import {  BrowserRouter, Switch,Route,Link} from 'react-router-dom'
export default class Editmovie extends Component {
    constructor() {
        super()
        this.state = {


        }
        this.divmovieid = React.createRef();


    }
    componentDidMount = () => {
        console.log(ids);
        if (ids.length > 0) {
            let id = ids[0] -1;
            this.title.value = listOfMovies[id].title;
            this.year.value= listOfMovies[id].releaseYear;
           this.decription.value = listOfMovies[id].decription;
            this.categorie.value = listOfMovies[id].categorie
            this.divmovieid.current.value = id + "bonjour"
          //  this.divmovieid.current.text = titre
        }

    }

                 editmovie(e) {
                  e.preventDefault();
                  let id = ids[0] -1;
                  listOfMovies[id].title = this.title.value ;
                  listOfMovies[id].releaseYear = this.year.value ;
                  listOfMovies[id].decription =  this.decription.value ;
                  listOfMovies[id].categorie =  this.categorie.value   ;
                  alert("votre donner a eter bien modifier , cosulter la page principale")
                 
                      
                      
                      
                      
                      
    // They clicked n
                        }                  
                     
    render() {
        return (
            <>
                <Nav />
                <form className="movie-form" onSubmit={(e) => this.editmovie(e)}>
                    <h3 ref={this.divmovieid}>Edit  Movie Numero </h3>
                    <label> TItre </label>
                    <p><input ref={(input) => this.title = input} type="text" placeholder="Title" name="title" required /> </p>
                    <label> Anee </label>
                    <p> <input ref={(input) => this.year = input} type="text" placeholder="Year" required /></p>
                    <label> decription </label>
                    <p><input ref={(input) => this.decription = input} type="text" placeholder="decription" required /></p>
                    <label> categorie </label>
                    <p>< input ref={(input) => this.categorie = input} placeholder="categorie" /> </p>

                    <p className="submit"> <button type="submit" >Edit movie</button></p>

                </form>
            </>
        )
    }
}

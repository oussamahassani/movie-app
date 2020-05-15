import React, { Component } from 'react'
import  listOfMovies from '../Listeofmovies'
import Nav from './nav'
export default class Watchmoves extends Component {
 componentDidMount()
 {  setTimeout(() => { let rescherche = window.location.search
      let x = rescherche.slice(1,rescherche.length);
   
    if (x == listOfMovies[x-1].id)
    console.log("true")
    document.getElementById("h1").innerHTML+=listOfMovies[x-1].title;
   let film = document.getElementById("film");
   film.src=listOfMovies[x-1].link
 }, 1000);
 //console.log(listOfMovies[x])
 }
    render() {
       

        return (
            <div>
                <Nav></Nav>
                <h1  className="text-centre text-rouge" id="h1">Watch moveis </h1>
              <div style={{display:"flex" , justifyContent:"center"}}>
                  <iframe id="film" width="1000" height="615" 
                src=""
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen></iframe>
                 </div>  
            </div>
        )
    }
}

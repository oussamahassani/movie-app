import React ,  {useState, Component} from 'react'   
import Nav from './components/nav'
import {  BrowserRouter, Switch,Route,Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Carousell from './components/carouselle'
import {useradmin}  from './Identification'
 class PageHome extends  Component{
  constructor()
  { super()
      this.state = {
             name : " "
      }
  }
       componentDidMount(){
        if (useradmin.length>0){
      let usercontenu = document.getElementById("iduser");
       usercontenu.style=" display: none;"
        
        }
      else {

        let useradmin = document.getElementById("admin");
        useradmin.style="display: none;"
      }
       }
 
    render () {
      console.log("user" ,useradmin[0],useradmin[1] )
    return (
        <div >
            
           <Nav/> 
         
         
          
           <br></br>
           <div  id ="iduser"higth="40%">
           <Carousell/>
           <div>
        <div class="container">
          <h1 class="display-3">watch-movies on ligne!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/00qywL1unxE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
           </div>
           <div>
           <div class="container-fluid" id="admin">
           <div class="row text-center">
          < div class="col-md-12 dashhead">
           <h1> Welcome To your ProFile admin</h1>

           </ div>
           </div>
           </div>




             
           </div>
        </div>
    )
}
   }

export default PageHome

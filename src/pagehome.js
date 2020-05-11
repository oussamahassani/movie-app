import React ,  {useState, Component} from 'react'   
import Nav from './components/nav'
import {  BrowserRouter, Switch,Route,Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Carousell from './components/carouselle'
 class PageHome extends Component{
  constructor()
  { super()
      this.state = {
             name : " "
      }
  }
   componentDidMount(){
 
    {  
       let namestorege = localStorage.getItem("userfirstname")
       console.log("name " +namestorege)
   this.setState({ name: namestorege });
   console.log("state" +  this.state.name)
  
    }}
    alertbyby = () =>
    {  alert ("BY BY" + " " + this.state.name)
       
    }
    render () {
    return (
        <div >
            
           <Nav/> 
         
           <div style={{float:"right",color:"red",fontSize:"20px",fontFamily:"sans-serif",padding:"10px 10px"}}> bien venue {this.state.name}
           <button onClick ={this.alertbyby }>  <Link to="/">log out</Link> </button>
           </div>
           <br></br>
           <div higth="40%">
           <Carousell/>
           <div>
        <div class="container">
          <h1 class="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
        </div>
      </div>
           </div>
        </div>
    )
}
   }

export default PageHome

import React from 'react'
import {  BrowserRouter, Switch,Route,Link} from 'react-router-dom'
import  Login from './Identification'
import  Register from './Pageregister'
import  Recherche from './Pagerecherche'
import PageHome from './pagehome'
import Favorite from './components/addtofavorite'
import Addmoviepage from './components/addmoviepage'
import Editmovie from './components/editmovie'
import "./csscomponent.css";
function App() {
  return (
    <div>   <BrowserRouter>
   
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/recherche" component={Recherche}></Route>
      <Route exact={true}  path="/home" component={PageHome}></Route>
      <Route exact path="/favorite" component={Favorite}></Route>
      <Route exact path="/addmovies" component={Addmoviepage}></Route>
      <Route exact path="/Editermovie" component={Editmovie}></Route>
      </BrowserRouter>
    </div>
  )
}

export default App


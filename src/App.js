import React from 'react'
import {  BrowserRouter, Switch,Route,Link,Redirect} from 'react-router-dom'
import  Login from './Identification'
import  Register from './Pageregister'
import  Recherche from './Pagerecherche'
import lazyidentification from './lazyidentification'
import PageHome from './pagehome'
import Favorite from './components/addtofavorite'
import Addmoviepage from './components/addmoviepage'
import Editmovie from './components/editmovie'
import Watchmoves from './components/watchmoves'
import NotFound from './NotFound'
import Test from './test'
import Spinnerourechrche from './spinerourecherche'
import "./csscomponent.css";
function App() {
  return (
    <div>   <BrowserRouter>
      <Switch>
      <Route exact path="/" component={lazyidentification}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/recherche" component={Spinnerourechrche}></Route>
      <Route exact={true}  path="/home" component={PageHome}></Route>
      <Route exact path="/favorite" component={Favorite}></Route>
      <Route exact path="/addmovies" component={Addmoviepage}></Route>
      <Route exact path="/Editermovie" component={Editmovie}></Route>
      <Route exact path="/test" component={Test}></Route>
      <Route  path="/watch:id" component={Watchmoves} ></Route>
      <Route exact path="/404" component={NotFound} />
      <Redirect exact path ="***" to="/404" /> 
    </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App


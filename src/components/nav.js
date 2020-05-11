import React from 'react'
import {  BrowserRouter, Switch,Route,Link} from 'react-router-dom'
 function Nav() {
    return (
        <div>
             <nav className="mb-1 navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#">Movie App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
  <Route>
    <ul className="navbar-nav">
      <li className="nav-item active">
      <em> <Link to='/home'>Home</Link> </em> 
      </li>
      <li className="nav-item">
      <em> <Link to='/recherche'>Search</Link> </em> 
      </li>
      <li className="nav-item">
      <em> <Link to='/addmovies'>Addmovies</Link> </em> 
      </li>
      <li className="nav-item">
      <em><Link to='/favorite'>favorite</Link> </em> 
 </li>
    </ul>
    <ul className=" ml-auto nav-flex-icons">
      <p className="nav-item avatar">
      
          <img src="https://avatarfiles.alphacoders.com/190/190259.png" className="rounded-circle z-depth-0"
            alt="avatar image" height="35"/>
       
      </p>
    </ul>
    </Route>
  </div>
</nav>
        </div>
    )
}

export default Nav

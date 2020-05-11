import React, { useState  , Component} from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./csscomponent.css";
import { Route , Link} from 'react-router-dom'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.error  = React.createRef();
    this.errormail = React.createRef();
  this.state = {
       login : '' ,
       password : ''  ,  
       
       

  }
}
  onchangemail = e => {
    let a = e.target.value;
      let regx = /^[a-zA-Z]+@[a-z]+\.[a-z]+$/
    this.setState({login:a})
    console.log(regx.test(this.state.login))
    if (regx.test(this.state.login)==false)
    {
    this.errormail.current.innerHTML = "essayer une valeur email valide"
    this.errormail.current.style= "color : red"
    console.log(this.state.login)
    }
    else
    {
    this.errormail.current.innerHTML = "bravo votre email est valide"
    this.errormail.current.style= "color : green"
  }
  }
  onchngepasword = e => {
    this.setState ({password:e.target.value})
  if (this.state.password.length>8 )
  {
  this.error.current.innerHTML = "mot de passe suffisante" ;
  this.error.current.style= "color : green"
  console.log("sufissante")
  }
  else
  this.error.current.innerHTML =  " merci de choisir une strong passe word" ;
  this.error.current.style='color : red' ;
  console.log("innnsufissante")
  }

 clickme = e => {  if ( localStorage.getItem("email") == this.state.login)
                   {
      console.log('The link was clicked.'); 
      alert ("bien venu" + " " +localStorage.getItem("userfirstname"))
                    }
      if (this.state.login !== localStorage.getItem("email") | this.state.password =="" ) 
       {
         alert("merci de remplire les chamaps")
         e.preventDefault()
    }}
    render() {
return (

    <>
     <nav >
      <Route>
     <div className="nav">
       <span  ><Link className="clor" to="/" >Identification</Link></span>
       <span><Link className="clor" to="/register" >Register</Link></span>
       <span ></span>
     </div>
      </Route>
      </nav>
     <section class="container">
    <div class="login">
      <h1>Login to Movie APP</h1>
      <form method="post" action="index.html">
        <p><input type="text" name="login"  placeholder="Username or Email" required onChange={this.onchangemail} required/></p>
        <small className="small" ref={this.errormail}>alphabetique</small>
        <p><input type="password" name="password" placeholder="Password" required onChange={this.onchngepasword} required/></p>
        <small className="small" ref={this.error}> mot de passe obligatoir</small>
        <p class="remember_me">
          <label>
            <input type="checkbox" name="remember_me" id="remember_me"/>
            Remember me on this computer
          </label>
        </p>
        
        <p class="submit"><Link  to="/home" ><input  onClick= {this.clickme} type="button" name="commit" value="Login"/></Link></p>
              
      </form>
    </div>

    <div className="login-help">
      <p>Forgot your password? <a href="">Click here to reset it</a>.</p>
    </div>
  </section>

    { /*                           
<h1 className="text-centre text-rouge">bonjour</h1>
<form className="form">
<div className="contenair">
    <div className="formGroup" >
    <label className="label">login</label>
    <input type="text"></input>
    </div>
    <div className="formgroup" >
    <label  className="label">>Mot de pass</label>
    <input type="text"></input>
    </div>   
</div>
<input type="button" value="submit"></input>
    </form>*/}
    </>
)
}
}

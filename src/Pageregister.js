import React, { Component } from 'react'
import "./csscomponent.css";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.namefirst = React.createRef()
    this.namelaste = React.createRef();
    this.erroremail = React.createRef();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }
  onchangefirstname = e => {
    let name = e.target.value;
      let regx = /^[a-zA-Z]+$/g
      this.namefirst.current.style = " color : red"
      let resulta = regx.test(name)
      console.log(resulta)
      if (resulta== true)
      {
      this.namefirst.current.style = " color :green"
    this.setState({ first_name: name })
      }
    else if (resulta == false) {
    this.namefirst.current.innerHTML="nameinvalide"
    this.namefirst.current.style = " color : red"
    
    }

  }
  onchangelastname(e) {
    let namelase = e.target.value;
  let regx = /^[a-zA-Z]+$/g
  let resulta = regx.test(namelase)
      if (resulta==true)
      {
        this.namelaste.current.style  = " color :green"
        this.setState({ last_name: namelase})
      }
      else if (resulta == false) {
        this.namelaste.current.innerHTML="lase name invalide"
        this.namelaste.current.style = " color : red"
       }
}
  onchangeemail(e) {
    let  emailregistre = e.target.value;
    let regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
    let resulta = regx.test(emailregistre)
    if(resulta==true)
    {
    this.setState({ email: emailregistre })
    console.log(this.email.current.value);
    this.erroremail.current.style = " color : green"
    this.erroremail.current.innerHTML="email valide"
    }
    else
    { this.erroremail.current.innerHTML="email invalide"
    this.erroremail.current.style = " color : red"}
  }
  onchangepassword(e) {

    this.setState({ password: e.target.value })

  }
  onclick = e => {
    let regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
let x = regx.test(this.email.current.value)
      if(x === true)
    {
    console.log("click")
    localStorage.setItem('userfirstname', this.state.first_name);
    localStorage.setItem('userlastname', this.state.last_name);
    localStorage.setItem('email', this.state.email);
    localStorage.setItem('password', this.state.password);
    alert("votre donner a eter bien enregister")
    }
    else if (! regx.test(this.email.current.value))
    {
    alert("votre donner n'est pas valide")
    }

  }

  render() {
    return (
      <div>
        <nav >
          <Route>
            <div className="nav">
              <span  ><Link className="clor" to="/" >Identification</Link></span><span className="espace" ></span>
              <span><Link className="clor" to="/register" >Register</Link></span>
              <span ></span>
            </div>

          </Route>
        </nav>
        <section class="container">
          <div class="register">
            <h1>Register to watch last Movie</h1>
            <form >
              <div>
                <h3 title="Register" value="form register" />

                  <label className="colorgreyys">First name</label>
                <input
                  placeholder="First name"
                  value={this.state.first_name}
                  onChange={this.onchangefirstname}
                />
                 <small className="small" ref={this.namefirst}>alphabetique</small>
                <br />
                <label className="colorgreyys">Last name</label>
                <input
                  placeholder="Last Name"
                  onChange={this.onchangelastname.bind(this)}
                />
                   <small className="small" ref={this.namelaste}>alphabetique</small>
                <br />
                <label className="colorgreyys">email</label><br/>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={this.onchangeemail.bind(this)}
                  ref={this.email}
                />
                <p className="colorgreyys" ref={this.erroremail}>email valide</p>
                <br />
                <label className="colorgreyys">password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.onchangepassword.bind(this)}
                />
                <br />

              </div>
              <p className="submit"><input type="button" value="click" onClick={this.onclick}></input></p>
            </form>
          </div>
        </section>
      </div>

    );
  }
}
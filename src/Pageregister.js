import React, { Component } from 'react'
import "./csscomponent.css";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }
  onchangefirstname = e => {
    let name = e.target.value;

    this.setState({ first_name: name })
  }
  onchangelastname(e) {

    this.setState({ last_name: e.target.value })
  }
  onchangeemail(e) {

    this.setState({ email: e.target.value })
    console.log(this.email.current.value);
  }
  onchangepassword(e) {

    this.setState({ password: e.target.value })

  }
  onclick = e => {
    let regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
    console.log(regx.test((this.email.current.value)))


    console.log("click")
    localStorage.setItem('userfirstname', this.state.first_name);
    localStorage.setItem('userlastname', this.state.last_name);
    localStorage.setItem('email', this.state.email);
    localStorage.setItem('password', this.state.password);
    alert("votre donner a eter bien enregister")



  }

  render() {
    return (
      <div>
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
          <div class="register">
            <h1>Register to watch last Movie</h1>
            <form >
              <div>
                <h3 title="Register" value="form register" />


                <input
                  placeholder="First name"
                  value={this.state.first_name}
                  onChange={this.onchangefirstname}
                />
                <br />
                <input
                  placeholder="Last Name"
                  onChange={this.onchangelastname.bind(this)}
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={this.onchangeemail.bind(this)}
                  ref={this.email}
                />
                <br />
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
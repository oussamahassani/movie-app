import React, { Component, lazy, Suspense } from 'react';
import  Spiner from "./components/spinnersimple";

const Login = lazy(() =>
new Promise((resolve, reject) =>
  setTimeout(() => resolve(import("./Identification")), 2000)
))
export default class lazyidentification extends Component {
    render() {
  
    
    
        return (
            <div>
          <Suspense fallback={<Spiner/>}>
            <Login />
          </Suspense> 
         
            </div>
        )
    }
}

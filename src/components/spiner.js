import React from 'react'

function Spiner(WrappedComponent) {
    function Loading({ isLoading }) {
      return isLoading ?<>
      <div className="loader">
      <div className="inner one"></div>
     <div className="inner two"></div>
     <div className="inner three"></div>
     </div>
     <p className="animatetext">Loading</p>
   </>  : <WrappedComponent />;
    }
    return Loading;
  }
  export default Spiner;
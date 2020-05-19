import React , {useState,useEffect} from 'react'
import {  BrowserRouter, Switch,Route,Link} from 'react-router-dom'
import {useradmin}  from '../Identification'
import swal from 'sweetalert';
 function Nav() {
  let itilaisation = window.localStorage.getItem("userfirstname");
   if (useradmin.length>0)
   {
    itilaisation = useradmin[0];
    console.log('taille superieur a 1' , useradmin)
   }

  const [name, setstate] = useState(itilaisation)
  
useEffect(() => {   if(useradmin.length<1) 
  {
   
    let logbtn = document.getElementById("addmovie");
    logbtn.style.backgroundColor="green";
    logbtn.style=" display: none;"
    let navid = document.getElementById("navid");
    navid.style.backgroundColor="#f7f7f5";
     let image = document.getElementById("myImage");
     image.src="https://pngimage.net/wp-content/uploads/2018/05/admin-png-8.png"
     image.style.marginTop="20px"
    
     //image.src='https://raymanpc.com/wiki/en/File:Admin.png'
    console.log("hhhh")
  }
                                                                                            });
/*useEffect(() => {  
 namestorege =  localStorage.getItem("userfirstname")
  return () => {
setstate({ name: namestorege });
  
}, []})
 /* componentDidMount(){
    {  
    
       console.log("name " +namestorege)
 
   console.log("state" +  this.state.name)
    
    }}*/
    /*function alert(){
      alert ( "byby " + {name})
    }*/
  function   alertbyby ()
    {  let question = window.confirm("voulez vous quitez le site?")
          
      if (question)
      {
      
        swal(`byby  ${name}` );
        useradmin.length=0;

      console.log("log out " + useradmin)
       setTimeout(() => {  window.location.href = '/'
          
       }, 1000);
      }
     
    }
  
    return (
        <div>
             <nav className="mb-1 navbar navbar-expand-lg colorgrey " id="navid">
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
      <li className="nav-item" >
      <em id="addmovie"> <Link to='/addmovies'>Addmovies</Link> </em> 
      </li>
      <li className="nav-item">
      <em id="favorite"><Link to='/favorite'>Favorite</Link> </em> 
 </li>
    </ul>
    <ul className=" ml-auto nav-flex-icons">
      <p className="nav-item avatar">
      
          <img id="myImage" src="https://avatarfiles.alphacoders.com/190/190259.png" className="rounded-circle z-depth-0"
            alt="avatar image" height="35"/>
       
      </p>
    </ul>
    </Route>
             
  <div style={{float:"right",color:"#223343",fontSize:"20px",fontFamily:"sans-serif",padding:"10px 10px"}}>WELCOM {name}
  <button  className="logout button"  onClick ={alertbyby}>  Logout </button></div>    {/*<Link to="/">log out</Link>*/ }
  </div>
</nav>
        </div>
    )
}

export default Nav

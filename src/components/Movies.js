import React, { Component } from 'react'
import '../csscomponent.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Favorite from './addtofavorite';
import swal from 'sweetalert';
import listOfMovies from '../Listeofmovies'
import {  BrowserRouter, Switch,Route,Link} from 'react-router-dom'
import {useradmin}  from '../Identification'
let myFavoriteMovies = [];
let ids = [] ;

function Filmfavories(props) {
	return <img  onClick={props.onClick}  src="https://image.flaticon.com/icons/png/512/67/67034.png" alt="removetofavorit"  width="30" height="30"></img>
	//<button type="button" onClick={props.onClick} className="add button" color="success"  > Removetofavoris</button>;
}
function Rating({ number }) {
	let ratings = ""
	let etoil = '🌟'
	for (let i = 1; i <= number; i++) {
		ratings += etoil
		console.log(ratings)
	}


	return <span className="movie-rating">{ratings}</span>;
}

function FilmNotfavoris(props) {
	return  <img  onClick={props.onClick}  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/heavy-black-heart_2764.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/docomo/205/heavy-black-heart_2764.png 2x" alt="Red Heart" width="30" height="30"></img>
	/*<span onClick={props.onClick} className="remove button" value="removetofavorie" > 
	❤️ Addtofavori</span>;*/
}



class Movies extends Component {
	constructor(props) {
		super(props);
		this.addFavorite = this.addFavorite.bind(this);
		this.deleteFavorite = this.deleteFavorite.bind(this);
		this.state = {  modal: false , hide : false };
		this.toggle = this.toggle.bind(this);
		this.divmovieid = React.createRef();
		this.textInput = React.createRef();
	}


	
	
	
	
	
	
	
	
	
	
	

	toggle() {
		const id = this.props.identite;
        ids.push(id);
		this.setState(prevState => ({
			modal: !prevState.modal
		
		}));
	}
	functionidentite(e) {

		console.log(e.target.id)

	}

	addFavorite() {
		this.setState({ favoritemovie: true });
		const favoritemovie = this.props.identite;
		myFavoriteMovies.push(favoritemovie);
		console.log(myFavoriteMovies)
	}
	deleteFavorite() {
		this.setState({ favoritemovie: false });
		const favoritemovie = this.props.identite;
		myFavoriteMovies = myFavoriteMovies.filter(function (item) {
			return item !== favoritemovie
		})
		console.log(myFavoriteMovies)
	}

	hidemovie =  e =>{
	 if(useradmin.length>0)
	 {
	 let a =  e.target;
		a.style.display="none"
		this.divmovieid.current.style="display : none"
		e.preventDefault()
	 }
	 else
	 swal("hey hey ", "your are  not abel to dot that");
	// alert("vous navez pas l'acces a effacer un film")
	}
	 
	render() {

		const Isfav = this.state.favoritemovie;
		let favBtn;
		if (Isfav) {
			favBtn = <Filmfavories onClick={this.deleteFavorite} />;
		} else {
			favBtn = <FilmNotfavoris onClick={this.addFavorite} />;
		}
		if(this.textInput.current != null) {
		  this.textInput.current.style=" color: yellow"
		
		  }
		  
	 


	
	
		return (
			<div ref={this.divmovieid} className="flexworper" id={this.props.identite}>
				<div className="panel panel-default">
				<button className="button add" ><Link to={`/watch=?${this.props.identite}`}><span style={{color:"black",fontSize:"18px"}}>watch</span></Link></button>
				
					<div className="panel-heading">
					<p  onClick={this.hidemovie} style={{float:"right"}} >❌</p>
					 <h3 className="text-centre clor">	{this.props.name} </h3>
					</div>
					<div><img  className="centerimage" src={this.props.img} width="180px" alt="filmimage"></img></div>
					<div className="panel-body">
						<p ref={this.textInput} className="text-centre ">Year: {this.props.year}</p>
					</div>

			
				<div className="flex-between">
				<div>
					<button className="button info" onClick={this.toggle}   ><span>Movies details</span></button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}><p className="text-centre "  style={{ color: "red", fontSize: "25px" }}>Movies details</p></ModalHeader>
						<ModalBody>
							<div style={{ textAlign: "center" }}>
								<p id="accesadmin"> Name: <span style={{ color: "purple" }}>{this.props.name}</span>  </p>  <br></br>
								<p>  Year :<span style={{ color: "purple" }}>  {this.props.year} </span> </p><br></br>
								<p >  Decription : <span style={{ color: "purple" }}>{this.props.decription}</span>    </p> <br></br>
								<p> Rating :<Rating number={this.props.rating}></Rating></p>  <br></br>
							</div>
						</ModalBody>
						<ModalFooter>
						<div id="accesadmin">
							<Button color="secondary" onClick={this.toggle}>Cancel</Button>
						
		{useradmin.length >0 ?	<Button  ><Link to ="/Editermovie" id="editemovie">Edit  movie Number {/* {this.props.identite}*/ } </Link> </Button> : null }
							</div>
						</ModalFooter>
					</Modal>
				
				</div>
				{favBtn}

				</div>
				</div>
				{/*	<input type="button" value="opendetail" </input> */}
			

			</div>

		);
	}
}

export { Movies as default, myFavoriteMovies , ids }

import React, { Component } from 'react'
import '../csscomponent.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Favorite from './addtofavorite';
import listOfMovies from '../Listeofmovies'
import {  BrowserRouter, Switch,Route,Link} from 'react-router-dom'
let myFavoriteMovies = [];
let ids = [] ;

function Filmfavories(props) {
	return <button type="button" onClick={props.onClick} className="add button" color="success"  > Removetofavoris</button>;
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
	return <button onClick={props.onClick} className="remove button" value="removetofavorie" >Addtofavori</button>;
}
class Movies extends Component {
	constructor(props) {
		super(props);
		this.addFavorite = this.addFavorite.bind(this);
		this.deleteFavorite = this.deleteFavorite.bind(this);
		this.state = {  modal: false };
		this.toggle = this.toggle.bind(this);
		this.divmovieid = React.createRef();
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

	 let a =  e.target;
		a.style.display="none"
        this.divmovieid.current.style="display : none"
		e.preventDefault()

	}
	 
	render() {

		const Isfav = this.state.favoritemovie;
		let favBtn;
		if (Isfav) {
			favBtn = <Filmfavories onClick={this.deleteFavorite} />;
		} else {
			favBtn = <FilmNotfavoris onClick={this.addFavorite} />;
		}
		return (
			<div ref={this.divmovieid} className="flexworper" id={this.props.identite}>
				<div className="panel panel-default">
				<p  onClick={this.hidemovie} style={{float:"right"}} >❌</p>
					<div className="panel-heading">
						{this.props.name}
					</div>
					<div><img src={this.props.img} width="60%" alt="filmimage"></img></div>
					<div className="panel-body">
						Year: {this.props.year}
					</div>

				</div>
				<div>
					<button className="button info" onClick={this.toggle}><span >detaile film</span></button>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}><span style={{ color: "red", fontSize: "25px" }}>detaille film</span></ModalHeader>
						<ModalBody>
							<div style={{ textAlign: "center" }}>
								<p> name: <span style={{ color: "purple" }}>{this.props.name}</span>  </p>  <br></br>
								<p>  year :<span style={{ color: "purple" }}>  {this.props.year} </span> </p><br></br>
								<p >  decription : <span style={{ color: "purple" }}>{this.props.decription}</span>    </p> <br></br>
								<p> rating :<Rating number={this.props.rating}></Rating></p>  <br></br>
							</div>
						</ModalBody>
						<ModalFooter>
							   
							<Button color="secondary" onClick={this.toggle}>Cancel</Button>
							<Button  ><Link to ="/Editermovie">    editer  movie numero {this.props.identite} </Link> </Button>
						</ModalFooter>
					</Modal>
					{favBtn}
				</div>



				{/*	<input type="button" value="opendetail" </input> */}
			

			</div>

		);
	}
}

export { Movies as default, myFavoriteMovies , ids }

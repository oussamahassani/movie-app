import React ,  {useRef} from 'react'
import '../csscomponent.css'


function Rating({ number }) {
	let ratings = ""
	let etoil = '🌟'
	for (let i = 1; i <= number; i++) {
		ratings += etoil
		console.log(ratings)
	}


	return <span className="movie-rating">Rating :  {ratings}</span>;
} 

export default function Mapfavoritemovie(props) {
	const cardfavorite = useRef('')
   function hidemovie (e){
     
        
        let a =  e.target;
           a.style.display="none"
		   cardfavorite.current.style="display : none"
           e.preventDefault()
        
    }
    return (

    <div className="cardfavorite" id="cardfavorite" ref = {cardfavorite}>
      	<div className="c" id="c">
	   <p  onClick={hidemovie} style={{float:"right"}} >❌</p>
		<div className="panel-heading">
		 <h3 className="text-centre clor">Titel :	{props.name} </h3>
		</div>
		<div><img src={props.img} width="200px" alt="filmimage"></img></div>
		<div className="panel-body">
			<p className="text-centre ">Year: {props.year}</p>
		</div>
        <div className="ratting">
	    <Rating number={props.rating}></Rating>
      </div>
	</div>
	<div></div>
        </div>
    )
}

import React from 'react'
import '../csscomponent.css'
function Search ({ handleInput , search}   ) {

	return (
		<section className="searchbox-wrap margin-bottom">
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				
				onChange={handleInput}
				onKeyPress={search}
				style={{ width:"100%"}}
				className="searchbox" 
			/>
		</section>
	)
}

export default Search

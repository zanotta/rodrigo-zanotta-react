import React from 'react';
import './App.css';

class Photo extends React.Component {

	render(){
		
		const imgPath = require('./img/me.jpg');

		return (
			<div className="row">
				<div className="col-6 col-lg-2 offset-lg-5 offset-3 col-md-4 offset-md-4 mt-5">
					<img src={imgPath} className="img-fluid me" alt="Rodrigo Zanotta" />
				</div>
			</div>
		);

	}
}

export default Photo;

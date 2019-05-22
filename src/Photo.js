import React from 'react';
import './App.css';

function Photo() {

	const imgPath = require('./img/me.jpg');

	return (
		<div className="row">
			<div className="col-6 col-lg-2 offset-lg-5 offset-3 mt-5">
				<img src={imgPath} className="img-fluid me" alt="Rodrigo Zanotta" />
			</div>
		</div>
	);
}

export default Photo;

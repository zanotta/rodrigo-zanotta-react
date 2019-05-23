import React from 'react';
import './App.css';

function Social() {

	//React.Fragment é necessário quando não há um container por fora dos elementos
	return (
		<div className="row mt-5">

			<div className="col-2 offset-1 col-lg-2 text-center">
				<a href="https://github.com/zanotta" rel="noopener noreferrer" target="_blank">
					<i className="fab fa-github fa-3x"></i>
				</a>
			</div>

			<div className="col-2 col-lg-2 text-center">
				<a href="https://github.com/zanotta" rel="noopener noreferrer" target="_blank">
					<i className="fab fa-facebook fa-3x"></i>
				</a>
			</div>

			<div className="col-2 col-lg-2 text-center">
				<a href="https://github.com/zanotta" rel="noopener noreferrer" target="_blank">
					<i className="fab fa-twitter fa-3x"></i>
				</a>
			</div>

			<div className="col-2 col-lg-2 text-center">
				<a href="https://github.com/zanotta" rel="noopener noreferrer" target="_blank">
					<i className="fab fa-instagram fa-3x"></i>
				</a>
			</div>

			<div className="col-2 col-lg-2 text-center">
				<a href="https://github.com/zanotta" rel="noopener noreferrer" target="_blank">
					<i className="fab fa-linkedin fa-3x"></i>
				</a>
			</div>
			
		</div>
	);
}

export default Social;

import React from 'react';
import './App.css';

class Social extends React.Component {

	render(){

		//React.Fragment é necessário quando não há um container por fora dos elementos
		return (
			<div className="row mt-5">

				<div className="text-center mx-auto">
					<a href="https://github.com/zanotta" rel="noopener noreferrer" className="ml-3 mr-3" target="_blank" title="GitHub">
						<i className="fab fa-github fa-3x"></i>
					</a>
				
					<a href="https://facebook.com/rodrigozanotta" rel="noopener noreferrer" className="mr-3" target="_blank" title="Facebook">
						<i className="fab fa-facebook fa-3x"></i>
					</a>
				
					<a href="https://twitter.com/zanottaa" rel="noopener noreferrer" className="mr-3" target="_blank" title="Twitter">
						<i className="fab fa-twitter fa-3x"></i>
					</a>
				
					<a href="https://instagram.com/zanottaa" rel="noopener noreferrer" className="mr-3" target="_blank" title="Instagram">
						<i className="fab fa-instagram fa-3x"></i>
					</a>
				
					<a href="https://www.linkedin.com/in/rodrigozanotta" rel="noopener noreferrer" className="mr-3" target="_blank" title="Linkedin">
						<i className="fab fa-linkedin fa-3x"></i>
					</a>
				</div>
				
			</div>
		);

	}

}

export default Social;

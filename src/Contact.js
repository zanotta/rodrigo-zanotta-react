import React from 'react';
import './App.css';

class Contact extends React.Component {

	render(){

		return (
			<div className="row mt-5 mx-auto">

				<div className="text-center col-12 col-lg-12">

					<a href="https://blog.rodrigozanotta.com.br" rel="noopener noreferrer" target="_blank" title="E-mail">
						Blog
					</a>

					<br />

					<a href="mailto:contato@rodrigozanotta.com.br" rel="noopener noreferrer" target="_blank" title="E-mail">
						contato@rodrigozanotta.com.br
					</a>

					<br />

					55(51) 99877-0440

				</div>

			</div>
		);

	}

}

export default Contact;

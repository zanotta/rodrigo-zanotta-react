import React from 'react';
import './App.css';

class Presentation extends React.Component {

	//React.Fragment é necessário quando não há um container por fora dos elementos
	render(){
		
		const { userLanguage } = this.props;
		const job = userLanguage === 'pt-BR' ? 'Desenvolvedor Web' : 'Web Developer';

		return (
			<React.Fragment>
				<h1 className="text-center mt-3">Rodrigo Zanotta</h1>
				<h2 className="text-center mb-5">{job}</h2>
			</React.Fragment>
		);
	}

}

export default Presentation;

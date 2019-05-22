import React from 'react';
import './App.css';

function Presentation() {

	//React.Fragment é necessário quando não há um container por fora dos elementos
	return (
		<React.Fragment>
			<h1 className="text-center mt-3">Rodrigo Zanotta</h1>
			<h2 className="text-center mt-1">Desenvolvedor Web</h2>
		</React.Fragment>
	);
}

export default Presentation;

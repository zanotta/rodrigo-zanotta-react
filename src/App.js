import React from 'react';
import Photo from './Photo'
import Presentation from './Presentation'
import Social from './Social'
import './App.css';

class App extends React.Component {

	render(){

		return (
			<div className="container-fluid">
				<Photo />
				<Presentation />
				<Social />
			</div>
		);

	}
	
}

export default App;

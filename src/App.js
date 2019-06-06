import React from 'react';
import Photo from './Photo';
import Presentation from './Presentation';
import Social from './Social';
import Contact from './Contact';
import detectBrowserLanguage from 'detect-browser-language';
import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			userLanguage: detectBrowserLanguage()
		}

	}

	render(){

		return (
			<div className="container-fluid">
				<Photo />
				<Presentation userLanguage={this.state.userLanguage} param2='Rodrigo' />
				<Social />
				<Contact />
			</div>
		);

	}
	
}

export default App;

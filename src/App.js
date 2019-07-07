import React from 'react';
import Photo from './Photo';
import Presentation from './Presentation';
import Social from './Social';
import Contact from './Contact';
import detectBrowserLanguage from 'detect-browser-language';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			userLanguage: detectBrowserLanguage()
		}

	}

	Index(){
		return (
			<div className="container-fluid">
				<Photo />
				<Presentation userLanguage={'pt-br'} param2='Rodrigo' />
				<Social />
				<Contact />
			</div>
		);
	}


	Sobre(){
		return (
			<div className="container-fluid">
				<h2>Sobre Teste</h2>
			</div>
		);
	}


	render(){

		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/sobre/">Sobre</Link>
							</li>
						</ul>
					</nav>

					<Route path="/" exact component={this.Index} />
					<Route path="/sobre/" component={this.Sobre} />
				</div>
			</Router>
		);

	}
	
}

export default App;

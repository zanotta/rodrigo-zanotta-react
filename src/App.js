import React from 'react';
import Photo from './Photo'
import Presentation from './Presentation'
import Social from './Social'
import './App.css';

function App() {
	return (
		<div className="container-fluid">
			<Photo />
			<Presentation />
			<Social />
		</div>
	);
}

export default App;

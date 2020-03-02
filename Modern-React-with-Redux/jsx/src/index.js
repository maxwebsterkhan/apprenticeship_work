// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
	const buttonText ={ text: 'Click Me!'};
	const labelText = 'Enter text here:'
	return (
		<div>
		<label className="label" htmlFor="name">{labelText}</label>
	 	<input type="text" id="name"/>
	 	<button style={{backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
	 	</div>
	);
};

// Take the React Component and show it on the screen

ReactDOM.render(
	<App />,
    document.querySelector('#root')
);
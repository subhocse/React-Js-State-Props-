import './App.css';
import MyComponent from './MyComponent';
import { useState } from 'react';

function App() {
	const [myInfo, setMyInfo] = useState();
	const navigationClicked = (clickedName) => {
		setMyInfo(clickedName === 'home' ? 'Home Info' : 'Contact Info');
	};
	return (
		<>
			<button onClick={() => navigationClicked('home')}>Home</button>
			<button onClick={() => navigationClicked('contact')}>Contact</button>
			<MyComponent information={myInfo} />
		</>
	);
}

export default App;

import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';

const App = () => {
	const [showCounter, setShowCounter] = useState(true);

	return (
		<>
			<Button onClick={() => {setShowCounter(!showCounter)}}>Toggle Counter</Button>
			{ showCounter && <Counter />}
		</>
	);
}

export default App;
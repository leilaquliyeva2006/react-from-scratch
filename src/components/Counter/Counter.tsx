import { useEffect, useState } from 'react';
import ButtonPlus from './ButtonPlus/ButtonPlus';
import ButtonMinus from './ButtonMinus/ButtonMinus';
import Div from '../Div/Div';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [pressedButton, setPressedButton] = useState('');

	useEffect(() => {
		console.log('From useEffect: on mount and every update');
	})

	useEffect(() => {
		return () => {
			console.log('From useEffect: on unmount');
		}
	})

	useEffect(() => {
		console.log('From useEffect: only on mount');
	}, [])

	useEffect(() => {
		console.log('From useEffect: on mount and only `count` update');
	}, [count])

	useEffect(() => {
		console.log('From useEffect: on mount and only `pressedButton` update');
	}, [pressedButton])

	useEffect(() => {
		console.log('From useEffect: everything together');

		return () => {
			console.log('From useEffect: everything together (unmount)');
		}
	}, [count, pressedButton]);

	const handlePlus = (action: React.SetStateAction<number>) => {
		setCount(action);

		setPressedButton('+');
	}

	const handleMinus = (action: React.SetStateAction<number>) => {
		setCount(action);

		setPressedButton('-');
	}

	return (
		<>
			<Div>Pressed button was: { pressedButton }</Div>
			<ButtonPlus setCount={ handlePlus } />
			<Div>{ count }</Div>
			<ButtonMinus setCount={ handleMinus } count={ count } />
		</>
	);
}

export default Counter;
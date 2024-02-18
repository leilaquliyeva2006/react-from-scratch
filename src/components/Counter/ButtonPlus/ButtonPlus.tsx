import Button from '../../Button/Button';

type ButtonPlusProps = {
	setCount: React.Dispatch<React.SetStateAction<number>>
}

const ButtonPlus = ({ setCount }: ButtonPlusProps) => {
	const handlePlus = () => {
		setCount(prevCount => prevCount + 1);
		setCount(prevCount => prevCount + 1);
		setCount(prevCount => prevCount + 1);
		setCount(prevCount => prevCount + 1);
		setCount(prevCount => prevCount + 1);
	}

	return (
		<Button onClick={ handlePlus }>+</Button>
	)
}

export default ButtonPlus;
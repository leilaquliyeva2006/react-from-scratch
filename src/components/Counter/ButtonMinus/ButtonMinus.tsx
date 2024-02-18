import Button from '../../Button/Button';

type ButtonMinusProps = {
	setCount: React.Dispatch<React.SetStateAction<number>>;
	count: number
}

const ButtonMinus = ({ setCount, count }: ButtonMinusProps) => {
	const handleMinus = () => {
		setCount(count - 1);
		setCount(count - 1);
		setCount(count - 1);
		setCount(count - 1);
		setCount(count - 1);
	}

	return (
		<Button onClick={ handleMinus }>-</Button>
	)
}

export default ButtonMinus;
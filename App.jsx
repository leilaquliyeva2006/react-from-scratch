import './App.css';
import Form from './components/Form/Form';

const App = () => {
	const handleSubmit = formData => {
		console.log(formData);
	}

	const inputsData = [
		{
			labelText: 'Name:',
			name: 'name',
			type: 'text',
			pattern: '\\w{1,4}'
		},
		{
			labelText: 'Surname:',
			name: 'surname',
			type: 'text',
			pattern: '\\w{1,5}'
		},
		{
			labelText: 'Middle name:',
			name: 'middle-name',
			type: 'text',
			pattern: '\\w{1,6}'
		},
		{
			labelText: 'Middle name:',
			name: 'middle-name',
			type: 'text',
			pattern: '\\w{1,7}'
		}
	].map(inputData => {
		inputData.id = crypto.randomUUID();

		return inputData;
	})

	return (
		<Form onSubmit={handleSubmit} inputsData={inputsData} />
	);
}

export default App;
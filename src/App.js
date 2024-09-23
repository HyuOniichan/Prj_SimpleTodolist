import './App.css';
import { useState } from 'react';

function Header(props) {
	return (
		<h1>{props.title}</h1>
	)
}


function App() {

	const [todo, setTodo] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	function handleCreate() {
		setTodo([...todo, newTodo])
		setNewTodo('')
	}

	function handleDelete(delItem) {
		let deleted = false
		setTodo(todo.filter(e => {
			if (!deleted && (e === delItem)) {
				deleted = true
				return false
			}
			return true
		}));
	}

	return (
		<div style={{ padding: 20 }}>
			<Header title="Todo List" />
			<form className="d-flex flex-row align-items-center">
				<label htmlFor="name" className="form-label">Title</label>
				<input
					style={{ margin: 10, width: 300 }}
					className="form-control"
					id="name"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
				/>
				<button onClick={handleCreate} type="button" className="btn btn-primary">Create</button>
			</form>
			<ul>
				{todo.length ? todo.map((e, index) => {
					return (
						<li key={index}>
							<p style={{ display: "inline", marginRight: 10 }}>{e}</p>
							<button onClick={() => handleDelete(e)} className="btn-close"></button>
						</li>
					)
				}) : 'Nothing to do'}
			</ul>
		</div>
	)
}


// function App() {

// 	const [name, setName] = useState('') 

// 	console.log(name)

// 	return (
// 		<div>
// 			<input 
// 				value={name}
// 				onChange={e => setName(e.target.value)} 
// 			/> 
// 			<button onClick={() => setName('test')}>Change</button>
// 		</div>
// 	)
// }


export default App;

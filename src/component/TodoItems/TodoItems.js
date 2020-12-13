import React, {Component} from 'react';
import FlipMove from 'react-flip-move'

class TodoItems extends Component {
	constructor(props) {
		super(props)

		this.createTasks = this.createTasks.bind(this)
	}

	createTasks(item) {
		return (
			<li
				onClick={() => this.delete(item.key)}
				key={item.key}>{item.text}
			</li>
		)
	}

	delete(key) {
		this.props.delete(key)
	}

	render() {
		const todoEntries = this.props.entries
		const listItems = todoEntries.map(this.createTasks)
		return (
			<ul className="theList" style={{position: 'relative'}}>
				<FlipMove duration={250} easing="ease-out" typeName={null}>
					{listItems}
				</FlipMove>
			</ul>
		);
	}
}

export default TodoItems;
import React, {Component} from 'react'
import TodoItems from '../TodoItems/TodoItems'
import './TodoList.scss'

class TodoList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			items: []
		}

		this.addItem = this.addItem.bind(this)
		this.deleteItem = this.deleteItem.bind(this);
	}

	/* --------------------------------- ADD ITEM -------------------------------- */
	addItem(e) {
		const itemArray = this.state.items

		if (this._inputElement.value !== "") {
			itemArray.unshift(
				{
					text: this._inputElement.value,
					key: Date.now()
				}
			);

			this.setState({
				items: itemArray
			});

			this._inputElement.value = ""
			this._inputElement.focus()
		}
		console.log(itemArray) // TODO delete
		e.preventDefault()
	}

	/* ------------------------------- DELETE ITEM ------------------------------ */
	deleteItem(key) {
		const filteredItems = this.state.items.filter(function (item) {
			return (item.key !== key)
		})

		this.setState({
			items: filteredItems
		})
	}

	/* --------------------------------- RENDER --------------------------------- */
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input
							ref={(a) => this._inputElement = a}
							type="text"
							placeholder="enter task" />
						<button type="submit">ok</button>
					</form>
				</div>
				<TodoItems
					entries={this.state.items}
					delete={this.deleteItem}
				/>
			</div>
		);
	}
}

export default TodoList;
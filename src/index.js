import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import TodoList from './component/TodoList/TodoList'

const destination = document.querySelector('#container')

ReactDOM.render(
	<div>
		<TodoList />
	</div>,
	destination
)
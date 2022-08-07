import {createTodo} from "./createTodo.js";
import {updateLeftTodos} from "./updateLeftTodos.js";

/** 
 * State (данные) приложения
 * Список тудушек
 */
export const state = [
	{
		title: 'Go Shopping',
		completed: false
	},
	{
		title: 'Go for a walk',
		completed: true
	}
];

window.state = state;

/**
 * Добавляет тудушку в стейт (массив тудушек)
 * @param {string} title тайтл тудушки
 * @param {boolean} completed состояние 'да' или 'нет'
 */
 export const addTodo = (title, completed) => {
	const todo = {
		title,
		completed
	}
	state.push(todo);

	updateLeftTodos(state);
}

/**
 * Меняет состояние тудушки (сделано или не сделано)
 * @param {string} title тайтл тудушки
 */
 export const changeTodo = (title) => {
	const todo = state.find((todo) => todo.title === title);
	todo.completed = !todo.completed;

	updateLeftTodos(state);
}

/**
 * Удаляем тудушку
 * @param {string} title тайтл тудушки
 */
 export const deleteTodo = (title) => {
	const todoIndex = state.findIndex((todo) => todo.title === title)
	state.splice(todoIndex, 1);

	updateLeftTodos(state);
}

/**
 * Рендерит тудушки в доме
 */
export const render = () => {
	const todosList = document.querySelector('.todos__list')

	state.forEach((element) => {
		const todoHtml = createTodo(element.title)
		todosList.append(todoHtml)
	})
}

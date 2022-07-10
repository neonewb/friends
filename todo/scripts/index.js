import {checkTodo} from "./checkTodo.js";
import {initInput} from "./initInput.js";
import {initTodoList} from "./initTodoList.js";
import {initCheckBoxes} from "./initCheckBoxes.js";
import {initDeleteList} from "./initDeleteList.js";
import {updateLeftTodos} from "./updateLeftTodos.js";

initInput();
initTodoList();
initCheckBoxes();
initDeleteList();

/** 
 * State (данные) приложения
 * Список тудушек
 */
const todoArray = [];

window.state = todoArray;

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
	todoArray.push(todo);

	updateLeftTodos(todoArray);
}


/**
 * Меняет состояние тудушки (сделано или не сделано)
 * @param {string} title тайтл тудушки
 */
 export const changeTodo = (title) => {
	const todo = todoArray.find((todo) => todo.title === title);
	todo.completed = !todo.completed;

	updateLeftTodos(todoArray);
}


// Ищем все тудушки в дереве по классу todo__item
const todosList = document.querySelectorAll('.todo__item');

// Добавляем тудушки в массив
todosList.forEach(({innerText, classList}) => {
	const completed = classList.contains('todo__item_done')
	addTodo(innerText, completed)
});

updateLeftTodos(todoArray)

// Вешаем слушатель событий на каждую тудушку
// Слушаем событие click и выполняем коллбэк
todosList.forEach((todo) => {
	todo.addEventListener('click', (event) => {
		checkTodo(event);
	})
})

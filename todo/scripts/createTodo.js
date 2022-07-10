import {createElement} from './createElement.js';
import {checkTodo} from './checkTodo.js';
import {addTodo} from './index.js';

/** Создание новой тудушки */
export const createTodo = (event) => {
	const newTodoContainer = createElement('todo__item-container');
	const newTodoTitle = createElement('todo__title');

	const newTodo = createElement('todo__item');
	// Вставляем в новый элемент текст из инпута
	newTodo.innerText = event.target.value;

	// Добавили новую тудшку в стейт
	addTodo(event.target.value, false)

	// Вешаем слушатель на клик, чтобы отметить выполненной
	newTodo.addEventListener('click', (event) => {
		checkTodo(event)
	});

	const todoCheckbox = createElement('todo__check');
	// Вешаем слушатель событий на чекбокс
	todoCheckbox.addEventListener('click', (event) => {
		checkTodo(event)
	})	

	const todoDelete = createElement('todo__delete');
	todoDelete.innerHTML = `
		<svg width="22" height="22" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M53.8333 18.1617L49.8383 14.1667L34 30.005L18.1616 14.1667L14.1666 18.1617L30.005 34L14.1666 49.8384L18.1616 53.8334L34 37.995L49.8383 53.8334L53.8333 49.8384L37.995 34L53.8333 18.1617Z" fill="#AF2F2F" fill-opacity="0.15"/>
		</svg>
	`;

	// Вешаем слушатель событий на иконку удаления
	todoDelete.addEventListener('click', () => {
		// Удаляем родительский todo__item-container
		newTodoContainer.remove(); 
	})

	newTodoTitle.appendChild(todoCheckbox)
	newTodoTitle.appendChild(newTodo)
	newTodoContainer.appendChild(newTodoTitle)
	newTodoContainer.appendChild(todoDelete)

	return newTodoContainer;
}

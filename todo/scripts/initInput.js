import {createTodo} from './createTodo.js';
import {addTodo} from './state.js';

export const initInput = () => {
	// Ищем список тудушек в дереве по классу todos__list
	const todoList = document.querySelector('.todos__list');

	// Ищем инпут в дереве по классу todos__input
	const input = document.querySelector('.todos__input');
	input.placeholder = 'What needs to be done?';

	// Вешаем слушатель событий на инпут
	// Слушаем событие keydown и выполняем коллбэк
	input.addEventListener('keydown', (event) => {
		// Проверяем, что нажатая кливиша = Enter
		if (event.key === 'Enter') {
			const title = event.target.value
			// Создаём новую тудушку
			const newTodo = createTodo(title)
			// Добавляем тудушку в стейт
			addTodo(title, false)
			// Вставляем новый элемент в список
			// ToDo: перейти на render()
			todoList.appendChild(newTodo);
			// Очищаем инпут
			event.target.value = '';
		};
	})
}
import {createTodo} from './createTodo.js';

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
			// Создаём новую тудушку
			const newTodo = createTodo(event)
			// Вставляем новый элемент в список
			todoList.appendChild(newTodo);
			// Очищаем инпут
			event.target.value = '';
		};
	})
}
import {deleteTodo} from './state.js';

export const initDeleteList = () => {
	// Ищем все иконки удаления в дереве по классу todo__delete
	const deleteList = document.querySelectorAll('.todo__delete');

	// Вешаем слушатель событий на каждую иконку удаления
	// Слушаем событие click и выполняем коллбэк
	deleteList.forEach((deleteIcon) => {
		deleteIcon.addEventListener('click', () => {
			// Найти туду контейнер todo__item-container
			const todoContainer = deleteIcon.closest('.todo__item-container');
			const title = todoContainer.querySelector('.todo__item').innerText			
			todoContainer.remove();
			deleteTodo(title)
		})
	})
}

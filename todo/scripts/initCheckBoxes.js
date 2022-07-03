import {checkTodo} from "./checkTodo.js";

export const initCheckBoxes = () => {
	// Ищем все чекбоксы в дереве по классу todo__check
	const checkList = document.querySelectorAll('.todo__check');

	// Вешаем слушатель событий на каждый чекбокс
	// Слушаем событие click и выполняем коллбэк
	checkList.forEach((check) => {
		check.addEventListener('click', (event) => {
			checkTodo(event)
		})
	})
}
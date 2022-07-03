export const initTodoList = () => {
	// Ищем список тудушек в дереве по классу todos__list
	const todoList = document.querySelector('.todos__list');
	
	// Ищем скрывашку в дереве по классу todos__show-todos
	const showTodos = document.querySelector('.todos__show-todos');

	// Вешаем слушатель событий на скрывашку
	// Слушаем событие click и скрываем/показываем тудушки
	showTodos.addEventListener('click', () => {
		todoList.classList.toggle('todos__list_hidden');
		showTodos.classList.toggle('todos__show-todos_rotate');
	})
}

// Ищем инпут в дереве по классу todos__input
const input = document.querySelector('.todos__input');
input.placeholder = 'What needs to be done?';

// Ищем список тудушек в дереве по классу todos__list
const todoList = document.querySelector('.todos__list');

// Ищем все тудушки в дереве по классу todos__item
const todosList = document.querySelectorAll('.todos__item');

// Вешаем слушатель событий на инпут
// Слушаем событие input и выполняем коллбэк
input.addEventListener('input', (event) => {
	console.log(event.target.value);
})

// Вешаем слушатель событий на инпут
// Слушаем событие keydown и выполняем коллбэк
input.addEventListener('keydown', (event) => {
	// Проверяем, что нажатая кливиша = Enter
	if (event.key === 'Enter') {
		// Создаём новый элемент - div
		const newTodo = document.createElement('div');
		// Вешаем класс
		newTodo.classList.add('todos__item');
		// Вставляем в новый элемент текст из инпута
		newTodo.innerText = event.target.value;
		
		// Вешаем слушатель на клик, чтобы отметить выполненной
		newTodo.addEventListener('click', (event) => {
			event.target.classList.toggle('todos__item_done');
		});

		// Вставляем новый элемент в список
		todoList.appendChild(newTodo);
		// Очищаем инпут
		event.target.value = '';
	};
})

// Вешаем слушатель событий на каждую тудушку
// Слушаем событие click и выполняем коллбэк
todosList.forEach((todo) => {
	todo.addEventListener('click', (event) => {
		event.target.classList.toggle('todos__item_done');
	})
})

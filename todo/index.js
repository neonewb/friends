// Ищем инпут в дереве по классу todos__input
const input = document.querySelector('.todos__input');
input.placeholder = 'What needs to be done?';

// Ищем список тудушек в дереве по классу todos__list
const todoList = document.querySelector('.todos__list');

// Ищем все тудушки в дереве по классу todos__item
const todosList = document.querySelectorAll('.todos__item');

// Ищем все иконки удаления в дереве по классу todos__delete
const deleteList = document.querySelectorAll('.todos__delete');

// Вешаем слушатель событий на инпут
// Слушаем событие input и выполняем коллбэк
input.addEventListener('input', (event) => {
	console.log(event.target.value);
})


/** Создание новой тудушки */
const createTodo = (event) => {
	// Создаём новый элемент - div
	const newTodoContainer = document.createElement('div');
	// Вешаем класс контейнера
	newTodoContainer.classList.add('todo__item-container');

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

	// Создаём новый элемент - div
	const todoDelete = document.createElement('div');
	// Вешаем класс удаления
	todoDelete.classList.add('todos__delete');
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

	newTodoContainer.appendChild(newTodo)
	newTodoContainer.appendChild(todoDelete)

	return newTodoContainer;
}

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

// Вешаем слушатель событий на каждую тудушку
// Слушаем событие click и выполняем коллбэк
todosList.forEach((todo) => {
	todo.addEventListener('click', (event) => {
		event.target.classList.toggle('todos__item_done');
	})
})

// Вешаем слушатель событий на каждую иконку удаления
// Слушаем событие click и выполняем коллбэк
deleteList.forEach((deleteIcon) => {
	// Достаём родительский элемент
	const parentElement = deleteIcon.parentElement;

	deleteIcon.addEventListener('click', (event) => {
		// Удаляем родительский todo__item-container
		parentElement.remove(); 
	})
})

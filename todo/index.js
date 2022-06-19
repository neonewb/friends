// Ищем инпут в дереве по классу todos__input
const input = document.querySelector('.todos__input');
input.placeholder = 'What needs to be done?';

// Ищем список тудушек в дереве по классу todos__list
const todoList = document.querySelector('.todos__list');

// Ищем скрывашку в дереве по классу todos__show-todos
const showTodos = document.querySelector('.todos__show-todos');

// Ищем все тудушки в дереве по классу todo__item
const todosList = document.querySelectorAll('.todo__item');

// Ищем все иконки удаления в дереве по классу todo__delete
const deleteList = document.querySelectorAll('.todo__delete');

// Ищем все чекбоксы в дереве по классу todo__check
const checkList = document.querySelectorAll('.todo__check');

// Вешаем слушатель событий на скрывашку
// Слушаем событие click и скрываем/показываем тудушки
showTodos.addEventListener('click', () => {
	todoList.classList.toggle('todos__list_hidden');
	showTodos.classList.toggle('todos__show-todos_rotate');
})

/**
 * Создаёт новый элемент
 * @param {*} className имя класса
 * @param {*} element элемент (по дефолту div)
 */
const createElement = (className, element = 'div') => {
	const newElement = document.createElement(element);
	newElement.classList.add(className);
	return newElement;
};

/**
 * Отмечает тудушку выполненной
 * @param {*} event
 */
const checkTodo = (event) => {
	const todoEl = event.target.closest('.todo__title');

	todoEl.querySelector('.todo__item').classList.toggle('todo__item_done');

	const checkEl = todoEl.querySelector('.todo__check');
	// Проверяем есть ли чекбокс внутри
	if (checkEl.children.length) {
		// Удаляем внутренности
		checkEl.innerHTML = '';
	} else {
		// Добавляем галочку
		checkEl.innerHTML = `
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.6 15.6L4.4 11.4L3 12.8L8.6 18.4L20.6 6.4L19.2 5L8.6 15.6Z" fill="#2FAFAF"/>
			</svg>
		`;
	}
};

/** Создание новой тудушки */
const createTodo = (event) => {
	const newTodoContainer = createElement('todo__item-container');
	const newTodoTitle = createElement('todo__title');

	const newTodo = createElement('todo__item');
	// Вставляем в новый элемент текст из инпута
	newTodo.innerText = event.target.value;

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
		checkTodo(event)
	})
})

// Вешаем слушатель событий на каждую иконку удаления
// Слушаем событие click и выполняем коллбэк
deleteList.forEach((deleteIcon) => {
	deleteIcon.addEventListener('click', () => {
		// Найти туду контейнер todo__item-container
		deleteIcon.closest('.todo__item-container').remove(); 
	})
})

// Вешаем слушатель событий на каждый чекбокс
// Слушаем событие click и выполняем коллбэк
checkList.forEach((check) => {
	check.addEventListener('click', (event) => {
		checkTodo(event)
	})
})

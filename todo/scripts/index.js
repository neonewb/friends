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

/** Список тудушек */
const todoArray = [];

// Ищем все тудушки в дереве по классу todo__item
const todosList = document.querySelectorAll('.todo__item');

// Добавляем тудушки в массив
todosList.forEach((node) => {
	const todo = {
		// Достаём тайтл
		title: node.innerText,
		// Достаём состояние сделано или нет
		completed: node.classList.contains('todo__item_done'),
	}
	todoArray.push(todo);
});

updateLeftTodos(todoArray)

// Вешаем слушатель событий на каждую тудушку
// Слушаем событие click и выполняем коллбэк
todosList.forEach((todo) => {
	todo.addEventListener('click', (event) => {
		checkTodo(event)
	})
})

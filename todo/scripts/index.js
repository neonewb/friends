import {initInput} from './initInput.js';
import {initTodoList} from './initTodoList.js';
import {initCheckBoxes} from './initCheckBoxes.js';
import {initDeleteList} from './initDeleteList.js';
import {updateLeftTodos} from './updateLeftTodos.js';
import {state, render} from './state.js';

/**
 * TODO:
 * Баг с рендером тудушки - состояние неправильное
 * Фильтрация активных/завершённых
 * Редактирование татйла у тудушек
 * Очистка завершённых
 * Анимация сворачивания
 * Сохранение тудушек в local storage
 */

initInput();
initTodoList();
initCheckBoxes();
initDeleteList();
render();
updateLeftTodos(state)

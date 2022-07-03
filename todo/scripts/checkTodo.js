/**
 * Отмечает тудушку выполненной
 * @param {MouseEvent} event
 */
export const checkTodo = (event) => {
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

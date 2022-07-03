/**
 * Создаёт новый элемент
 * @param {string} className имя класса
 * @param {string} element элемент (по дефолту div)
 * @returns {HTMLElement} HTMLElement
 */
export const createElement = (className, element = 'div') => {
	const newElement = document.createElement(element);
	newElement.classList.add(className);
	return newElement;
};

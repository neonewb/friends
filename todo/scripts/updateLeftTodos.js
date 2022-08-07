
const left = document.querySelector('.todos__left')

/**
 * Обновляем количество незавершённых тудушек
 * @param {array} todoArray 
 */
export const updateLeftTodos = (todoArray) => {
	// Количество незавершённых тудушек
	let uncompletedCount = 0
	// Считаем количество незавершённых тудушек
	todoArray.forEach((el) => {
		if (el.completed === false){
			uncompletedCount++
		} 
	})

	// Показываем количество незавершённых тудушек
	left.innerText = `${uncompletedCount} todos left`
}

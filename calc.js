// Вывести максимальное из 10 рандомных чисел целых чисел

function maxRandomNumber() {
	let maxRandomNumber = 0;
	
	for (let i = 0; i < 10; i++) {
		const num = randomNumber(8, 10)
		
		console.log({num});
		
		if (num > maxRandomNumber) {
			maxRandomNumber = num;
		}
	}

	return maxRandomNumber;
}

console.log(maxRandomNumber())



// Возвращает рандомное число от min до max
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

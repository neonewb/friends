console.log('WORLD')
console.log('WORLD')
console.log('WORLD')
console.log('WORLD')


function logPyramids(height, symbol, step) {
	let strLength = 1

	for (let row = 0; row < height; row++) {
		let str = ''

		for (let j = 0; j < strLength; j++) {
			str += symbol
		}
		
		console.log(str)
		strLength += step
	}
}

logPyramids(4, '0', 2)

// 6.2*) Вывести пирамиду чисел(строк?)
//    0
//   000
//  00000
// 0000000


// 7*) вывести пирамиду чисел(строк?)
//
// ___1
// __123
// _12345
// 1234567



// 8*) вывести пирамиду чисел(строк?)
//
// ___1
// __121
// _12321
// 1234321 


// 9*) Вывести все простые числа от 1 до 1000

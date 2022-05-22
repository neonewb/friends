function first(callback) {
	console.log('first func')
	if (true) {
		callback()
	}
}

function second() {
	console.log('second func')
}

// first(second)

function stringToNumber(string) {
	return Number(string)
}

const arrayString = ['1', '2', '3']
const arrayNumber = arrayString.map(stringToNumber)

console.log(arrayNumber)

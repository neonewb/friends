// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(str) {
	let str2 = ''

	for (let char of str) {
		if (' ' !== char) {
			str2 += char
		}
	}

    return str2
}

console.log(noSpace('hello world')) //=> 'helloworld'
console.log(noSpace('hello world asd asd')) //=> 'helloworldasdasd'

// Write a function that returns a string in which firstname is swapped with last name.

const name = 'John McClane'

function nameShuffler(name) {
	return name.split(' ').reverse().join(' ')
}


console.log(nameShuffler(name)); // => "McClane John"
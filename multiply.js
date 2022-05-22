let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
	const newObj = JSON.parse(JSON.stringify(menu))

	for (const key in newObj) {
		if (typeof newObj[key] === 'number') {
			console.log('number')
			newObj[key] *= 2
        }
	}

	return newObj
}

console.log(menu)
console.log(multiplyNumeric(menu))

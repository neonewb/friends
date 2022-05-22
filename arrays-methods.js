const forEach = (arr, callback) => {
	for (let i = 0; i<arr.length; i++) {
		callback(arr[i], i, arr)
	}
}

const arr = [1,2,3]

forEach(arr, (element, index, arr) => {
	console.log('element: ', element)
	console.log('index: ', index)
	console.log('arr: ', arr)
})

arr.forEach((element, index, arr) => {
	console.log('element: ', element)
	console.log('index: ', index)
	console.log('arr: ', arr)
})

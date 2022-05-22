// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
}

console.log(countSheeps([true])) //=> 1
console.log(countSheeps([false])) //=> 0
console.log(countSheeps([true, false])) //=> 1
console.log(countSheeps([true,  true,  true,  false,
	true,  true,  true,  true ,
	true,  false, true,  false,
	true,  false, false, true ,
	true,  true,  true,  true ,
	false, false, true,  true])) //=> 17
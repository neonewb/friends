

// const twoSum = (nums, target) => {
// 	for (let i = 0; i < nums.length; i++) {
//         const num1 = nums[i]
		
// 		for (let j = i+1; j < nums.length; j++) {
// 			const num2 = nums[j]
//             const sum =  num1 + num2

//             if (sum === target) {
//                 return [i,j]
//             }
// 		}
//     }
// }

const twoSum = (nums, target) => {
    const hash = {}

	for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i]
		const num2 = target - num1
		
		if (hash[num2] !== undefined) {
			return [hash[num2], i]
		}

		hash[num1] = i
    }

}

// Test case 1:
const input1 = [2,7,11,15]
const target1 = 9
const output1 = [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const output11 = twoSum(input1, target1)
console.log('Test case 1')
console.log(output11[0] === output1[0] && output11[1] === output1[1])
console.log('')

// Test case 2:
const input2 = [3,2,4]
const target2 = 6
const output2 = [1,2]

const output22 = twoSum(input2, target2)
console.log('Test case 2')
console.log(output22[0] === output2[0] && output22[1] === output2[1])
console.log('')

// Test case 3:
const input3 = [3,3]
const target3 = 6
const output3 = [0,1]

const output33 = twoSum(input3, target3)
console.log('Test case 3')
console.log(output33[0] === output3[0] && output33[1] === output3[1])
console.log('')

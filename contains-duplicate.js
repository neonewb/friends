/**
 * Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */

/**
 * Проверяет дубликаты
 */
// const containsDuplicate = (nums) => {
// 	let nums2 = []
// 	let isContainsDuplicate = false

// 	for (let i = 0; i < nums.length; i++) {
// 		const currentNum = nums[i]
// 		const isIncludeNumber = nums2.includes(currentNum)

// 		if (isIncludeNumber) {
// 			isContainsDuplicate = true
// 		} else {
// 			nums2.push(currentNum)
// 		}
// 	}

// 	return isContainsDuplicate
// }

/**
 * Проверяет дубликаты
 */
// const containsDuplicate2 = (nums) => {
// 	nums.sort((a, b) => b - a)

// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === nums[i + 1]) {
// 			return true
// 		}
// 	}

// 	return false
// }

/**
 * Проверяет дубликаты
 */
const containsDuplicate = (nums) => {
	const set = new Set()

	for (const num of nums) {
		if (set.has(num)) {
			return true
		} else {
			set.add(num)
		}
	}

	return false
}

const result = containsDuplicate([1, 3, 1, 2])
console.log({ result })

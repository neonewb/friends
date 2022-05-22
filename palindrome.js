// https://leetcode.com/problems/valid-palindrome/
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// 'anna'
// 'add' !== 'dda'
// 'a' === 'a' /=> true
// 'a' === 'b' /=> false

// const string = "A man, a plan, a canal: Panama"
const string = "anna"

function isPalindrome(string) {
	const regex = /[^a-z0-9]/g
	const filteredString = string.toLowerCase().replace(regex, '')

	console.log(filteredString)

	if (filteredString.length === 1) {
		return true
	}

	const reversedString = filteredString.split('').reverse().join('')
	return filteredString === reversedString

    for (let i = 0, j = filteredString.length - 1; i <= j; i++, j--) {
		if (filteredString.charAt(i) !== filteredString.charAt(j)) {
			return false
		}
	}

	return true
}

console.log(isPalindrome(string))


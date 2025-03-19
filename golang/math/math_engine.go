package math_package

// Given an array, return number that is the sum of:
// 1. The product of all non-negative numbers
// 2. The sum of all negative numbers
func MathEngine(arr []int) int {
	// Check if array has any elements
	if len(arr) < 1 {
		return 0
	}

	// Product of numbers is the the result of multiplying
	product := 1
	negativeSum := 0

	for _, n := range arr {
		if n < 0 {
			negativeSum += n
		} else {
			product *= n
		}
	}

	return negativeSum + product
}

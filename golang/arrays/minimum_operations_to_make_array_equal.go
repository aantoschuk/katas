package arrays

// Leetcode: 3375

// Given array nums and int k, find h, which is valid only,
// if elements in array bigger than k occur more than once.
// and than change those element for h. aka 10, 10, 8 so h is 9. after change
// they would be 9, 9, 8.
// and calculate how many times i need to do that, so all elements are equal to k
// return -1 if it's impossible to do so
func MinimumOperation(nums []int, k int) int {
	// if there are elements lower than k, it's mean we cannot transform to k
	for _, v := range nums {
		if v < k {
			return -1
		}
	}

	// save unique numbers only and which is bigger than k
	set := make(map[int]struct{})

	for _, v := range nums {
		if _, exists := set[v]; v > k && !exists {
			set[v] = struct{}{}
		}
	}

	// as we have unique numbers which is h > k. It means we need to change every element,
	// so the size of set == result of the challenge.
	return len(set)
}

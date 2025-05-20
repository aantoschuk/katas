package dynamic

// Given integer aray, find as we can reach the last index or not,
// starting from index +1 and arr[i] value means we jump to forward that many indexesmath.
// so if the result is bigger or equal then the lenght of the array return true, otherwise false
func CanJump(nums []int) bool {
	reach := 0
	for i := 0; i < len(nums); i++ {
		if i > reach {
			return false
		}
		reach = max(reach, i+nums[i])

	}
	return true
}

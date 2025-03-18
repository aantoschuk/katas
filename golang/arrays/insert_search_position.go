// Given a sorted array of integers and a target value,
// return the index if the target is found
// if not, return the index where it would be if it were inserted in order
package arrays

func insertSearchPosition(nums []int, target int) int {
	for i, v := range nums {
		if v >= target {
			return i
		}
	}

	return len(nums)
}

// since it was stated that the problem should be solved with O(log n) complexity,
// I used binary search.
func InsertSearchPosition(nums []int, target int) int {
	low, high := 0, len(nums)

	// while loop
	for low <= high {
		// find  mid of the array.
		mid := low + (high-low)/2
		if nums[mid] == target {
			return mid
		} else if nums[mid] < target {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return low
}

// Given an integer array and an integer k, return the number of pairs (i, j),
// such that |i - j| == k
package hashtable

// Basically check every pair and do i - j == k
// or in other words i +- k == j
func CountKDifference(nums []int, k int) int {
	m := make(map[int]int)
	r := 0

	for _, n := range nums {
		// Add the count of valid pairs where the difference is k
		if v, e := m[n+k]; e {
			r += v
		}
		// As it stated that Absolute so i check negative too
		if v, e := m[n-k]; e {
			r += v
		}

		// After checking, increment the count for the current number n
		m[n]++
	}

	return r
}

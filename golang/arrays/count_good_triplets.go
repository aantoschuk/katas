/*
Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
Where |x| denotes the absolute value of x.

Return the number of good triplets.

So basically brute force, check every triplet by using loop for every number,
and check conditions to for selecting thoose triplets.
*/

package arrays

// math.Abs is working with float only
func absInt(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func CountGoodTriplets(arr []int, a int, b int, c int) (res int) {
	l := len(arr)
	res = 0
	for i := 0; i < l; i++ {
		for j := i + 1; j < l; j++ {
			if int(absInt(arr[i]-arr[j])) <= a {
				for k := j + 1; k < l; k++ {
					if absInt(arr[j]-arr[k]) <= b && absInt(arr[i]-arr[k]) <= c {
						res++
					}
				}
			}
		}
	}
	return
}

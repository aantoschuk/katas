package main

/*
 * There are n kids with candies.
 * Each number in array represents numbers of candies kid has
 * and an integer extra denoting the number of extra candies that you have
 * return a boolean array of length n where element true or false if kid have greatest number of candies
 * after giving all the extra candies to the kid
 */

func KidsWithCandies(n []int, extra int) []bool {
	max := 0
	for _, c := range n {
		if max < c {
			max = c
		}
	}
	res := make([]bool, len(n))
	for i, c := range n {
		if c+extra >= max {
			res[i] = true
		} else {
			res[i] = false
		}
	}
	return res
}

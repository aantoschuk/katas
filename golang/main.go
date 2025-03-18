package main

import (
	"fmt"

	"example.com/m/arrays"
)

func main() {
	nums := []int{1, 2, 3, 0, 0,0 }
	nums2 := []int{2, 4, 6}

	res := arrays.Merge(nums, 3, nums2, 3)

	fmt.Println(res)
}

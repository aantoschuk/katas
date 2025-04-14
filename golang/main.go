package main

import (
	"fmt"

	"example.com/m/arrays"
)

func main() {
	nums := []int{3, 0, 1, 1, 9, 7}

	res := arrays.CountGoodTriplets(nums, 7, 2, 3)
	fmt.Println(res)
}

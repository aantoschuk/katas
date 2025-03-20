package main

import (
	"fmt"

	hashtable "example.com/m/hash_table"
)

func main() {
	nums := []int{1, 2, 2, 1}

	res := hashtable.CountKDifference(nums, 1)
	fmt.Println(res)
}

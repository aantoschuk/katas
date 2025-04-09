package main

import (
	"fmt"

	"example.com/m/arrays"
)

func main() {
	nums := []int{5, 2, 5, 4, 5}

	res := arrays.MinimumOperation(nums, 2)
	fmt.Println(res)
}

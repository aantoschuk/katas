package main

import (
	"fmt"

	math_package "example.com/m/math"
)

func main() {
	nums := []int{1, 2, 3, -4, -5}

	res := math_package.MathEngine(nums)
	fmt.Println(res)
}

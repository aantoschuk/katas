package main

import (
	"fmt"
)

func main() {
	array := []int{1, 3, 5, 7, 9}
	value := 8

	res, steps := binarySearch(array, value)
	fmt.Println(res, steps)
}

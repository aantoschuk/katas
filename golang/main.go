package main

import (
	"fmt"

	dynamic "example.com/m/dynamic_programming"
)

func main() {
	nums := []int{7, 6, 4, 3, 1}

	res := dynamic.StocksProfit(nums)
	fmt.Println(res)
}

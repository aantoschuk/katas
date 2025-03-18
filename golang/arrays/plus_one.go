package arrays

import (
	"fmt"
	"strconv"
	"strings"
)

func PlusOne(digits []int) []int {
	var builder strings.Builder

	for _, num := range digits {
		builder.WriteString(strconv.Itoa(num))
	}

	digit, err := strconv.Atoi(builder.String())
	if err != nil {
		fmt.Println("Error converting string to number", err)
		return []int{}
	}

	var res []int

	digit = digit + 1
	for digit > 0 {
		n := digit % 10
		res = append([]int{n}, res...)
		digit /= 10
	}

	return res
}

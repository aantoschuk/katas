package main

/*
* Write function which accepts number and return 'even' or 'odd'
* string based on that number
 */

func EvenOrOdd(i int) string {
	if i%2 == 0 {
		return "Even"
	}
	return "Odd"
}

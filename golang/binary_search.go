package main

// Running time is O(log2 n) where n is number of elements
func binarySearch(array []int, value int) (int, int) {
	// initialize two pointers at the start and end of the array
	low := 0
	high := len(array) - 1
	// i cound steps just for this example
	steps := 0
	// iterate low and high point to the same element
	for low < high {
		// find middle or median of the array, but i guess median is a bit wrong word here
		middle := (low + high) / 2
		steps++
		// means we should look at the upper range of the array
		if value > array[middle] {
			low = middle + 1
		} else {
			// see lower range of indexes
			high = middle - 1
		}
		// return two items, index of the element
		// and how much iterations does it take to find it
		if value == array[middle] {
			return middle, steps
		}
	}
	// if there is no searched element
	return -1, steps
}

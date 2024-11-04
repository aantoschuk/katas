package main

import (
	"fmt"
	"katas/golang/data_structures"
)

func main() {
	fmt.Println("Hello World")
	list := data_structures.LinkedList[int]{}
	list.Push(1)
	list.Push(2)
	list.Push(3)
	list.Reverse()
	fmt.Println(&list)
	list.Delete(1, true)
	fmt.Println(&list)
}

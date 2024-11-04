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
	fmt.Println(&list)
}

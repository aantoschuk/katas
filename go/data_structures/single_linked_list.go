package data_structures

import (
	"fmt"
	"strings"
)

/*
 * Single Linked List
 * Contains nodes with Value and pointer to the next Node
 */

// Create Node struct generic type
type Node[T any] struct {
	Next  *Node[T]
	Value T
}

// Linked List struct which contains only 1 Node called Head
type LinkedList[T any] struct {
	Head *Node[T]
}

// Push new value to the end of the LinkedList
// so instead of Head.Next == nil we have Next = *Node
func (list *LinkedList[T]) Push(value T) {
	root := &Node[T]{Value: value}

	// Check if list is an empty
	if list.Head == nil {
		list.Head = root
		return
	}

	// Otherwise find last Node
	// and add to it a new one
	current := list.Head
	for current.Next != nil {
		current = current.Next
	}
	current.Next = root
}

// Print all Linked List value
func (list *LinkedList[T]) String() string {
	// To concatenate strings use Builder
	var sb strings.Builder
	current := list.Head
	for current != nil {
		// Ensure that we convert value to the string type
		line := fmt.Sprintf("%v ", current.Value)
		// As Wrote accepts []byte we use WriteString
		sb.WriteString(line)
		current = current.Next
	}
	// Form a string
	return sb.String()
}

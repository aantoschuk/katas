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
type Node[T comparable] struct {
	Next  *Node[T]
	Value T
}

// Linked List struct which contains only 1 Node called Head
type LinkedList[T comparable] struct {
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

// Delete Node from the LinkedList, with flag for all occurrences
func (list *LinkedList[T]) Delete(value T, flag bool) {
	// List is an empty
	if list.Head == nil {
		return
	}
	// Handle cases where we need to delete head
	if list.Head.Value == value {
		list.Head = list.Head.Next
		if !flag {
			return
		}
	}
	// Delete next Node
	current := list.Head
	for current.Next != nil {
		if current.Next.Value == value {
			current.Next = current.Next.Next
			if !flag {
				return
			}
		} else {
			current = current.Next
		}
	}
}

// Return true or false if value in the LinkedList or not
func (list *LinkedList[T]) Search(value T) bool {
	if list.Head == nil {
		return false
	}

	current := list.Head
	for current != nil {
		if current.Value == value {
			return true
		}
		current = current.Next
	}
	return false
}

func (list *LinkedList[T]) Reverse() {
	if list.Head == nil {
		return
	}

	var prev *Node[T]
	var next *Node[T]
	current := list.Head
	for current != nil {
		next = current.Next
		current.Next = prev
		prev = current
		current = next
	}
	list.Head = prev
}

// Print all Linked List value
func (list *LinkedList[T]) String() string {

	if list.Head == nil {
		return "nil" // Handle empty list
	}

	// To concatenate strings use Builder
	var sb strings.Builder
	current := list.Head
	for current != nil {
		// Ensure that we convert value to the string type
		line := fmt.Sprintf("%v", current.Value)
		// As Wrote accepts []byte we use WriteString
		sb.WriteString(line + " -> ")
		current = current.Next
	}

	sb.WriteString("nil")
	// Form a string
	return sb.String()
}

/*
 * TODO: add functions such as
 * Count / Length - count Numbers of nodes
 * Sort - which will sort LinkedList
 * Detect Loop - check if Node pointing to another previous Node
 */

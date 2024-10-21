package main

import (
	"reflect"
	"testing"
)

func TestKidsWithCandies(t *testing.T) {
	t.Log("Kids with candies First Test")
	kids := []int{2, 3, 5, 1, 3}
	extra := 3
	res := KidsWithCandies(kids, extra)
	should := []bool{true, true, true, false, true}
	if !reflect.DeepEqual(res, should) {
		t.Fatalf(`Expected %v to be equal %v`, res, should)
	}
}

package main

import (
	"regexp"
	"testing"
)

func TestShouldBeOdd(t *testing.T) {
	i := 5
	want := regexp.MustCompile("Odd")
	msg := EvenOrOdd(i)
	if !want.MatchString(msg) {
		t.Fatalf(`Expected "Odd" for input %d; got %q, want match for %#q`, i, msg, want)
	}
}

func TestShouldBeEven(t *testing.T) {
	i := 4
	want := regexp.MustCompile("Even")
	msg := EvenOrOdd(i)
	if !want.MatchString(msg) {
		t.Fatalf(`Expected "Even" for input %d; got %q, want match for %#q`, i, msg, want)
	}
}

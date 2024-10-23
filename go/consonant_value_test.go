package main

import (
	"testing"
)

func TestConsonantValueFirst(t *testing.T) {
	s := "zodiac"
	got := consonantValue(s)
	if got != 26 {
		t.Fatalf(`Expected 26 for the string %s but got %d`, s, got)
	}
}

func TestConsonantValueSecond(t *testing.T) {
	s := "strength"
	got := consonantValue(s)
	if got != 57 {
		t.Fatalf(`Expected 57 for the string %s but got %d`, s, got)
	}
}

func TestConsonantValueThird(t *testing.T) {
	s := "bup"
	got := consonantValue(s)
	if got != 16 {
		t.Fatalf(`Expected 17 for the string %s but got %d`, s, got)
	}
}

func TestConsonantValueFourth(t *testing.T) {
	s := "abababababfapeifapefijaefaepfjavnefjnfbhwyfnjsifjapnes"
	got := consonantValue(s)
	if got != 143 {
		t.Fatalf(`Expected 143 for the string %s but got %d`, s, got)
	}
}

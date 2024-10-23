package main

/*
 * Given lowercase string, that consists only of alphabetic characters,
 * return the highest value of consonant substring

 * example: zodiac -> 26. As a value z,d,c and longest substring is only length of 1 and highest values among them is 26
 * strength -> 57. str and ngth so the answer is str=19+20+18=57

 - first need to find consonant in the string, by iterating and checking every character
 - after that i need to calculate sum of that substring value, possible runic would be a solution
 - store additional int variable that will hold maximum sum, if it's bigger then current value it's holds? then update
*/

// i guess best practice if constants are know before, otherwise use slices.Contains
// should check vs aeiou
func compareCharacters(r rune) bool {
	switch r {
	case 'a', 'e', 'i', 'o', 'u':
		return true
	default:
		return false
	}

}

func consonantValue(s string) int {
	max := 0
	// no need to two pointers as we can just have temp max value
	// and reset it when substring is ends
	temp := 0

	// i guess this should be made manually if performance is a concern
	alphabetMap := make(map[rune]int)

	for i, r := 0, 'a'; r <= 'z'; i, r = i+1, r+1 {
		alphabetMap[r] = i + 1
	}

	for _, c := range s {
		flag := compareCharacters(c)

		if !flag {
			temp += alphabetMap[c]
		}
		if temp > max {
			max = temp
		}
		if flag {
			temp = 0
		}
	}
	return max
}

/*
Looking into others solution, i can simplify the solution by using a switch statement directly in the calculations.
Since lowercase letters start from 'a' (97 in ASCII), I can just subtract 96 to get their corresponding value.
For uppercase letters, 'A' can be calculated as 'A' - 'a' = 32, which means I would use 64 for those.

func solve(string_ string) (maximum int) {
	var sum int
	for _, r := range string_ {
		switch r {
		case 'a', 'e', 'i', 'o', 'u':
			sum = 0
			continue
		}
		sum += int(r - 96)
		if sum > maximum {
			maximum = sum
		}
	}

	return maximum
}
*/

package arrays

func Merge(ar1 []int, n int, ar2 []int, m int) []int {
	i := n - 1
	j := m - 1
	right := n + m - 1

	for j >= 0 {
		if i >= 0 && ar1[i] > ar2[j] {
			ar1[right] = ar1[i]
			i--
		} else {
			ar1[right] = ar2[j]
			j--
		}
		right--
	}

	return ar1
}

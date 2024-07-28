package main

func findMinAndMax(arr []int) (int, int) {
	var min, max int
	min = arr[0]
	max = arr[0]
	for _, v := range arr {
		if v < min {
			min = v
		}

		if v > max {
			max = v
		}
	}
	return min, max
}
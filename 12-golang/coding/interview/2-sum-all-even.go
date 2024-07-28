package main

func sumAllEven(start int, end int) (result int) {
	for i := start; i <= end; i++ {
		if i%2 == 0 {
			result += i
		}
	}
	return
}
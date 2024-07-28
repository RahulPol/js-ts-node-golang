package main

import "math"

func isPrime(n int) bool {
	if n < 2 {
		return false
	}

	for i := 2; i < int(math.Floor(math.Sqrt(float64(n)))); i++ {
		if n % i == 0{
			return false
		}
	}
	return true
}
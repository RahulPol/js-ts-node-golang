package main

import "fmt"

func main() {
	
	// sampleGoroutineWithChannel()
	// fmt.Println(sumAllEven(1,5))
	// fmt.Println(findMinAndMax([]int{1,34,-10,45}))
	// fmt.Println(isPrime(7))
	// fmt.Println(factorial(5))
	// fmt.Println(countWords("Rahul Pol"))
	// fmt.Println(generateRandom(1,5))
	// fmt.Println(generateRandom(1,5))
	// fmt.Println(generateRandom(1,5))

	root := &Node{}

	Insert(root, 50)
	Insert(root, 30)
	Insert(root, 20)
	Insert(root, 40)
	Insert(root, 70)
	Insert(root, 60)
	Insert(root, 80)

	fmt.Println(InOrder(root))
	// fmt.Println(Search(root, 200))

	// s := NewStack()
	// s.Push(5)
	// s.Push(10)
	// s.Push(15)
	// s.Push(20)

	// val, err := s.Pop()
	// val, err = s.Pop()
	// val, err = s.Pop()
	// val, err = s.Pop()
	// val, err = s.Pop()
	// val, err = s.Pop()
	// if err != nil {
	// 	fmt.Println("Error" + err.Error())
	// }
	// fmt.Println(val)

	// k := make([]string, 5, 10)
	// m := make(map[int]int)
	// m[1]=1
	// m[23]=23

	// delete(m, 1)

	// for key,v := range m {
	// 	fmt.Println(key, v)
	// }

	// fmt.Println(k, len(k), cap(k))
}
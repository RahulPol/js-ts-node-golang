package main

func twoSum(arr []int, target int) []int {
	m := make(map[int]int)

	for i, v := range arr {
		if index, ok := m[target-v]; ok {
			return []int{i, index}
		}
		m[v] = i
	}

	return nil
}
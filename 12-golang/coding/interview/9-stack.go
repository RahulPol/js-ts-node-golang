package main

import "errors"

type Stack struct {
	data []int
}

func NewStack() *Stack {
	return &Stack{data: make([]int, 0)}
}

func (s *Stack) Push(val int) {
	s.data = append(s.data, val)
}

func (s *Stack) Pop() (int, error) {
	if len(s.data) == 0 {
		return -1, errors.New("Stack is empty")
	}
	

	result := s.data[len(s.data)-1]
	s.data = s.data[:len(s.data)-1]
	return result, nil
}
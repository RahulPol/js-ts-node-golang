package main

import "strings"

func countWords(txt string) int {
	return len(strings.Split(txt, " "))
}
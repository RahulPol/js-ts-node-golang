package main

import (
	"fmt"
	"strings"
	"time"
)

func echo(text string, ch chan string) {
	time.Sleep(2 * time.Second)
	ch <- strings.ToUpper(text)
}

func sampleGoroutineWithChannel() {
	ch := make(chan string)

	go echo("Hello", ch)

	fmt.Println(<-ch)
}
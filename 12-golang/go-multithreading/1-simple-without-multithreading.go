package main

import (
	"fmt"
	"time"
)

func count1(thing string) {
	for i := 0; true; i++ {
		fmt.Println(i,thing)
		time.Sleep(500 * time.Millisecond)
	}
}

func simpleWithoutMultithreading(){
	count1("sheep")
	count1("fish") // this code never reaches as main thread is busy executing previous function
}
package main

import (
	"fmt"
	"time"
)

func count2(thing string) {
	for i := 0; true; i++ {
		fmt.Println(i,thing)
		time.Sleep(500 * time.Millisecond)
	}
}

func simpleWithGoroutine(){
	go count2("sheep") // started as new go routine thus new thread started in background
	count2("fish") // this is running in main thread
}
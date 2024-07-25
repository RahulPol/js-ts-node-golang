package main

import (
	"fmt"
	"time"
)

func count3(thing string) {
	for i := 0; true; i++ {
		fmt.Println(i, thing)
		time.Sleep(500 * time.Millisecond)
	}
}

func allGoRoutine() {
	go count3("sheep") // started as new go routine thus new thread started in background
	go count3("fish")  // started as new go routine thus new thread started in background
	// since the main thread exits after `count3(fish)` you will not see any output

	// a way to avoid above problem is to wait on main thread for 2 secs
	// time.Sleep(2*time.Second)

	// a better (not correct) way to wait on main thread is to scan input
	// now code will execute until you enter something
	fmt.Scanln()
}
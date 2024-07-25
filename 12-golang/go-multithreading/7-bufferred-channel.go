package main

import "fmt"

func bufferedChannel() {
	// as you know read and writing on channel is blocking it might create performance issues
	// to avoid it you can create channel with buffer size, now you can write to channel until
	// buffer is full and it won't block the thread
	c := make(chan string, 2)

	c <- "Rahul"
	c <- "Pol"
	// c <- "this will block" // as the channel has buffer of 2 only 2 message can be sent until thread is blocked

	msg := <-c
	fmt.Println(msg)

	msg = <-c
	fmt.Println(msg)
}
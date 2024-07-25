package main

import (
	"fmt"
	"time"
)

// until previous version the code running in background thread was just printing output
// but now we want it to send messages(communicate) with main thread.
// this can be done by channels, consider channel as a pipeline of specific type(int,float, string, etc..) that allows you to communicate between goroutine and main thread
func count5(thing string, c chan string) { // note, the channel of type  string
	for i := 0; i < 5; i++ {
		// send data to channel 
		// this is a blocking operation means until some code reads from channel the background thread will be blocked
		c <- thing 	
		time.Sleep(500 * time.Millisecond)
	}

}

func simpleChannel(){
	c := make(chan string) // created channel of type string
	go count5("sheep",c)

	// receive "a" message from channel. 
	// note: this is a blocking operation means until the message is not received from channel the main thread will be blocked 
	msg := <- c 

	fmt.Println(msg) // this will print only 0 
	 
}
package main

import (
	"fmt"
	"time"
)


func count6(thing string, c chan string) { 
	for i := 0; i < 5; i++ {		
		c <- thing 	
		time.Sleep(500 * time.Millisecond)
	}
	close(c) // ensure that you close channel after sending all information
}

func readAllFromChannel(){
	c := make(chan string) // created channel of type string
	go count6("sheep",c)

	// for {
	// 	msg, open := <- c // open lets you know whether channel is open or not

	// 	if !open{
	// 		break
	// 	}
	// 	fmt.Println(msg)
	// }
	 
	// a better way to read all message from channel 
	for msg := range c {
		fmt.Println(msg)
	}
}
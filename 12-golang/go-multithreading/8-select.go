package main

import (
	"fmt"
	"time"
)

func selectStatement() {
	c1 := make(chan string)
	c2 := make(chan string)

	// this function sends data every 500ms
	go func(){
		for{
			c1 <- "Every 500ms"
			time.Sleep(time.Millisecond * 500)
		}
	}()
	
	// this function sends data every 2s
	go func(){
		for{
			c2 <- "Every 2s"
			time.Sleep(time.Second * 2)
		}
	}()

	
	// now with following for loop we can read from both channel however its not performant solution
	// as reading is blocking operation by the time we read from c2, c1 has written more data
	// for{
	// 	fmt.Println(<-c1)
	// 	fmt.Println(<-c2)
	// }

	// a better solution is to use select statement
	for{
		// select receives data from which channel is ready to send it
		select{
		case msg1 := <- c1: 
			fmt.Println(msg1)
		case msg2 := <- c2:
			fmt.Println(msg2)
		}
	}
}
package main

import (
	"fmt"
	"sync"
	"time"
)

func count4(thing string) {
	for i := 0; i < 5; i++ {
		fmt.Println(i,thing)
		time.Sleep(500 * time.Millisecond)
	}

}

func waitGroup(){
	// a right way to wait for go routine is to add it in a wait group 
	var wg sync.WaitGroup
	// before starting go routine you are telling go that you have 1 go routine to wait for
	// after go routine is completed you need to remove it from go routine
	wg.Add(1)

	// to remove from wait group, one way is to send wait group to count4 function but 
	// it should not be responsibility of count4 to manage wait group

	// so create an anonymous function, run it as go routine and at the end of it 
	// remove it from wait group
	go func(){
		defer wg.Done() // decrements counter by 1
		count4("sheep") // started as new go routine thus new thread started in background
		
	}()
	
	// now wait until all go routines are done
	wg.Wait()
}
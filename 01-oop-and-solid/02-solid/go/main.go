package main

import "fmt"

func main() {
	// j := NewJournal()
	// j.addEntry("Rahul")
	// j.printEntries()
	// j.removeEntry()
	// j.printEntries()

	ctd := NewCarTypeDiscount()
	mySUV := NewCar(SUV, 1000, []IDiscount{ctd})
	fmt.Println(mySUV.Price())

	myTruck := NewCar(Truck, 1000, []IDiscount{ctd})
	fmt.Println(myTruck.Price())
}
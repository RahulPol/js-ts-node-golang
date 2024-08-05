package main

type CarType int

const (
	SUV CarType = iota
	Truck
	Sedan
)

type IDiscount interface {
	canApply(car *Car) bool
	discount(car *Car) float64
}

type CartTypeDiscount struct {
}

func (ctd *CartTypeDiscount) canApply(car *Car) bool {
	return car.carType == SUV
}

func (ctd *CartTypeDiscount) discount(car *Car) float64 {
	return car.price * 10 * 0.01
}

type BlackFridayDiscount struct {
}

func (bfd *BlackFridayDiscount) canApply(car *Car) bool {
	return car.price > 1000
}

func (bfd *BlackFridayDiscount) discount(car *Car) float64 {
	return car.price * 15 * 0.01
}

func NewCarTypeDiscount() *CartTypeDiscount {
	return &CartTypeDiscount{}
}

type Car struct {
	carType   CarType
	price     float64
	discounts []IDiscount
}

func NewCar(carType CarType, price float64, discounts []IDiscount) *Car {
	return &Car{carType: carType, price: price, discounts: discounts}
}

func (car *Car) Price() float64 {
	var discountAmount float64
	for _, discount := range car.discounts {
		if discount.canApply(car) {
			discountAmount += discount.discount(car)
		}
	}

	return car.price - discountAmount
}

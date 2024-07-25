package main

type IDatabase interface {
	Create() bool
	Read()
}

//--------------pending, refer to ts/5-dip.ts-------------------
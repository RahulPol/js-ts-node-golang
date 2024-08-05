package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type StructA struct {
	FieldA string `json:"field_a"`
}

type StructB struct {
	NestedStruct StructA 
	FieldB       int `json:"field_b"`
}

type StructC struct {
	NestedStructPointer *StructA
	FieldC              string `json:"field_c"`
}

type StructD struct {
	NestedAnonymousStruct struct {
		FieldX float64 `json:"field_x"`
	}
	FieldD bool `json:"field_d"`
}

func GetAData(c *gin.Context){
	var a StructA

	// binding will give an error only when
	// field is of different type
	// else will send blank object back

	err := c.ShouldBindBodyWithJSON(&a)

	if(err != nil){
		c.JSON(http.StatusBadRequest, "Invalid json")
		return
	}

	c.JSON(http.StatusOK, a)
}

func GetBData(c *gin.Context){
	var b StructB

	err := c.ShouldBindBodyWithJSON(&b)

	if(err != nil){
		c.JSON(http.StatusBadRequest, "Invalid json")
		return
	}

	c.JSON(http.StatusOK, b)
}

func GetCData(c *gin.Context){
	var cStruct StructC

	err := c.ShouldBindBodyWithJSON(&cStruct)

	if(err != nil){
		c.JSON(http.StatusBadRequest, "Invalid JSON")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"a": cStruct.NestedStructPointer,
		"c": cStruct.FieldC,
	})
}

func GetDData(c *gin.Context){
	var d StructD

	err := c.ShouldBindBodyWithJSON(&d)

	if(err != nil){
		c.JSON(http.StatusBadRequest, "Invalid JSON")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"a": d.NestedAnonymousStruct,
		"c": d.FieldD,
	})
}

func bindJsonServer(){
	r := gin.Default()
	


	r.POST("/getadata", GetAData)
	r.POST("/getbdata", GetBData)
	r.POST("/getcdata", GetCData)
	r.POST("/getddata", GetDData)


	r.Run(":3001")
}
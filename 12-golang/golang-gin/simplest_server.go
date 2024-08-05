package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func simplest_server() *gin.Engine{
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context){
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	
	// r.Run(":3001")
	return r
}
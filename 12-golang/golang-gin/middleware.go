package main

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

func Logger() gin.HandlerFunc {
	return func(c *gin.Context) {
		t := time.Now()

		// Set example variable
		c.Set("example", "12345")

		// before request

		c.Next()

		// after request
		latency := time.Since(t)
		log.Print(latency)

		// access the status we are sending
		status := c.Writer.Status()
		log.Println(status)
	}
}

func middleware() {
	r := gin.Default()
	r.Use(Logger())

	r.GET("/middleware", func(c *gin.Context){
		example := c.MustGet("example").(string)
		// example := c.MustGet("example1").(string) // try this 

		// it would print: "12345"
		log.Println(example)
	})

	r.Run(":3001")
}
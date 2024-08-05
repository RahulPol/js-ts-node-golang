package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)



func bindQueryString() {
	r := gin.Default()

	r.GET("/query_param", func(c *gin.Context){
		var id string

		id, ok := c.GetQuery("id")

		fmt.Println(id)
		if !ok {
			c.JSON(http.StatusBadRequest, "invalid params")
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"id": id,
		})
	})

	r.GET("/uri_param/:id", func(c *gin.Context){
		id := c.Param("id")

		if id == "" {
			c.JSON(http.StatusBadRequest, "invalid params")
		}

		c.JSON(http.StatusOK, gin.H{
			"id": id,
		})
	})

	r.Run(":3001")
}